import React, { Component } from 'react';
import dp from '../../asset/images/vaibhavPic.jpg'

class Images extends Component{
    
    constructor(){
        super();
        this.imageArray = [1,2,3,4,5,6,7,8,9,10]        
    }

    render(){
        return(
            <div>
                {
                    this.imageArray.map(element => {
                        return(
                            <div className = "p-2 d-inline-block" style = {{width:'20%'}}  key= {element} >
                                <img src = { require(`../../asset/images/${element}.jpg`) } className = "w-100" alt = {element}/>                                
                            </div>
                        )
                    })
                }  
            </div>
        )
    }
}

export default Images;