import { useContext }  from 'react';
import { UserDashboardContext } from 'src/context/UserDashboardContext';

export const useUserDashboard = () => useContext(UserDashboardContext)
