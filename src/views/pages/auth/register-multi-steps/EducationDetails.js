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

const Customtypography = styled(Typography)(({theme}) => ({
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: `${theme.palette.common.phd_admission_dark}`
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

  const [showDiv, setShowDiv] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowDiv(selectedValue === 'yes');
  };

  const handleChangeFormData =  prop => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <>

      <Grid container spacing={5}>

      <Grid item xs={12}>
        <Box sx={{ mb: 4 , display: 'flex', justifyContent: 'center'}}>
        <Customtypography variant="h5">Education Details</Customtypography>
        {/* <Typography sx={{ color: 'text.secondary' }}>Enter Your Personal Information</Typography> */}
        </Box>
        </Grid>

        <Grid item xs={12} sm={3}></Grid>

        <Grid item xs={12} sm={6}>
        <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
        <Typography>Are You An IIT Graduate ?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
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
              </Grid>
              </Grid>

              { showDiv ?
        <>
        <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
        <Typography>Are You An IIT Graduate ?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
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
              </Grid>
              </Grid>

              <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
        <Typography>Are You An IIT Graduate ?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
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
              </Grid>
              </Grid>

              <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
        <Typography>Are You An IIT Graduate ?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
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
              </Grid>
              </Grid>
              </>

              : '' }

        </Grid>

        <Grid item xs={12} sm={3}></Grid>

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
