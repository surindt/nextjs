import React, { Component} from "react";
import Image from 'next/image'
import Navbar from "./navbar";
import Intro from './intro__web'
import Studio from './branding__studio'
import Services from './services'
import AboutMe from './about__me'
import Footer from './footer__worktogether'

class Principal extends Component{

    render(){
        return(
            <div className="container__princ">
                <Navbar />
                <div className="container__all">
                    <div className="content" > 
                    <Intro />
                    <Services />
                    <Studio />
                    <AboutMe />
                    </div>
                </div>
                <Footer />
            </div>
            
        );
    }


}

export default Principal;