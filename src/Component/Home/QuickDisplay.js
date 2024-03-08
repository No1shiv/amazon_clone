import React from 'react';
import {Link} from 'react-router-dom';


const QuickDisplay = (props) => {

    const listCategory = ({categoryData}) => {
        if(categoryData){
            return categoryData.map((item) => {
                return(

                
                             
                    <div className="container1">
                        <div className="tile1"> 
                        {/* <Link to={`/listing/${item.category_id}`}>   */}
                            <h4>{item.type_details}</h4>
                            <div className="row1">
                                <div className="d1">
                                <Link to={`/listing/${item.category_id}`}>  
                                    <img src={item.type_images[0]} alt={item.type_names[0]}/></Link>
                                    <h5>{item.type_names[0]}</h5>
                                    
                                </div>
                                <div className="d1">
                                <Link to={`/listing/${item.category_id}`}>  
                                    <img src={item.type_images[1]} alt={item.type_names[1]}/> </Link>
                                    <h5>{item.type_names[1]}</h5>
                                   
                                </div>
                            </div>
                            <div className="row2">
                                <div className="d1">
                                <Link to={`/listing/${item.category_id}`}>  
                                    <img src={item.type_images[2]} alt={item.type_names[2]}/></Link>
                                    <h5>{item.type_names[2]}</h5>
                                    
                                </div>
                                <div className="d1">
                                <Link to={`/listing/${item.category_id}`}>  
                                    <img src={item.type_images[3]} alt={item.type_names[3]}/></Link>
                                    <h5>{item.type_names[3]}</h5>  
                                  
                                </div>
                            </div>  
                            <Link to={`/listing/${item.category_id}`}>  
                            <p className='explore'>Explore More</p> 
                            </Link>
                        {/* </Link> */}
                        </div>             
                    </div>  
               
               
                )
            })
        }
    }

    return(        
        <div className="main1">
            {listCategory(props)} 
        </div>
    )
}

export default QuickDisplay;