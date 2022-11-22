import React, { Component } from "react";


class Logo extends Component{
    
    render(){
        return(
            <div className="base__logotipo">
                <div className={"logotipo__"+(this.props.load)}>
                </div>
            </div>
            
        );
    }


}

export default Logo;