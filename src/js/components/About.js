import React,{Component} from 'react';
import dp from '../../asset/images/vaibhavPic.jpg';

class About extends Component{
    constructor(){
        super();
        this.state={

        }      
    }
    
    componentWillMount(){
        const tokenVar = localStorage.getItem('token');
        fetch('/api/account/getUserData?token='+tokenVar)
            .then(res=>res.json())
            .then(json=>{
                if(json.success === true){
                    this.setState({
                        email:json.message.email,
                        signUpDate:json.message.signUpDate
                    });
                }
                else{
                    alert(json.message);
                }
            });
    }

    

    render(){   
        let {email,signUpDate,showAbout} = this.state;
        return(
                <div className="text-center bg-dark text-white d-flex align-items-center" style = {{ height:'93vh' }} >
                    <div>
                        <img className = "rounded-circle" src = { dp } style = { { maxWidth:'70%' } } />

                        <ul className = "list-unstyled mt-5">
                            <li> { email } </li>
                            <li> { signUpDate } </li>
                        </ul>
                    </div>
                </div>                
        )
    }
}

module.exports = About;