
import { throws } from "assert";
import React, { Component} from "react"; 
import Logo from "./logo";


class Navbar extends Component{
 
    state = {
        active: false
    };

    toggleActive = () =>{
        if (this.state.active === false) {
            this.setState({active: true})
        }else {
            this.setState({active: false})
        }
    }
    /* 
    classToggle() {
        const {active} = this.state;
        console.log(active);
        return active === false ? true : false;
    };
    classHamb() {
        const {hamb} = this.state;
        console.log(hamb);
        return hamb === false ? true : false;
    };
 */
    renderToggle(){
        const {active} = this.state;
        //this.componentDidMount();
        
        return active === false ? 'nav__active' : 'nav__not__active';
    };

   /*  componentDidMount() {
        const {active} = this.state;
        if (active === false) {
            this.setBodyClass('overflow__body__not__active');
            
        } else if (active === true) { 
            this.setBodyClass('overflow__body__active');
        } 
    } */
    setBodyClass(className) {
        // remove other classes
        document.body.className ='';
        // assign new class
        document.body.classList.add(className);
    }
   
   

    
   /*
    hiddenBodyOverflow() {
        const {active} = this.state;
        const {bodyClass} = this.props;
        if (active === false) {
            document.querySelector("body").classList.add(bodyClass || "overflow__body__not__active")
            document.querySelector("body").classList.remove(bodyClass || "overflow__body__active")
        }
        else{
            document.querySelector("body").classList.add(bodyClass || "overflow__body__active")
            document.querySelector("body").classList.remove(bodyClass || "overflow__body__not__active")
        }
    }*/


    render(){
        return(
            <div>
                <div className="menu__hamb__sticky ">
                   
                    <div className={"nav__mobile__prin "+(this.props.goingUp)}>
                        <div className="logo__item">
                            <a href="#init" className="nav__link"> <Logo load={this.props.load} /> </a>
                        </div>
                        <div onClick={this.toggleActive} className="container__menu_three">
                            <div className={"three__lines__"+(this.props.load)}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                       
                </div>
                               

                <nav className={this.renderToggle()+"__"+(this.props.load)}>
                    
                    <ul className={"nav__f__"+(this.props.goingUp)}>
                        <li className="nav__item exception">
                            <ul className="nav__web">    
                                <li className="nav__item nav__mobile">
                                    <a href="#services" className="nav__link__web">SERVICIOS</a>
                                </li>
                                <li className="nav__item nav__mobile">
                                    <a href="#aboutme" className="nav__link__web"> SOBRE MÍ</a>
                                </li>
                                <li className="nav__item nav__mobile">
                                    <a href="#contact" className="nav__link__web">CONTACTO</a>
                                </li>
                                <li className="nav__item nav__mobile">
                                    <a href="https://estilizatusideas.gumroad.com/" className="nav__link__web">SHOP</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav__item menu__logo">
                            <ul className="logo__hamburger">
                                <li className="nav__item">
                                    <a href="#init" className="nav__link"> <Logo load={this.props.load} /> </a>
                                </li>
                                <li className="toogle__menu menu__onlymobile"> 
                                    <div onClick={this.toggleActive} className="container__hamb">
                                    <div className="hamburger"><span></span></div></div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__item item_social">
                            <ul className="nav__social">
                                <li className="nav__item__social menu__onlymobile">
                                    <a href="" className="nav__link__social">
                                        Di <span className="hola">hola</span> :)) 
                                    </a>
                                </li>
                                <li className="nav__item__social lessFontSize__social orden__cel">
                                    <a href="wa.me/525587653861" className="nav__link__social">(<span>mex</span>)55 8765 3861</a>
                                </li>
                                <li className="nav__item__social lessFontSize__social">
                                    <a href="https://instagram.com/estilizatusideas?r=nametag" className="nav__link__social menu__insta">@estilizatusideas</a>
                                </li>
                                <li className="nav__item__social menu__onlymobile lessFontSize__social">
                                    <a href="wa.me/525587653861" className="nav__link__social">estilizatusideas@gmail.com</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
        );
    }


}

export default Navbar;