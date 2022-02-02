
import React,{ useState,useEffect } from 'react';
import { getEmployee,deleteEmployee } from '../config/Myservice';
import swal from 'sweetalert';
import { Link,useNavigate } from 'react-router-dom';
export default function Home() {

    const navigate=useNavigate();
const [empData,setEmpData]=useState([])
//Fetching All products
useEffect(()=>{
        getEmployee()
        .then(res=>{
            setEmpData(res.data)
        })
},[])

//Deleting Products

const delProduct=(id)=>{
   
    if(window.confirm("want to delete")){

        deleteEmployee(id)
        .then(res=>{
            if(res){
                swal("Employee Deleted Successfuly","","success")
                getEmployee()
                .then(res=>setEmpData(res.data))
                 
            }
        })
    }
       
    
}
const editProduct=(id)=>{
    navigate(`/editemployee/${id}`);
}


  return (
      <>
      <h1 className='text-center'>All Employee</h1>
      <Link className="nav-link" to="/addemployee"><button className='btn btn-primary mt-3 mb-2'>Add New Employee +</button></Link>
      <table className='table table-bordered table-hover'>
                       <thead>
                       <tr>
                           <th>No</th>
                           <th>Employee Name</th>
                           <th>Age</th>
                           <th>City</th>
                           <th>Salary</th>
                           <th>Edit</th>
                           <th>Delete</th>
                           
                       </tr>
                       </thead>
                       <tbody>
                           {empData.map((pro,idx)=>
                           <tr key={pro.id}>
                               <td>{idx+1}</td>
                               <td>{pro.ename}</td>
                               <td>{pro.age}</td>
                               <td>{pro.city}</td>
                               <td>{pro.salary}</td>
                              
                               <td><input type="button" value="Edit" onClick={()=>editProduct(pro.id)} className="btn btn-warning"/></td>
                              <td> <input type="button" value="Delete" onClick={()=>delProduct(pro.id)} className="btn btn-danger"/></td>
                           </tr>
                           
                           )}
                       </tbody>

                   </table>
      </>
      
  );
}
