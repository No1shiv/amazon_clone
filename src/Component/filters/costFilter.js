import React from 'react';
import axios from 'axios';

const url = "https://shiv-amazonapi.onrender.com/filter";

const CostFilter = (props) => {

    const handleFilter = (event) => {
        let categoryId = props.category_id;
        let cost = (event.target.value).split('-');
        let lprice = cost[0];
        let hprice = cost[1];
        let costUrl = " ";
        if(event.target.value === " "){
            costUrl = `${url}/${categoryId}`
        }else{
            costUrl = `${url}/${categoryId}?hprice=${hprice}&lprice=${lprice}`
        }

        axios.get(costUrl)
            .then((res) => {props.restPerCost(res.data)})
    }

    return(
        <>
            {/* <center><h3>Cost Filter</h3></center> */}
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                
                {/* <label className="radio">
                    <input type="radio" name="product" value=" "/>All
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="0-250"/>T-Shirt
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="251-500"/>Shirt
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="501-1000"/>Trousers
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="1001-2000"/>Jeans
                </label>
                <label className="radio">
                    <input type="radio" name="product" value="2000-above"/>Laptop
                </label> */}
            </div>

        </>
    )
}

export default CostFilter