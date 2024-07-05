import {ReactNode} from 'react';
import { useAppSelector } from '../redux/hooks';
import { Navigate } from 'react-router-dom';


/**
 * protected route ke ami Central Layout a lagaite pari , if(amr full project protected rakhte chay | except login and reg, i know why !)
 * ar jodi only kichu kichu page protected rakhte hoi tahole route.tsx a giye akta akta element a wrap kore aste hobe ! 
 */


const ProtectedRoute = ({children}:{children:ReactNode}) => {
  
    const token = useAppSelector(state=>state.auth.token);
    if(!token){
        return <Navigate to={'/login'} replace={true}/>
    }

    return children
}

export default ProtectedRoute


