import React,{useRef,useEffect,useState} from 'react'
import { addEmployee } from '../config/Myservice';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
function Addemployee() {

const enameRef=useRef(null);
const ageRef=useRef(null);
const cityRef=useRef(null);
const salaryRef=useRef(null);
const navigate=useNavigate();
const [hasError, setError] = useState(false);

//auto focus
useEffect(()=>{
    enameRef.current.focus();
    
  }, []);

  

  //form submit
const postEmployee=(event)=>{
 event.preventDefault();

 
 
 let formData={
                ename:enameRef.current.value,
                age:ageRef.current.value,
                city:cityRef.current.value,
                salary:salaryRef.current.value
            }

       
            //validation End
            
                
            addEmployee(formData)
            .then(res=>{
                if(res){
                    swal("Done!", "Product Added Successfully", "success");
                    navigate("/")
                   
                }
                
            })
          
            
}

    return (
        <div className='row justify-content-center '>
           <div className='col-lg-8'>
           <h1 className='text-center mt-3'>Add Employee</h1>
        <form onSubmit={postEmployee}>
            <div className='form-group ' >
                <label>Employee Name</label>
                <input type="text" className='form-control ak' ref={enameRef} required  />
            </div>
            <div  className='form-group' >
                <label>Age</label>
                <input type="number" className='form-control' ref={ageRef} required />
            </div>
            <div  className='form-group' >
                <label>City</label>
                <input type="text" className='form-control' ref={cityRef}  required/>
            </div>
            <div  className='form-group'>
                <label>Salary</label>
                <input type="number" className='form-control' ref={salaryRef} required/>
            </div>
            <div className='text-center mt-2'>
            <input type="submit" className='btn btn-success' value="Add Employee" />

            </div>
        </form>


           </div>
        </div>
    )
}

export default Addemployee
