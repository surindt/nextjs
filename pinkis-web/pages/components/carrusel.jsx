import React, { useState, useEffect } from 'react';

const Carrusel = (width1) =>{
    
    const [seconds, setSeconds] = useState(0);
    let sizeEstilizaAndDot= 210;
    if (width1.width > 800) {
        sizeEstilizaAndDot= 380;
    }
    
    
    const width = width1.width + sizeEstilizaAndDot;
    
    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds => seconds + .9);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    const numberofBanners =  Math.ceil(width / sizeEstilizaAndDot) - 1;
    const padding = (width - (numberofBanners * sizeEstilizaAndDot)) / numberofBanners;
    //console.log("padding", padding, "diff", width - (numberofBanners * sizeEstilizaAndDot), "num", numberofBanners);
    let arrayBanner= [];
    for (let index = 0; index < numberofBanners; index++) {
        arrayBanner[index] = width - (sizeEstilizaAndDot+padding) - ((seconds - (sizeEstilizaAndDot+padding)*index) % width);
    }
    //const arrayBanner = [width - (seconds % width)-400, width - ((seconds - 400) % width) -400]
    const renderList = arrayBanner.map((frame, index) => 
    <div key={index}>
    <div className='letterNews' style={{marginLeft: `${frame}px`, width: `${sizeEstilizaAndDot+padding}px`}}>
      <div className="word__estiliza">ESTILIZA TUS IDEAS</div> 
      <div className="point__estiliza"><span></span></div> 
    </div>
    </div>);
    return(
      <div> {renderList}</div>
     
    );
}

export default Carrusel;