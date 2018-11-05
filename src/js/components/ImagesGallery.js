import React, { Component } from 'react';
import dp from '../../asset/images/vaibhavPic.jpg'
import ImageModal from './ImageModal';

class Images extends Component{
    
    constructor(){
        super();
        this.state = {
            imageArray : [],
            activeImageIndex:0,
            showModal : false
        }
        this.setActiveImage = this.setActiveImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
        this.setState({
            activeImageIndex : i,
            showModal : true
        });
    }

    closeModal(){
        this.setState({
            showModal:false
        });
    }

    nextImage(){
        if(this.state.activeImageIndex < this.state.imageArray.length-1 ){  //last image check
            this.setState({
                activeImageIndex : this.state.activeImageIndex + 1
            })
        }
    }

    previousImage(){
        if(this.state.activeImageIndex > 0 ){   //first image check
            this.setState({
                activeImageIndex : this.state.activeImageIndex - 1
            })
        }
    }

    render(){
        let { imageArray,activeImageIndex,showModal } = this.state;
        let activeImageUrl = '';

        if( imageArray.length > 0 ){                    //to avoid crashing of app as imageArray was empty initally
            activeImageUrl = imageArray[activeImageIndex].secure_url;
        }

        return(
            <div>
                {
                    (showModal)?
                        <ImageModal 
                            activeImageUrl = { activeImageUrl } 
                            previousImage = {this.previousImage} 
                            nextImage = {this.nextImage} 
                            closeModal = {this.closeModal}
                        />
                        :
                        null
                }
                {
                    this.state.imageArray.map((element,index) => {
                        return(
                            <div className = "p-2 d-inline-block"
                                style = {{width:'20%'}}
                                key = {index}
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