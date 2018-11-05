import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight,faWindowClose } from '@fortawesome/free-solid-svg-icons'

class ImageModal extends Component{
    constructor(){
        super();
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

                <div className = "row" >
                    <div className = "col-1 d-flex align-items-center p-0" onClick = { this.props.previousImage }>
                        <FontAwesomeIcon
                                icon = { faChevronLeft }
                                color='#3B5998'
                                style={{cursor:'pointer',height:'10vh',width:'100%'}}
                        />
                    </div>
                    <div className = "col-10 d-flex align-items-center justify-content-center p-0" style = {{height:'100vh'}}>
                        <img 
                            src = { this.props.activeImageUrl }
                            alt = "Yeah not loading" 
                            style={{maxHeight:'100vh',maxWidth:'100%'}} 
                        />
                    </div>
                    <div className = "col-1 d-flex align-items-center p-0" onClick = { this.props.nextImage }>
                        <FontAwesomeIcon
                                icon = { faChevronRight }
                                color='#3B5998'
                                style={{cursor:'pointer',height:'10vh',width:'100%'}}
                        />
                    </div>
                </div>                
            </div>
        )
    }
}
export default ImageModal;