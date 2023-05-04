import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App;

// import React from 'react';
// import { makeStyles } from '@mui/material/styles';
// import { TextField, Grid, Typography, Paper } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     backgroundColor: '#000000',
//     color: '#FFFFFF',
//   },
//   form: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '100%',
//     },
//   },
// }));

// const App = () => {
//   const classes = useStyles();

//   return (
//     <div >
//       <Paper elevation={3} >
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h6">GST Number</Typography>
//             <TextField variant="filled" color="primary" />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h6">Email</Typography>
//             <TextField variant="filled" color="primary" />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h6">Contact Number</Typography>
//             <TextField variant="filled" color="primary" />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h6">Company Name</Typography>
//             <TextField variant="filled" color="primary" />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="h6">Registered Address</Typography>
//             <TextField variant="filled" color="primary" multiline rows={4} />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="h6">Office Address</Typography>
//             <TextField variant="filled" color="primary" multiline rows={4} />
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Grid,Typography, Paper, TableContainer,Table,TableHead,TableBody,TableCell,TableRow} from '@mui/material';
// import moment from 'moment';


// const App = () => {

//   const [formData, setFormData] = useState({
//     gstnumber: 'xxxx',
//     email: 'abcdef@gmail.com',
//     contactnumber: '+91xxxxxxxxxx',
//     companyname: 'Enter Company Name',
//     registeredaddress: 'Enter Registered Address',
//     officeaddress: 'Enter Office address',
//     additionaldetails1:'',
//     additionaldetails2: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     console.log(formData); 
//   };

//   return (
//     <div style={{background:'black',padding:50,color:'white',}}>
//       <Grid container spacing={2} style={{display:'flex'}}>
//         <Grid item md={6} xs={12}>
//       <Box>
//        <Grid container row spacing={5}>
//         <Grid item lg={6} xs={12}>
//           <p>GST No.</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//          placeholder="GST Number"
//         name="gstnumber"  
//          value={formData.gstnumber}
//          onChange={handleInputChange}
//          ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>Email</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//         placeholder='Email' 
//         name="email" 
//         value={formData.email}
//          onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>Contact No.</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//           placeholder='Contact Number' 
//           name="contactnumber" 
//           value={formData.contactnumber}
//           onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>Company Name</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//         placeholder='Company Name'
//         name="companyname" 
//         value={formData.companyname}
//         onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>Registered Address</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//         placeholder='Registered Address'
//         name="registeredaddress" 
//         value={formData.registeredaddress}
//         onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>office Address</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//         placeholder='Office Address'
//         name="officeaddress" 
//         value={formData.officeaddress}
//         onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>Additional Details 1</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//         placeholder='Additional Details 1'
//         name="additionaldetails1" 
//         value={formData.additionaldetails1}
//         onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         <Grid item lg={6}  xs={12}>
//         <p>Additional Details 2</p>
//         <TextField style={{background:'white',borderRadius:10,width:300}}
//         placeholder='Additional Details 2' 
//         name="additionaldetails2" 
//         value={formData.additionaldetails2}
//         onChange={handleInputChange}
//         ></TextField>
//         </Grid>
//         </Grid>
//       </Box>
//       </Grid>
//       <Grid item md={6} xs={12} style={{color:'black'}}>
      {/* <Box style={{ border: '1px solid #000', padding: '5px',background:'white',height:600 }}>
      <form style={{padding:10,alignItems:'left'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="GST Number"
            variant="outlined"
            fullWidth
            value={formData.gstnumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Number"
            variant="outlined"
            fullWidth
            value={formData.contactnumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={formData.companyname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Registered Address"
            variant="outlined"
            fullWidth
            value={formData.registeredaddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Office Address"
            variant="outlined"
            fullWidth
            value={formData.officeaddress}
            />
              </Grid>
              <Grid item xs={12}>
          <TextField
            label="Additional Details 1"
            variant="outlined"
            fullWidth
            value={formData.additionaldetails1}
            />
              </Grid>
              <Grid item xs={12}>
          <TextField
            label="Additional Details 2"
            variant="outlined"
            fullWidth
            value={formData.additionaldetails2}
            />
              </Grid>
      </Grid>
     </form>
      </Box> */}
//                    <Paper >
//                    <Box sx={{ border: '1px solid #000', padding: '5px' }}>
//                    <Box style={{display:'flex',justifyContent:'space-between'}}>
//                    <Typography sx={{ textAlign: 'start' }}>
//               <strong>GSTIN : {formData.gstnumber}</strong>
//             </Typography>
//             <Typography sx={{ textAlign: 'end' }}>
//               email : {formData.email}
//             </Typography>
//                  </Box>
//                  <Typography
//             sx={{
//               textAlign: 'center',
//               fontSize: '25px',
//               fontWeight: 400,
//             }}
//           >
//             {formData.companyname}
//           </Typography>
//           <Typography sx={{ textAlign: 'center' }}>
//             {' '}
//             Authorised transport contractors of :{' '}
//             <strong style={{ textTransform: 'uppercase' }}>
//               bHAVYA CEMENTS LIMITED
//             </strong>
//           </Typography>
//           <Box display={'flex'} textAlign={'center'}>
//             <Typography>Office : {formData.officeaddress},</Typography>
//             <Typography>v.srinivasa redddy : {formData.contactnumber},</Typography>
//             <Typography>u.linga reddy : {formData.contactnumber}</Typography>
//           </Box>
//           <hr style={{ marginBottom: 0 }} />
//           <hr
//             style={{
//               color: '#000',
//               marginTop: 2,
//               border: '1px solid #000',
//             }}
//           />
//           <Typography textAlign={'center'} wordWrap={' break-word'}>
//             Regd Add :{formData.registeredaddress}
//           </Typography>
//           <Typography textAlign={'center'}>
//             Office : {formData.officeaddress}
//           </Typography>
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               marginTop: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             <hr style={{ borderTop: '1px doted #000', width: '35%' }} />
//             <Typography
//               sx={{
//                 width: '30%',
//                 textAlign: 'center',
//                 borderRadius: '10px',
//                 background: '#000',
//                 color: '#fff',
//                 fontSize: '28px',
//               }}
//             >
//               Freight Letter
//             </Typography>
//             <hr style={{ borderTop: '1px doted #000', width: '35%' }} />
//           </div>
//           <Box display={'flex'} justifyContent={'space-between'}>
//             <Typography sx={{ textAlign: 'start' }}>
//               SL NO : 10
//             </Typography>
//             <Typography sx={{ textAlign: 'end' }}>
//                Date : 23.2.2023
//             </Typography>
//           </Box>
//           <Typography textAlign={'center'}>To</Typography>
//           <TableContainer>
//           <Table sx={{ minWidth: 650 }} aria-label='simple table'>
//           <TableHead>
//           <TableRow>
//                   <TableCell>SL No</TableCell>
//                   <TableCell>DESCRIPTION OF GOODS BHAVYA CEMENTS</TableCell>
//                   <TableCell>Value</TableCell>
//           </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>1</TableCell>
//               <TableCell>O.A number</TableCell>
//               <TableCell>1436</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>2</TableCell>
//               <TableCell>Consigner Name</TableCell>
//               <TableCell>Bhavya Cements</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>3</TableCell>
//               <TableCell>Consignee Name</TableCell>
//               <TableCell>Madhu</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>4</TableCell>
//               <TableCell>Grade</TableCell>
//               <TableCell>4</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>5</TableCell>
//               <TableCell>Loading Quantity</TableCell>
//               <TableCell>14</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>6</TableCell>
//               <TableCell>DC Station</TableCell>
//               <TableCell>Tamilnadu</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>7</TableCell>
//               <TableCell>District</TableCell>
//               <TableCell>Ranga Reddy dist</TableCell>
//             </TableRow>
//           </TableBody>
//           </Table>
//           </TableContainer>
//           <Box display={'flex'} justifyContent={'space-between'}>
//             <Typography sx={{ textAlign: 'start' }}>
//               Driver signature{' '}
//             </Typography>
//             <Typography sx={{ textAlign: 'end' }}>
//               For : RPPID Transport systems
//             </Typography>
//           </Box>
//           <hr style={{ borderTop: '1px dashed #000' }} />
//         </Box>
//       </Paper>
//     </Grid>
//     </Grid>
//   </div>
//   )
// }

// export default App

