import { useState, Fragment , forwardRef , useEffect } from 'react'
// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    //backgroundColor: theme.palette.common.black
    backgroundColor: theme.palette.common.phd_admission_dark
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const StepEducationDetails = ({ handleNext, handlePrev }) => {

  // ** States
    const [values, setValues] = useState({
      salutation : '',
      first_name : '',
      middle_name : '',
      last_name : '',
      category : '',
      colorblindness : '',
      mobile : '',
      father_name : '',
      blood_group : '',
      email : '',
      pwd : '',
      gender : '',
      dob : ''
  })

  const [errors , setErrors] = useState({
    salutation : '',
    first_name : '',
    middle_name : '',
    last_name : '',
    category: '',
    colorblindness : '',
    mobile:'',
    father_name : '',
    blood_group : '',
    email : '',
    pwd : '',
    gender : '',
    dob : ''
  })

  const handleChangeFormData =  prop => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5'>Education Information</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Education Information</Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Applicant'\s Name :`}
                name='applicant_name'
                placeholder={`Enter Applicant'\s Name`}
                value={values.applicant_name}
                onChange={handleChangeFormData('applicant_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.applicant_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.applicant_name}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Name of the Parent/Guardian :'
                name='name_parent_guardian'
                placeholder={`Enter Name of the Parent/Guardian`}
                value={values.name_parent_guardian}
                onChange={handleChangeFormData('name_parent_guardian')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.name_parent_guardian && <FormHelperText sx={{ color: 'error.main' }}>{errors.name_parent_guardian}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Relationship with Parent/Guardian :'
                name='rel_with_parent_guardian'
                placeholder={`Enter Relationship with Parent/Guardian`}
                value={values.rel_with_parent_guardian}
                onChange={handleChangeFormData('rel_with_parent_guardian')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.rel_with_parent_guardian && <FormHelperText sx={{ color: 'error.main' }}>{errors.rel_with_parent_guardian}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Divyang (PwD) :'
                name='pwd'
                placeholder={`Enter Divyang (PwD)`}
                value={values.pwd}
                onChange={handleChangeFormData('pwd')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.pwd && <FormHelperText sx={{ color: 'error.main' }}>{errors.pwd}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Religion :'
                name='religion'
                placeholder={`Enter Religion`}
                value={values.religion}
                onChange={handleChangeFormData('religion')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.religion && <FormHelperText sx={{ color: 'error.main' }}>{errors.religion}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='DOB :'
                name='dob'
                placeholder={`Enter DOB`}
                value={values.dob}
                onChange={handleChangeFormData('dob')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.dob && <FormHelperText sx={{ color: 'error.main' }}>{errors.dob}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Mobile Number :'
                name='mobile'
                placeholder={`Enter Mobile Number`}
                value={values.mobile}
                onChange={handleChangeFormData('mobile')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.mobile && <FormHelperText sx={{ color: 'error.main' }}>{errors.mobile}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Gender :'
                name='gender'
                placeholder={`Enter Gender`}
                value={values.registration_no}
                onChange={handleChangeFormData('gender')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.gender && <FormHelperText sx={{ color: 'error.main' }}>{errors.gender}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Course :'
                name='course'
                placeholder={`Enter Course`}
                value={values.registration_no}
                onChange={handleChangeFormData('course')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.course && <FormHelperText sx={{ color: 'error.main' }}>{errors.course}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Registration No. :'
                name='registration_no'
                placeholder={`Enter Registration No.`}
                value={values.registration_no}
                onChange={handleChangeFormData('registration_no')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.registration_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.registration_no}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Guardian's Mobile Number :`}
                name='guardian_mobile_number'
                placeholder={`Enter Guardian's Mobile Number :`}
                value={values.guardian_mobile_number}
                onChange={handleChangeFormData('guardian_mobile_number')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.guardian_mobile_number && <FormHelperText sx={{ color: 'error.main' }}>{errors.guardian_mobile_number}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Category :`}
                name='category'
                placeholder={`Enter Category :`}
                value={values.category}
                onChange={handleChangeFormData('category')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Nationality :`}
                name='nationality'
                placeholder={`Enter Nationality :`}
                value={values.category}
                onChange={handleChangeFormData('nationality')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.nationality && <FormHelperText sx={{ color: 'error.main' }}>{errors.nationality}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Martial Status :`}
                name='martial_status'
                placeholder={`Enter Martial Status :`}
                value={values.category}
                onChange={handleChangeFormData('martial_status')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.martial_status && <FormHelperText sx={{ color: 'error.main' }}>{errors.martial_status}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Email :`}
                name='email'
                placeholder={`Enter Email :`}
                value={values.email}
                onChange={handleChangeFormData('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Aadhaar Number :`}
                name='aadhaar_no'
                placeholder={`Enter Aadhaar Number :`}
                value={values.email}
                onChange={handleChangeFormData('aadhaar_no')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.aadhaar_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.aadhaar_no}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Color blindness/uniocularity :`}
                name='colorblind'
                placeholder={`Enter Color blindness/uniocularity :`}
                value={values.colorblind}
                onChange={handleChangeFormData('colorblind')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.colorblind && <FormHelperText sx={{ color: 'error.main' }}>{errors.colorblind}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

            </Grid>

            <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid container spacing={5}>
            <Grid item xs={12}>
            <Typography sx={{ color: 'text.primary' }}>Correspondence Address:<span style={{ color : 'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: 'error.main' }}>*Line1 Address, City and District, State, Pincode are mandatory</Typography>
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
            </Grid>
            </Grid>
              </Box>
              </Grid>

            <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid container spacing={5}>
            <Grid item xs={12}>
            <Typography sx={{ color: 'text.primary' }}>Permanent Address<span style={{ color : 'red'}}>*</span><Checkbox/>(same as Correspondence)</Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingTop:0 }}>
            <Typography sx={{ color: 'error.main'}}>*Line1 Address, City and District, State, Pincode are mandatory</Typography>
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label={`Application Type :`}
                name='application_type'
                placeholder={`Enter Application Type :`}
                value={values.application_type}
                onChange={handleChangeFormData('application_type')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.application_type && <FormHelperText sx={{ color: 'error.main' }}>{errors.application_type}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
            </Grid>
            </Grid>
              </Box>
              </Grid>

              <Grid item xs={12}>
              <Box sx={{ mb: 4 , display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ color: 'error.main'}} >NOTE: No special characters are allowed in address</Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>Enter Your Personal Information</Typography> */}
              </Box>
              </Grid>

              <Grid item xs={12}>
              <Box sx={{ mb: 4 , display: 'flex', justifyContent: 'center' }}>
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align='right'>Calories</StyledTableCell>
            <StyledTableCell align='right'>Fat (g)</StyledTableCell>
            <StyledTableCell align='right'>Carbs (g)</StyledTableCell>
            <StyledTableCell align='right'>Protein (g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.calories}</StyledTableCell>
              <StyledTableCell align='right'>{row.fat}</StyledTableCell>
              <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
              <StyledTableCell align='right'>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Box>
      </Grid>

          <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              color='secondary'
              variant='contained'
              onClick={handlePrev}
              startIcon={<Icon icon='mdi:chevron-left' fontSize={20} />}
            >
              Previous
            </Button>
            <Button variant='contained' onClick={handleNext} endIcon={<Icon icon='mdi:chevron-right' fontSize={20} />}>
              Next
            </Button>
          </Box>
          </Grid>
      </Grid>
    </>
  )
}

export default StepEducationDetails
