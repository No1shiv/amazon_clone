import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <>
           
           <header className="head">
            
            <div className="header_image">
              <a href="#Amazon_homepage"><img src="https://i.ibb.co/NZjGXv9/amazon-logo.jpg" alt="Amazon_logo" /></a>  
            </div>
                                       
            <div className="header_location">                
                <div className="lo_icon">
                    <i className="fa fa-map-marker  fa-2x" aria-hidden="true"></i>
                 </div> 
                <div className="locate">
                    <div>
                        <p id="location">Hello</p>
                    </div>
                    <div>
                        <p id="weather">Select Location</p>
                    </div>
                </div>    
            </div>


            <div className="search_bar">
                <form className="search" action=" ">                   
                    <select className="select">
                        <option>All</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                    <input type="text" placeholder="Search Amazon......" name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>               
                </form>
            </div>
            

            <div className="light">
                <button onclick="changeMode(), mode(), drow()" className="light_dark_mode"><i className="fa fa-lightbulb-o fa-3x" ></i></button>
            </div>

            <div className="signin logsign">
                <a href="#">
                    <i className="fa fa-sign-in fa-2x" ></i>
                    <p className="p1">Sign-in</p>
                </a>
            </div>

            <div className="login logsign">
                <a href="#">
                    <i className="fa fa-user fa-2x" ></i>
                    <p>Login</p>
                </a>
            </div>

            <div className="return">
               <a href="#" >
                <div>
                    <p>Returns</p>
                </div>
                <div className="boldorder">
                    <p>&Orders</p>
                </div>
               </a>               
            </div>    
          
            <div className="cart">
                <a href="#">
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                </a>
            </div>

        </header>



        <nav>
            <div className="mynav" id="navigate">
                <a href="javascript:void(0);" className="icon" onclick="my_navigation()">
                 <i className="fa fa-bars active"></i>
               </a>
               <a href="#miniTV" >Amazon miniTV</a>
               <a href="#Sell">Sell</a>
               <a href="#BestSeller">Best Sellers</a>
               <a href="#Deal">Today's Deal</a>
               <a href="#Mobiles">Mobiles</a>
               <a href="#New Releases">New Releases</a>
               <a href="#Customer Service">Customer Service</a>
               <a href="#Electronic">Electronics</a>
               
            </div>
       </nav>

        </>
    )
}

export default Header;