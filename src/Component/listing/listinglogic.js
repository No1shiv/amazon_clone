import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import ProductFilter from '../filters/productFilter';
import CostFilter from '../filters/costFilter';

const base_url ="https://shiv-amazonapi.onrender.com"

const Listing = () => {

    let params = useParams();

    const [productList,setProductList] = useState();
    
    let categoryId = params.category_id;

    useEffect(() => {
       

        sessionStorage.setItem('category_id',categoryId)

        axios.get(`${base_url}/product?category_id=${categoryId}`)
        .then((res) => {
            setProductList(res.data)
        })
    },[])


    const setDataPerFilter = (data) => {
        setProductList(data)
    }



    return(
        <>
           <div className='row'>
                <div id="mainListing">
                    <div id="filter">
                        <ProductFilter category_id={categoryId}
                         restPerProduct={(data) => {setDataPerFilter(data)}}/>
                        <CostFilter category_id={categoryId}
                         restPerCost={(data) => {setDataPerFilter(data)}}/> 
                    </div>
                    <ListingDisplay listData = {productList}/>
                </div>
            </div>
        </>
    )
}

export default Listing