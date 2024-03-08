import React from 'react';
// import './contain.css'

const Display = (props) => {

    const renderData = ({orderData}) => {

        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{item.phone}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container contain">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Product_name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
        </div>

    )

}

export default Display;