import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight,faWindowClose } from '@fortawesome/free-solid-svg-icons'

class ImageModal extends Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div className="modal fade p-0" id="modalImageView" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                <div className = "container">
                    <div className = "row no-gutters" >
                        <div className = "col-1 d-flex align-items-center justify-content-center p-0" onClick = {this.props.previousImage}>
                            <FontAwesomeIcon
                                icon = { faChevronLeft }
                                color='#3B5998'
                                style={{cursor:'pointer',height:'10vh',width:'100%'}}
                            />
                        </div>
                        <div className = "col-10">
                            <button type="button" className="close float-right mt-5" data-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon
                                    aria-hidden="true"
                                    icon = { faWindowClose }
                                    color='#3B5998'
                                    style={{cursor:'pointer'}}
                                    className="fa-lg"
                                />                                
                            </button>
                            <div className="modal-dialog modal-lg" >
                                <div className="modal-content"  style={{height:'90vh',background:'transparent',border:'none'}}>
                                    <div className="modal-body d-flex align-items-center">
                                        <div className="container-fluid">                                            
                                            <div className="row justify-content-center no-gutters">
                                                <div className="col-10 text-center">
                                                    <img 
                                                        src = { this.props.activeImageUrl }
                                                        alt = "Yeah not loading" 
                                                        style={{maxHeight:'85vh',maxWidth:'100%'}} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-1 d-flex align-items-center justify-content-center p-0" onClick = {this.props.nextImage}>
                            <FontAwesomeIcon 
                                icon = { faChevronRight } 
                                color='#3B5998' 
                                style={{ cursor:'pointer',height:'10vh',width:'100%'}} 
                            />
                        </div>
                    </div>
                </div>                        
            </div>
        )
    }    
}
export default ImageModal;