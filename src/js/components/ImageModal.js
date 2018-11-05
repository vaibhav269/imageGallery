import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import ReactTouchEvents from "react-touch-events";

class ImageModal extends Component{
    constructor(){
        super();
        this.handleSwipe = this.handleSwipe.bind(this);
    }    
    
    handleSwipe(direction){
        switch(direction){
            case "top":
            case "left": this.props.nextImage();break;
            case "bottom":
            case "right": this.props.previousImage();break;
        }                
    }

    render(){
        return(
            <div className = "position-fixed text-green container-fluid" style = {{top:'0',background:'rgba(200,200,200,0.9'}}>
                
                <FontAwesomeIcon
                    icon = { faWindowClose }
                    color='#3B5998'
                    style={{cursor:'pointer',right:'0px',height:'10vh',width:'10vw',zIndex:'1050'}}
                    className="fa-lg position-absolute mr-2 mt-2 "
                    onClick = {this.props.closeModal}
                /> 

                <ReactTouchEvents
                    onTap = { this.handleTap }
                    onSwipe = { this.handleSwipe }
                >
                    <div className = "row" >
                        <div className = "col-lg-1 d-none d-lg-flex align-items-center p-0" onClick = { this.props.previousImage }>
                            <FontAwesomeIcon
                                    icon = { faChevronLeft }
                                    color='#3B5998'
                                    style={{cursor:'pointer',height:'10vh',width:'100%'}}
                            />
                        </div>                                        
                        <div className = "col-12 col-lg-10 d-flex align-items-center justify-content-center p-0" style = {{height:'100vh'}}>
                            <img 
                                src = { this.props.activeImageUrl }
                                alt = "Yeah not loading" 
                                style={{maxHeight:'100vh',maxWidth:'100%'}} 
                            />
                        </div>                    
                        
                        <div className = "col-lg-1 d-none d-lg-flex align-items-center p-0" onClick = { this.props.nextImage }>
                            <FontAwesomeIcon
                                    icon = { faChevronRight }
                                    color='#3B5998'
                                    style={{cursor:'pointer',height:'10vh',width:'100%'}}
                            />
                        </div>
                    </div>
                </ReactTouchEvents>
            </div>
        )
    }
}
export default ImageModal;