import { useEffect, useState , useRef} from 'react';
import React, { Component} from "react";
import Image from 'next/image'
import Navbar from "./components/navbar";
import Intro from './components/intro__web'
import Studio from './components/branding__studio'
import Services from './components/services'
import AboutMe from './components/about__me'
import Footer from './components/footer__worktogether'
import Head from 'next/head';



export default function Home() {
  const prevScrollY = useRef(0)
  const [goingUp, setGoingUp] = useState("verdadero");
  const [currentScrollY, setOffset] = useState(0);
  const [loadBoolean, setLoad] = useState("loading");
  const [windowResize, setResize] = useState(0);
  const windowWidth = useRef(0);


  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setOffset(currentScrollY);
    const goingUpBoolean = goingUp === "verdadero" ? true: false;
    if (prevScrollY.current < currentScrollY && goingUpBoolean) {
      setGoingUp("falso");
    }
    if ((prevScrollY.current > currentScrollY && !goingUpBoolean) || (currentScrollY < 350)) {
      setGoingUp("verdadero");
    }
    prevScrollY.current = currentScrollY;
  };

  const handleLoad = () =>{
    setTimeout(() => {
      setLoad("complete");
    }, 1500);
  }
  const handleWindowResize = () => {
    setResize(() => {window.innerWidth});
  }
  useEffect(()=>{
    fetch("").then( () => {
        handleWindowResize;
        windowWidth.current = window.innerWidth;
        console.log(window.innerWidth, windowWidth.current);
        handleLoad();
    })
  },[loadBoolean, windowWidth]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
  }
  },[goingUp, currentScrollY]); //Pasa falso o verdadero y el offset
  
  useEffect(() => {
   window.addEventListener('resize',handleWindowResize);
   windowWidth.current = window.innerWidth;
   console.log(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleWindowResize);

  }
  },[windowResize]); //Pasa falso o verdadero y el offset
  
 
    return(
      <main>
      <Head>
      <title>Victoria Itzayana</title>
      <meta name='Victoria Itzayana'></meta>
      <meta content='branding marketing creatividad estiliza tus ideas'></meta>
      <link rel='icon' href="https://public-files.gumroad.com/variants/8tpq4yscoc3c4pm4nlypvaa9q2vx/5030a33736a33fff939ce6d9f843d748f92b33eecdff51020ac02c0e90bcdaad" type = "image/x-icon" /> public/images/SOBREMI/1.jpeg
      </Head>
      <div className="container__princ" onLoad={() => handleLoad} onScroll={() => handleScroll}>
          <Navbar goingUp={goingUp} load ={loadBoolean} />
          
          <div className="container__all"> 
              <div className="content" > 
              <Intro />
              <Services />
              <Studio />
              <AboutMe />
              </div>
          </div>
          
          <Footer width={windowWidth.current} />
      </div>
      
      </main>
  );
}
