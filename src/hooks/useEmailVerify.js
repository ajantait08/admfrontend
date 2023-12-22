import { useContext } from 'react'
import { AuthContext } from 'src/context/Context'

export const useAuth = () => useContext(AuthContext)