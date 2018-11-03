import React,{Component} from 'react';
import {Link} from 'react-router-dom';


var visibilityMaintainer = {
    opacity:'1'
}

class PostJob extends Component{
    
    constructor(){
        super();
        this.state = {
            isLoading:false,
            postError:'',
            postSuccess:false
        }
        this.post = this.post.bind(this);
    }

    post(event){
        event.preventDefault();

        this.setState({isLoading:true});

        const formData = new FormData(event.target);
        let jsonObject = {};

        for (const [key, value]  of formData.entries()) {
            jsonObject[key] = value;
        }
        const tokenVar = localStorage.getItem('token');
        jsonObject['token'] = tokenVar;
        var data = new Blob([JSON.stringify(jsonObject,null,2)],{type:'application/json'});
        const options = {
            method : 'POST',
            body : data,
            mode : 'cors',
            cache : 'default'
        }
        fetch('/api/account/postJob',options)
        .then( res=>{
            res.json().then(
                (text)=>{
                    this.setState({isLoading:false});
                    console.log(text);
                    if(text.success === false){
                        this.setState({
                                postError:text.message,
                                postSuccess:false
                            });
                    }
                    else if(text.success === true){
                        this.setState({
                            postError:'',
                            postSuccess:true
                        });
                    }

                }
            );
        })
    }
    
    render(){
        let {isLoading,postError,postSuccess} = this.state;
        let error = false;
        let showMsg = false;
        if(postError != '' && postSuccess === false){
            error = true;
            showMsg = true;
        }else if(postError == '' && postSuccess === true){
            error = false;
            showMsg = true;
        }
        if(isLoading){
            visibilityMaintainer.opacity = '0.7';
        }
        else{            
            visibilityMaintainer.opacity = '1';            
        }

        return(            
            <div className="col-lg-3 mt-lg-5 border border-dark" style={{...visibilityMaintainer}} >               
                <div className="row bg-dark p-1"
                    style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"bolder",fontSize:"150%"}}>
                    <p className="w-100 text-center m-0">Post Job</p>
                </div>
                                
                <div className = "row">
                {
                    (showMsg)?(
                        (error)?
                            (<p className = "bg-danger text-white w-100 text-center"> {postError} </p>):
                            (<p className = "bg-success text-white w-100 text-center"> Posted successfully </p>)
                    ):(null)
                }                
                </div>

                <div className="row justify-content-center pr-3 pl-3 mt-3">
                    <form className="w-100" onSubmit = {this.post}>
                        <div className="form-group">
                            <label >Enter Job Heading</label>
                            <input type = "text" className = "form-control" name = "jobHeading" placeholder = "Enter job Heading" /> 
                        </div>

                        <div className = "form-group">
                            <label>Enter description</label>
                            <textarea className = "form-control" name = "jobDesc" rows = "3"></textarea>
                        </div>
                            
                        <div className = "form-group">
                            <label> Select category </label>
                            <select name="jobCategory" className="form-control">
                                <option value = "Logo">1</option>
                                <option value = "website">2</option>
                                <option value = "wireframe"> 3</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label >Amount</label>
                            <input type = "text" className = "form-control" name = "jobAmount" placeholder = "Enter Amount" /> 
                        </div>

                        <div className="form-group text-center">
                            <button type= "submit" className="btn btn-dark">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostJob;