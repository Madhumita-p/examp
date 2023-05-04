import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Form = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [addData, setAddData] = useState({
        username: '',
        email: '',
        mobile: '',
    });

    const [tableData, setTableData] = useState([]);
    const [newData, setNewData] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAddData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        const mobileNumberRegex = /^[456789]\d{9}$/; //make a validation in number
        setIsValid(mobileNumberRegex.test(value));
        setMobileNumber(value);
    };

    const handleSubmit = (event) => { //to submit the form
        event.preventDefault();
        setTableData((prevState) => [...prevState, addData]);
        setInputValue('');
        setAddData({
            username: '',
            email: '',
            mobile: '',
        });
        if (!newData) return;
        handleSubmit({ text: newData, isCompleted: false });
        setNewData("");

    };

    const [open, setOpen] = React.useState(false); //to open dialog box

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = (index) => { //to delete 
        const newData = [...tableData];
        newData.splice(index, 1);
        setTableData(newData);
    }
    const handleUpdateData = (index, newValue) => {
        const newTodos = {...addData};
        newTodos[index] = { ...newTodos[index] ,...newValue};
        setAddData({
            username: '',
            email: '',
            mobile: '',
        });
    };

    

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ background: "blue", color: "#fff", width: 200, margin: 20 }} onClick={handleClickOpen}>Log In</Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <Dialog open={open}
                    onClose={handleClose}>
                    <form onSubmit={handleSubmit} style={{ margin: 20, fontSize: 18 }}>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={addData.username}
                                onChange={handleInputChange}
                                newvalue={newData}
                                onClick={(e) => setNewData(e.target.value)}
                            />
                        </label><br />
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={addData.email}
                                newvalue={newData}
                                onChange={handleInputChange}
                            />
                        </label><br />
                        <label>
                            Mobile Number:
                            <input
                                type="number"
                                name="mobile"
                                placeholder='enter mobile number'
                                value={mobileNumber}
                                onChange={handleInputChange}
                            />
                            {isValid ? "Valid mobile number" : "Invalid mobile number"
                            }

                        </label><br />

                        <Button type="submit" style={{ background: "blue", color: "#fff", width: 100, marginInlineStart: 350, marginTop: 20 }} >Add</Button>
                    </form>

                </Dialog>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Mobile Number</StyledTableCell>
                                <StyledTableCell>Update/Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((data, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{data.username}</StyledTableCell>
                                    <StyledTableCell>{data.email}</StyledTableCell>
                                    <StyledTableCell>{data.mobile}</StyledTableCell>
                                    <Button type="update" onClick={handleClickOpen} onChange={() => handleUpdateData(index, "New Value")}>Update</Button>
                                    <Button type="cancel" onClick={() => handleDelete(index)}>Delete</Button>
                                </StyledTableRow >
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default Form;