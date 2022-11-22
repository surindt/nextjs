import React, { Component } from "react";
import Carrusel from "./carrusel";

class Footer extends Component{

    state = {
        positionPoster: 0
    };
    
   
      
    render(){
        
    
        return(
            
                <div className="container" id="contact">
                    <div className="footer__container">
                        <div className="footer__animation__estiliza">
                            <div className="pink__estiliza">
                                <Carrusel width={this.props.width} />
                            </div>
                                
                        </div>
                        <div className="footer__contact__worktogether">
                            <div className="footer__worktogether">
                                <div className="trabajemos">TRABAJEMOS JUNTAS</div>
                                <div className="paraque">PARA QUE TU ÉXITO</div>
                                <div className="refleje__ideas">REFLEJE LA CALIDAD DE TUS IDEAS</div>  
                            </div>
                            <div className="onlymobile__contact">
                                <ul>
                                    <li className="nav__item__social lessFontSize__social orden__cel">
                                        <a href="wa.me/525587653861" className="nav__link__social">(<span>mex</span>)55 8765 3861</a>
                                    </li>
                                    <li className="nav__item__social lessFontSize__social">
                                        <a href="https://instagram.com/estilizatusideas?r=nametag" className="nav__link__social menu__insta">@estilizatusideas</a>
                                    </li>
                                    <li className="nav__item__social menu__onlymobile lessFontSize__social">
                                        <a href="estilizatusideas@gmail.com" className="nav__link__social">estilizatusideas@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__links">
                                <ul>
                                    <li><a href="https://estilizatusideas.gumroad.com/">SHOP</a></li>
                                    <li><a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">EMAIL</a></li>
                                    <li><a href="https://www.behance.net/victoriaitzayana">BEHANCE</a></li>
                                    <li><a href="https://instagram.com/estilizatusideas?r=nametag">INSTAGRAM</a></li>
                                    <li><a href="https://pin.it/77XPtCB">PINTEREST</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright__footer">
                        © Victoria Itzayana 2022
                        </div>
                    </div>
                    
                </div>
            
        );
    }


}

export default Footer;