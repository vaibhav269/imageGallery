import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';
import FileUploadButtons from './FileUploadButtons';
import Images from './Images';

class FileUpload extends Component{
    constructor(){
        super();
        this.state = {
            uploading:false,
            images:[]
        }
        this.onChange = this.onChange.bind(this);
        this.removeImage = this.removeImage.bind(this);
    }

    onChange(e){
        const files = Array.from(e.target.files);
        
        this.setState({
            uploading : true
        })

        const formData = new FormData();
        
        files.forEach((file,i)=>{
            formData.append(i,file);
        });

        fetch('/api/account/imageUpload',{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then((json)=>{
            if(json.success){
                this.setState({
                    uploading: false,
                    images : json.images
                })
            }
            else{
                this.setState({
                    uploading:false
                });
                alert(json.message);
            }
        })
    }

    removeImage(id){
        this.setState({
            uploading:true
        })
                
        const formData = new FormData();
        formData.append('id',id);
        
        fetch('/api/account/imageDelete',{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then((text)=>{
            if(text.success){
                this.setState({
                    images: this.state.images.filter(image => image.public_id !== id),
                    uploading: false
                })
            }else{
                this.setState({                    
                    uploading: false
                })
                alert('some error occured');
            }            
        })
    }

    render() {
        const { uploading, images } = this.state
    
        const content = () => {
            switch(true) {
                case uploading:
                    return <Spinner />
                case images.length > 0:
                    return <Images images={images} removeImage={this.removeImage} />
                default:
                    return <FileUploadButtons onChange={this.onChange} />
            }
        }
    
        return (
          <div className="col-lg-12">
            <div className='buttons'>
                {content()}
            </div>
          </div>
        )
    }    
}
export default FileUpload;