import React from 'react'
import {Link} from 'react-router-dom'




const ListingDisplay = (props) => {

    const renderData = ({listData}) => {

        if(listData){
            if(listData.length > 0 ){
                return listData.map( (item) =>{
                    return(
                        <div className='item' key={item._id}>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={item.image} alt={item.name} className='Image'/>
                                </div>
                                <div className='col-md-7'>
                                    <div className='hotel_name'>
                                        <Link to={`/details?id=${item.id}`}>
                                            {item.brand}
                                        </Link>
                                    </div>
                                    <div className='hotel_name'>Category : {item.name}</div>
                                    <div className='hotel_name'>{item.color}{item.writer}</div>
                                    <div className='hotel_name'>{item.genres}{item.size}</div>
                                    <div className='labelDiv'>
                                        <span className='label label-primary'>
                                            {item.price}
                                        </span>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
                    
               
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading</h2>
                    <img src='https://i.ibb.co/Q8GzDjP/Spinner-5.gif' alt='loader'/>
                </div>
            )
        }
    }
    return(
        <div id='content'>
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay