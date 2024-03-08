import React from 'react';
import axios from 'axios';

const url = "https://shiv-amazonapi.onrender.com/filter";

const ProductFilter = (props) => {

    const handleFilter = (event) => {
        let categoryId = props.category_id;
        let productId = event.target.value;
        let productUrl = "";
        if(productId === " "){
            productUrl = `${url}/${categoryId}`
        }else{
            productUrl = `${url}/${categoryId}?id=${productId}`
        }

        axios.get(productUrl)
            .then((res) => {props.restPerProduct(res.data)})
    }

    return(
        <>
            <center><h3>Product Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                
                {/* <label className="radio">
                    <input type="" name="product" value=" "/>Men's Fashion
                </label> */}
                <h4>Men's Fashion</h4>
                <label className="radio">
                    <input type="radio" name="product" value="1"/>T-Shirt
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="2"/>Shirt
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="3"/>Trousers
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="4"/>Jeans
                </label>
                <h4>Electronics</h4>
                <label className="radio">
                    <input type="radio" name="product" value="5"/>Laptop
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="6"/>Tablet
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="7"/>Monitor
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="8"/>Smart Watch
                </label>
                <h4>Home Decor</h4>
                <label className="radio">
                    <input type="radio" name="product" value="9"/>BedSheet
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="10"/>Wall Painting
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="11"/>Storage
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="12"/>Lights
                </label>
                <h4>Appliances</h4>
                <label className="radio">
                    <input type="radio" name="product" value="13"/>Air Conditioners
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="14"/>Refrigerator
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="15"/>Microwaves
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="16"/>Washing Machines
                </label>
                <h4>Books</h4>
                <label className="radio">
                    <input type="radio" name="product" value="17"/>The Hidden Hindu
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="18"/>Psychology of Money
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="19"/>Energize Your Mind
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="20"/>Atomic Habbits
                </label>
            </div>

        </>
    )
}

export default ProductFilter