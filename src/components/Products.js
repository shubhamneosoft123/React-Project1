import React,{useState,useEffect} from 'react'
import { getProducts } from '../config/Myservice';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
import ReactPaginate from 'react-paginate'

export default function Products() {
    const dispatch=useDispatch();
    const [proData,setProdata]=useState([]);
    const [pageCount, setPageCount] = useState(0);
    
    let limit=6;

//fetching All the products
    useEffect(()=>{
        getProducts()

        .then(res=>{
            const total =res.headers["x-total-count"];
            setPageCount(Math.ceil(total / limit));
            console.log(total)
            setProdata(res.data)
            
        })
        .catch(err=>console.log(err))
    },[])

//pagination

// const fetchProducts =async (currentPage)=>{
//     const res =await fetch(
//         `http://localhost:3002/products?_page=${currentPage}&_limit=6`
//     );
//     const data=  await res.json();
//     return data;
// };

const fetchProducts =(currentPage)=>{
    return axios.get(`http://localhost:3002/products?_page=${currentPage}&_limit=6`)
    .then(res=>{
        return res.data;
    })
}




const handlePageClick=async(event)=>{
    console.log(event.selected)
    let currentPage=event.selected + 1;

    const dataFormServer =await fetchProducts(currentPage);
    setProdata(dataFormServer)

}



//Add to cart 

const addCart=(pro)=>{
    if(localStorage.getItem('mycart')!=undefined){
        let status=false;
       let arr=JSON.parse(localStorage.getItem('mycart'));
        for(let i of arr){
            if(i.pid==pro.id){
               status=true;
            }
        }
       if(status){
         swal("Product Already Added")
       }
       else {
        let data= {pid:pro.id,pname:pro.pname,price:pro.price,image:pro.image,quantity:1}
        arr.push(data);
           localStorage.setItem('mycart',JSON.stringify(arr));
           dispatch({type:'addcart',payload:arr})
           swal("your item is Added To Cart","","success")
       }
    }
    else {
        let arr=[]
        let data= {pid:pro.id,pname:pro.pname,price:pro.price,image:pro.image,quantity:1}
        arr.push(data);
        localStorage.setItem('mycart',JSON.stringify(arr));
        dispatch({type:'addcart',payload:arr})
        swal("your item is Added To Cart","","success")
    }
}

//End add to cart

  return (
    <>

<div className='row'>
<h2 className='text-center'>All Products</h2>
    {proData.map((pro,index)=>
    <div className='col-md-4 mb-4' key={index}>
        <div className="card" style={{width: "18rem"}}>
        <Link to="/pdetails"> <img src={pro.image} className="card-img-top" alt="..." width={200} height={200}/> </Link>
            <div className="card-body">
                
                <h5 className="card-title">{pro.pname}</h5>
                    <p className="card-text">
                        Price :{pro.price}<br/>
                        Quantity:{pro.quantity}   
                    </p>
                    <button className="btn btn-primary" onClick={()=> addCart(pro)} >Add to Cart</button>
        
            </div>
        </div>
    </div>
    )}
</div>
    
    <ReactPaginate
        breakLabel={"..."}
        nextLabel="next >"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}

    />
    </>
  );
}
