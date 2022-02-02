import React,{useEffect, useRef, useState} from 'react'
import { getEmployeeById,updateEmployee } from '../config/Myservice';
import { useNavigate,useParams } from 'react-router-dom';
import swal from 'sweetalert';
function Editemployee() {

const{id}=useParams();
const [proData,setProdata]=useState({});
const enameRef=useRef(null);
const ageRef=useRef(null);
const cityRef=useRef(null);
const salaryRef=useRef(null);
const navigate=useNavigate();


useEffect(()=>{
    getEmployeeById(id)
    .then(res=>{
        if(res){
            setProdata(res.data)
        }
    })
})
 
const editpostProduct=(event)=>{
    event.preventDefault();
    let formData={
                ename:enameRef.current.value,
                age:ageRef.current.value,
                city:cityRef.current.value,
                salary:salaryRef.current.value
            }
       
      updateEmployee(id,formData)
      .then(res=>{
          if(res){
              swal("Data Upadated successfully","","success")
              navigate("/")
          }
      })      

}

    return (
        <div className='row justify-content-center'>
           <div className='col-lg-8'>
           <h1>Edit Employee</h1>
        <form onSubmit={editpostProduct}>
            <div className='form-group' >
                <label>Ename</label>
                <input type="text" className='form-control' ref={enameRef} defaultValue={proData.ename} required />
            </div>
            <div  className='form-group' >
                <label>Age</label>
                <input type="text" className='form-control' ref={ageRef} defaultValue={proData.age} required/>
            </div>
            <div  className='form-group' >
                <label>City</label>
                <input type="text" className='form-control' ref={cityRef} defaultValue={proData.city} required/>
            </div>
            <div  className='form-group'>
                <label>Salary</label>
                <input type="text" className='form-control' ref={salaryRef} defaultValue={proData.salary} required/>
            </div>
            <div className='text-center mt-2'>
            <input type="submit" className='btn btn-success' value="Update"/>

            </div>
        </form>

           </div>
        </div>
    )
}

export default Editemployee
