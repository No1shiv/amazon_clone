import React from 'react';
import './Slider.css'

const Slider = () => {
    return(
        <>
           
        <div className="slider">
        <div id="devCarousel" className="carousel slide move_carousel" data-ride="carousel" >          
            
            <div className="carousel-inner">
                <div class="item active">
                    <img src="https://i.ibb.co/GTJz49s/a11.jpg" alt="four"/>
                </div>
                <div class="item">
                    <img src="https://i.ibb.co/3Fp1j7b/a12.jpg" alt="two"/>
                </div>
                <div class="item">
                    <img src="https://i.ibb.co/QCcmr3q/a13.jpg" alt="three"/>
                </div>  
                                      
            </div>

            <a className="left carousel-control" href="#devCarousel" data-slide="prev" id="indicator_left">
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className="right carousel-control" href="#devCarousel" data-slide="next" id="indicator_right">
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>  
                   
          </div>
        </div>

        </>
    )
}

export default Slider;