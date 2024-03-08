import React, { useState, useEffect } from 'react'
import './QuickSearch.css'
import QuickDisplay from './QuickDisplay'

const base_url = "https://shiv-amazonapi.onrender.com"



 const QuickSearch = () => {

    const [categoryType,setCategoryType] = useState();

    useEffect(() => {
        fetch(`${base_url}/quickSearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setCategoryType(data)
        })
    },[])




    return (
           <>
            <div className="main_body" id='darkLight'>

                <QuickDisplay categoryData = {categoryType} />

            </div>  
           </>
     )
}


export default QuickSearch









//         const [categoryType, setCategoryType] = useState()

//         useEffect(() => {
//             fetch(`${base_url}/product`,{method:'GET'})
//             .then((res) => res.json())
//             .then((data) => {
//                 setCategoryType(data)
//             })
//         },[])