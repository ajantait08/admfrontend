import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

//import importGlobal from 'import-global'

// ** Config
import authConfig from 'src/configs/auth'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import MuiAlert from '@mui/material/Alert';
import swal from 'sweetalert';
//import he from 'he';

// axios.defaults.baseURL = 'http://localhost:8000/';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = false;

// ** Defaults

const defaultProvider = {
  user: null,
  isInitialized: false,
  //verifyEmail : () => Promise.resolve(),
  //verifyEmailMsg : true
}

const url = process.env.APIURL;
const UserDashboardContext = createContext(defaultProvider)

const UserDashboardProvider = ({children}) => {

    const router = useRouter();
    useEffect(()=>{

    },[]);

    const values = {

    }

    return <UserDashboardContext.Provider value={values}>{children}</UserDashboardContext.Provider>

}

export { UserDashboardContext, UserDashboardProvider }


