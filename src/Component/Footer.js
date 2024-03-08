import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <>
           
           <footer className="foot">
        <div className="backtotop">
            <a href="#top"><h4>Back to top</h4></a>
        </div>

        <div className="footer2">
            <div className="footDiv">
            <ul>
                <li className="listone">Get to Know Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Amazon Science</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Connect With Us</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </ul>
            </div>
            <div className="footDiv noBorder">
            <ul>
                <li className="listone">Make Money With Us</li>
                <li>Sell on Amazon</li>
                <li>Sell Under Amazon Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Amazon Global Selling</li>
                <li>Become an Affiliate</li>
                <li>Fulfillment by Amazon</li>
                <li>Advertise Your Products</li>
                <li>Amazon Pay on Merchants</li>
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Let Us Help You</li>
                <li>COVID-19 and Amazon</li>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>Help</li>	
                <li>&nbsp;</li>
                <li>&nbsp;</li>	                
            </ul>
            </div>
        </div>


        <div className="footer3 ">
            <div >
                <img src="https://i.ibb.co/Jmz0D0v/ama1.jpg" alt='icon'/>
            </div>
            <select className="footeroption ">
                <option>English</option>
                <option>Hindi</option>
            </select>
            <a href="#">Australia</a>
            <a href="#">Brazil</a>
            <a href="#">Canada</a>
            <a href="#">China</a>
            <a href="#">France</a>
            <a href="#">Germany</a>
            <a href="#">Italy</a>
            <a href="#">Japan</a>
            <a href="#">Mexico</a>
            <a href="#">Netherlands</a>
            <a href="#">Poland</a>
            <a href="#">Singapore</a>
            <a href="#">Spain</a>
            <a href="#">Turkey</a>
            <a href="#">UK</a>
            <a href="#">USA</a>         		            	
        </div>

        <div className="footer4">
            <div className="footDiv">
            <ul>
                <li className="listone">AbeBooks</li>
                <li>Books, art</li>
                <li>& collectibles</li>		                	               
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Amazon Web Services</li>
                <li>Scalable Cloud</li>
                <li>Computing Services</li>		                	                
            </ul>
            </div>
            <div className="footDiv noBorder">
            <ul>
                <li className="listone">Audible</li>
                <li>Download</li>
                <li>Audio Books</li>		                
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">DPReview</li>
                <li>Digital</li>
                <li>Photography</li>		                                
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Shopbop</li>
                <li>Designer</li>
                <li>Fashion Brands</li>		                                
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Amazon Business</li>
                <li>Everything For</li>
                <li>Your Business</li>		                                
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Prime Now</li>
                <li>2-Hour Delivery</li>
                <li>on Everyday Items</li>		                                
            </ul>
            </div>
            <div className="footDiv">
            <ul>
                <li className="listone">Amazon Prime Music</li>
                <li>90 million songs, ad-free</li>
                <li>Over 15 million podcast episodes</li>                             
            </ul>
            </div>
        </div>	
    </footer> 

        </>
    )
}

export default Footer;