import React, { Component } from "react";


class AboutMe extends Component{
    render(){
        return(
            
                <div className="container" id="aboutme">
                    <div className="lettersAboutMe">
                        <ul className="lettersPosts_about__me">
                            <div className="firstblock__aboutme">
                                Hola <span className="img__about__me img__hola"></span> Soy Victoria Itzayana <span className="img__about__me img__victoria"></span>, una creativa comprometida con difundir que la creatividad es rentable 
                                y que las creativas podemos construir negocios exitosos que nos garanticen autonomía e independencia.
                            </div>
                            <div className="secondblock__aboutme">
                                ¿Por qué? Porque ya era hora <div className="img__about__me img__hora"></div>. 
                            </div>
                            <div className="thirdblock__aboutme">
                                Escríbeme, juntas podemos transformar 
                            </div>
                            <div className="fourthblock__aboutme">
                                sueños en realidades y pasiones en ingresos. 
                            </div>
                            <div className="contacto__about_me">
                                <a href="wa.me/525587653861">CONTACTO</a> 
                            </div>
                        </ul>
                    </div>
                    
                </div>
            
        );
    }


}

export default AboutMe;