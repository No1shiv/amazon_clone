import React,{ useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

const base_url ="https://shiv-amazonapi.onrender.com"

const DetailDisplay = () => {
    
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let [productDetails,setProductDetails] = useState()
    let [category_id] = useState(sessionStorage.getItem('category_id'))

    let productid = searchParams.getAll('id')
    
    const productDetail = async() => {
        const rdata = await axios.get(`${base_url}/details/${productid}`)
        setProductDetails(rdata.data[0])
    } 

    useEffect( () => {
        productDetail()
    },[])

    const proceed = () => {
        navigate(`/placeOrder/${productDetails.brand}`)
    }



    const renderDetails = () => {
        if(productDetails){
            return(
                <>

                <div class="titleImage">		       
                    <img src={productDetails.image} alt={productDetails.name}/>                   
                </div>  

                <div class="titlecontent">
                    <h1 className='main_heading'>{productDetails.brand}</h1> 
                    <span id="feedback">231 Customers Rating Average</span>                       
                    <h3>{productDetails.name}</h3>
                    <h3>{productDetails.color}{productDetails.genres}</h3>
                    <h3>Offer Price Rs. {productDetails.price}</h3>
                    <h3>{productDetails.size}{productDetails.writer}</h3>
                    <h3>{productDetails.description}</h3>

                    <div class="main_icons">
                        <div class="icons">
                            <img src="https://i.ibb.co/LYCmLfv/freedelivery.png" alt=""/>
                            <h5>Free Delivery</h5>
                        </div>
                        <div class="icons">
                            <img src="https://i.ibb.co/DrFrMjZ/replacement.png" alt=""/>
                            <h5>7 days Replacement</h5>
                        </div>
                        <div class="icons">
                            <img src="https://i.ibb.co/NZhNJwz/secure.png" alt=""/>
                            <h5>Secure Transaction</h5>
                        </div>
                    </div>
                    <hr/>  
                    <div className='col-md-12'>
                        <Link to = {`/listing/${category_id}`} className='btn btn-danger'>Back</Link>&nbsp;&nbsp;
                        <button onClick ={proceed} className='btn btn-success'>Continue</button>
                    </div>
                </div>  
                </>
            )
        }
    }



    return(
            <>
                <div className='main'>
                    {renderDetails()}
                </div>
            </>
        )

}

export default DetailDisplay