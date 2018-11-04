import React, { Component } from 'react';
import dp from '../../asset/images/vaibhavPic.jpg'

class Images extends Component{
    
    constructor(){
        super();
        this.state = {
            imageArray : []
        }        
    }

    componentDidMount(){
        fetch('/api/account/getImages')
        .then(res=>res.json())
        .then((text)=>{
            if(text.success){
                this.setState({
                    imageArray: text.images
                })
            }else{
                alert('some error occured');
            }
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.imageArray.map(element => {
                        return(
                            <div className = "p-2 d-inline-block" style = {{width:'20%'}} key = {element.public_id}>
                                <img src = { element.secure_url } className = "w-100" />
                            </div>
                        )
                    })
                }  
            </div>
        )
    }
}

export default Images;