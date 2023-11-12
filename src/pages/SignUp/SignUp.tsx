import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Login from '../login/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; // นำเข้า Link จาก react-router-dom
import { AppBar, Toolbar } from '@mui/material';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Theme = createTheme({
  palette: {
    primary: {
      main: "#313131",
    },
    secondary: {
      main: "#C70039",
    },
    info: {
      main: "#164DC9",
    },
  },
});

export default function SignUp() {
  const navigate = useNavigate();
  const [message, setAlertMessage] = React.useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '', 
    dateOfBirth: '',
    gender: 'male',
    address: '',
    idcard: '',
    lasorcode: '',
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
    setError(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <ThemeProvider theme={Theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button  color='secondary' onClick={() => navigate('/')}>Sign In</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" >
        <CssBaseline />
         <Typography component="h1" variant="h5" sx={{marginTop:8}} >
            ลงทะเบียนผู้ใช้งาน
          </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ (First Name)"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล (Last Name)"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
            
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber" 
                  label="เบอร์โทร (Phone Number)"
                  type="tel"
                  id="phoneNumber"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}  sm={4}>
                <TextField
                  required
                  fullWidth
                  name="dateOfBirth"
                  label="วันเดือนปีเกิด (Date of Birth)"
                  type="date"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="ที่อยู่ที่ติดต่อได้ (Address)"
                  multiline
                  
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl >
                  <FormLabel component="legend" sx={{ textAlign: 'left' }}>
                    เพศ (Gender)
                  </FormLabel>
                  <RadioGroup
                    aria-label="เพศ (Gender)"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="ชาย (Male)" />
                    <FormControlLabel value="female" control={<Radio />} label="หญิง (Female)" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} > </Grid>
              <Grid item xs={12} > 
              <Typography component="h1" variant="h5" >
               ข้อมูลบัตรประชาชน
              </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  name="idcard"
                  required
                  fullWidth
                  id="idcard"
                  label="เลขบัตรประชาชน 13 หลัก"
                  autoFocus
                  value={formData.idcard}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="lasor code"
                  label="เลขหลังบัตรประชาชน"
                  name="lasor code"
                  value={formData.lasorcode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate('/')}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" >
                  มีบัญชีอยู่แล้ว? เข้าสู่ระบบ (Already have an account? Sign in)
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}