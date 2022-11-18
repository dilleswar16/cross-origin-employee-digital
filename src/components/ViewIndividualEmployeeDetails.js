import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { API_BACKEND_URL } from '../config';
import UpdateEmployeeDetails from './UpdateEmployeeDetails';

//axios.defaults.withCredentials=true;

const ViewIndividualEmployeeDetails = () => {

  let params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [employeeData,setEmployeeData] = useState();

  useEffect(() => {

    if(localStorage.ROLE === undefined){
      navigate('/login');
      
 }

    axios.get(`${API_BACKEND_URL}/getemployee/${params.employeeId}`)
    .then((response)=>{
      setEmployeeData(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div>
      {employeeData && 
      <UpdateEmployeeDetails fromView="VIEW" emp={employeeData}/>}
     
    </div>
  )
}

export default ViewIndividualEmployeeDetails
