
import {  useLocation, } from "react-router-dom";
import { Navigate } from "react-router-dom";



const  PrivateRoute =  ({children} : any) => {
  const isLoggedIn =  localStorage.getItem("token")
  const location= useLocation()
 if(!isLoggedIn){
  return<Navigate to="/" state={{from: location}} replace />
 }
 return children

}
export default PrivateRoute;