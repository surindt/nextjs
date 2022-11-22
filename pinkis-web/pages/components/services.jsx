import { setRevalidateHeaders } from "next/dist/server/send-payload";
import React, { Component } from "react";


class Services extends Component{
    
    state = {
        array__active: [false, false, false, false, false, false, false, false, false]
    };
    /* renderToggle es una funcion que depende del estado del 
    elemento array_active cambia la flecha hacia arriba o hacia abajo */
    renderToggle(position){ 
        const {array__active} = this.state;
        return array__active[position] === false ? 'arrow_icon' : 'arrow_icon_content';
    };
    /* renderToggle__letters es una funcion que depende del estado del 
    elemento array_active abre la informacion para MOBILE de cada servicio */
    renderToggle__letters(position){
        const {array__active} = this.state;
        return array__active[position] === false ? 'services__toggle__down__closed' : 'services__toggle__down';
    };
    
    /* classToggle es una funcion que tiene un evento en el icono, 
    si se activa el elemento array_active pasa de estar de false a true y viceversa.
    ademas, si uno esta activo los demas se desactivan*/
    classToggle(position) {
        const {array__active} = this.state;
        array__active.forEach(function(elemento, indice) {
            if (indice != position) {
                array__active[indice] = false;   
            }
        })
        array__active[position] = array__active[position] === false ? true : false;
        console.log(array__active);
        return array__active;
    };

    

    render(){
        return(
            
                <div className="container container__services__mobile" id="services">
                    <div className="letters_services">
                        <ul className="lettersPosts_services">
                            <li className="services">
                                <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(0) })}}>
                                    <div className="services__left">
                                        <div className="text__services">
                                            <div className="up">  BRANDING</div> 
                                            <div className="down">ESTRATÉGICO</div>
                                        </div>
                                        <div  className="icon 1"><div value={0} className={this.renderToggle(0)}></div></div>
                                        <div className="completo__web">COMPLETO</div> 
                                    </div> 
                                    <div className="img__services img__branding"> </div> 
                                    <div className="completo">COMPLETO</div>
                                    </div>
                                    <div className={this.renderToggle__letters(0)}>
                                        <div onClick={() => {this.setState({ array__active: this.classToggle(0) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                    <div className="box__service__title">
                                        BRANDING ESTRATÉGICO
                                    </div>
                                    <div className="description__service">
                                        Se trata de una estrategia completa y personalizada que me permite 
                                        <strong> crear en la mente de tu consumidor</strong>  la percepción de que en el mercado 
                                        no existe ningún otro producto como el tuyo.
                                    </div>
                                    <div className="masinfo__web">
                                    <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        
                                    </div>
                                    
                                </div>
                            </li>
                            <li className="services">
                                <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(1) })}}>
                                    <div className="services__left change__order">
                                        <div className="text__services">
                                            <div className="up__left">ESTRATEGIA</div> 
                                            <div className="down__left"> DE MARCA</div> 
                                        </div>
                                        <div  className="icon"><div className={this.renderToggle(1)}></div></div>

                                    </div> 
                                    <div className="img__services img__marca"> </div>
                                </div> 
                                <div className={this.renderToggle__letters(1)}>
                                    <div onClick={() => {this.setState({ array__active: this.classToggle(1) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                    <div className="box__service__title">
                                        ESTRATEGIA DE MARCA
                                    </div>
                                    <div className="description__service">
                                        Es la plataforma invisible que sostiene a un buen negocio. 
                                        Con ella definimos qué vendes, cómo lo vendes y a quién se lo vendes. 
                                        Se analiza el entorno competitivo y se investiga al consumidor. 
                                        Con la estrategia de marca se determina <strong>tu valor diferenciador.</strong>
                                    </div>
                                    <div className="masinfo__web">
                                    <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        
                                    </div>

                                </div>
                            </li>
                            <li className="services">
                                <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(2) })}} >

                                    <div className="services__left">
                                        <div className="text__services">
                                            <div className="up">ESTRATEGIA DE</div>
                                            <div className="down">COMUNICACIÓN</div> 
                                        </div>
                                        <div className="icon"><div className={this.renderToggle(2)}></div></div>

                                    </div> 
                                    <div className="img__services img__comunicacion"> </div>
                                </div> 
                                
                                <div className={this.renderToggle__letters(2)}>
                                        <div onClick={() => {this.setState({ array__active: this.classToggle(2) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                <div className="box__service__title">
                                        ESTRATEGIA DE COMUNICACIÓN
                                    </div>
                                    <div className="description__service">
                                        Se encarga de crear la ventaja diferencial inimitable que exalta <strong> los beneficios 
                                        de consumir tu producto o servicio </strong>  y promueve el vínculo del usuario/consumidor con tu marca.
                                    </div>
                                    <div className="masinfo__web">
                                    <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 

                                    </div>
                                </div>
                                
                            </li>
                            <li className="services">
                                <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(3) })}}>

                                    <div className="services__left change__order">
                                        <div className="text__services">
                                            <div className="up__left">ESTRATEGIA DE</div>
                                            <div className="down__left">IDENTIFICACIÓN</div>  
                                        </div>
                                        <div  className="icon"><div className={this.renderToggle(3)}></div></div>
                                        

                                    </div> 
                                    <div className="img__services img__identificacion"> </div>
                                </div> 
                                <div className={this.renderToggle__letters(3)}>
                                    <div onClick={() => {this.setState({ array__active: this.classToggle(3) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                <div className="box__service__title">
                                        ESTRATEGIA DE IDENTIFICACIÓN
                                    </div>
                                    <div className="description__service">
                                        Su propósito es hacer a tu marca <strong> identificable y memorable</strong>  para que perdure positivamente en el recuerdo de tu usuario/consumidor. La estrategia de identificación se 
                                         encarga de desarrollar un universo gráfico capaz de comunicar tu valor diferencial.
                                    </div>
                                    <div className="masinfo__web">
                                    <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        
                                    </div>
                                </div>
                            
                            </li>
                            <li className="services">
                                <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(4) })}}>

                                    <div className="services__left">
                                        <div className="text__services">
                                            <div className="up">ESTRATEGIA DE</div>
                                            <div className="down"> MARKETING</div>  
                                        </div>
                                        <div  className="icon"><div className={this.renderToggle(4)}></div></div>

                                        
                                    </div> 
                                    <div className="img__services img__marketing"> </div>
                                </div> 
                                <div className={this.renderToggle__letters(4)}>
                                    <div onClick={() => {this.setState({ array__active: this.classToggle(4) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                <div className="box__service__title">
                                        ESTRATEGIA DE MARKETING
                                    </div>
                                    <div className="description__service">
                                Es la responsable de hacer realidad tus objetivos de marca. 
                                Es la estrategia que <strong> promueve y concreta las ventas creando un vínculo con tu consumidora.</strong> 
                                  La estrategia de  marketing crea el interés, la confianza y la lealtad de tu consumidor con tu marca.
                                 </div>
                                    <div className="masinfo__web">
                                    <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        
                                    </div>
                                </div>
                            
                            </li>
                            <li className="two_services">
                                <ul className="horizontal__services">
                                    <li className="services">
                                        <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(5) })}}>

                                            <div className="services__left change__order">
                                                <div className="text__services">
                                                <div className="up__left">ESTRATEGIA</div>
                                                <div className="down__left"> DE UX</div>  
                                            </div>
                                            <div  className="icon"><div className={this.renderToggle(5)}></div></div>


                                            </div>
                                            <div className="img__services img__ux"> </div>
                                        </div>
                                        <div className={this.renderToggle__letters(5)}>
                                            <div onClick={() => {this.setState({ array__active: this.classToggle(5) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                        <div className="box__service__title">
                                        ESTRATEGIA DE UX
                                    </div>
                                    <div className="description__service">
                                        Es la estrategia que diseña el sistema con el que atiendes, comprendes y satisfaces a tu consumidor. Es diseñar la oportunidad de comunicar activamente tu valor diferenciador. 
                                         <strong> La experiencia es la responsable de la vitalidad y la longevidad de un negocio exitoso.</strong> 
                                        </div>
                                    <div className="masinfo__web">
                                    <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        
                                    </div>
                                    </div>
                                    
                                    </li>
                                    <li className="services">
                                        <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(6) })}}>

                                            <div className="services__left">
                                                <div className="text__services center__services">DISEÑO WEB</div>
                                                <div  className="icon center__icon"><div className={this.renderToggle(6)}></div></div>
                                                
                                            </div>
                                            <div className="img__services img__web"> </div>
                                        </div>
                                        <div className={this.renderToggle__letters(6)}>
                                        <div onClick={() => {this.setState({ array__active: this.classToggle(6) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                        <div className="box__service__title">
                                        DISEÑO WEB
                                    </div>
                                    <div className="description__service">
                                        Sitios personalizados que <strong> comunican quién eres y qué le ofreces a tu usuario. </strong> 
                                        Un diseño que refleja tu identidad, que genera    un vínculo y que concreta el tipo de relación que deseas tener con tu consumidor.
                                        </div>
                                    <div className="masinfo__web">
                                        <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 

                                    </div>    
                                    </div>

                                    </li>
                                    </ul>
                            </li>
                            <li className="two_services">
                                <ul className="horizontal__services">
                                    <li className="services">
                                        <div className="services__toggle__up" onClick={() => {this.setState({ array__active: this.classToggle(7) })}}>

                                            <div className="services__left change__order">
                                                <div className="text__services center__services">ASESORÍAS</div>
                                                <div  className="icon center__icon"><div className={this.renderToggle(7)}></div></div>
                                                
                                            </div>
                                            <div className="img__services img__asesorias"> </div>
                                        </div>
                                        <div className={this.renderToggle__letters(7)}>
                                        <div onClick={() => {this.setState({ array__active: this.classToggle(7) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                        <div className="box__service__title">
                                        ASESORÍAS
                                    </div>
                                    <div className="description__service">
                                        Es un acompañamiento para resolver dudas específicas sobre tu negocio o proyecto, para analizar su rendimiento, los objetivos, los cambios o cualquier 
                                        idea que tengas. Es un espacio para entender y estilizar tus ideas.
                                    </div>
                                    <div className="asesorias__link__services">
                                        <div className="agendar__services">
                                           <a href="https://calendly.com/victoriaitzayana/reunion-de-primera-vez"> AGENDAR</a>
                                        </div>
                                        <div className="masinfo__web__asesorias">
                                           <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        </div>
                                    </div>
                                    
                                    </div>
                                    
                                    </li>
                                    <li className="services">
                                        <div className="services__toggle__up"  onClick={() => {this.setState({ array__active: this.classToggle(8) })}}>

                                            <div className="services__left">
                                                <div className="text__services center__services">MENTORÍAS</div>
                                                <div className="icon center__icon"><div className={this.renderToggle(8)}></div></div>
                                                
                                            </div>
                                            <div className="img__services img__mentorias"> </div>
                                        </div>
                                        <div className={this.renderToggle__letters(8)}>
                                        <div onClick={() => {this.setState({ array__active: this.classToggle(8) })}}  className="close__services">
                                            <div className="close__equis__services">
                                                <div className="equis__lines"><span></span></div>
                                            </div>
                                            <div className="close__word__services">cerrar</div>
                                        </div>
                                        <div className="box__service__title">
                                        MENTORÍAS
                                    </div>
                                    <div className="description__service">
                                        Es un programa para determinar y alcanzar objetivos, proyecciones de marca, optimización de competencias, desarrollo de habilidades y evoluciones identitarias. 
                                        Se trata de un proceso en el que te acompaño a hacer realidad tus objetivos.
                                    </div>
                                    <div className="masinfo__web">
                                        <a href="mailto:estilizatusideas@gmail.com?subject=Informaci%C3%B3n&body=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de">MÁS INFORMACIÓN</a> 
                                        
                                    </div>
                                    </div>
                                    
                                    </li>
                                </ul>
                            </li>
                            
                            
                            
                        </ul>
                        <div className="behance__div"><a href="https://www.behance.net/victoriaitzayana">PORTAFOLIO</a></div>
                    </div>
                    
                </div>
            
        );
    }


}

export default Services;