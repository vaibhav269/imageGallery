import React, { Component } from 'react';
import dp from '../../asset/images/vaibhavPic.jpg'

class Images extends Component{
    
    constructor(){
        super();
        this.state = {
            imageArray : [],
            activeImageUrl : ''
        }
        this.setActiveImage = this.setActiveImage.bind(this);
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

    setActiveImage(i,e){
        console.log(i);
        this.setState({
            activeImageUrl : this.state.imageArray[i].secure_url
        });
    }

    render(){
        return(
            <div>                
                <div className="modal fade" id="modalImageView" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">                
                    <div className="modal-dialog modal-lg" >
                        <div className="modal-content">                            
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-10 text-center">
                                            <img src = { this.state.activeImageUrl }  alt = "Yeah not loading" style={{height:'85vh',maxWidth:'100%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
                {
                    this.state.imageArray.map((element,index) => {
                        return(
                            <div className = "p-2 d-inline-block" 
                                style = {{width:'20%'}} 
                                key = {index} 
                                data-toggle="modal" 
                                data-target="#modalImageView"                                
                            >
                                <img src = { element.secure_url } className = "w-100"  onClick = { (e)=>this.setActiveImage(index,e) } />
                            </div>
                        )
                    })
                }  
            </div>
        )
    }
}

export default Images;