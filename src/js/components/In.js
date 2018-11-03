import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import Profile from './Profile';
import Nav from './Nav';
import PostJob from './PostJob'

class In extends Component{    
    constructor(){
        super();        

        this.state = {
            token : '',
            navSessionButtonData :[],
            navSessionRouteData:[],
            isLoading:false            
        }
        this.isLoading = this.isLoading.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout(){
        const tokenVar = localStorage.getItem('token');
        localStorage.setItem('token','');
         fetch('/api/account/logout?token='+tokenVar)
            .then(res=>res.json())
            .then(json=>{
                if(json.success){
                    this.setState({
                        token : ''
                    });                    
                }else{
                   alert('logout error');
                }
            });        
    }

    componentWillMount(){
        let {match} = this.props;
        this.setState({
            navSessionRouteData : [                
                {to:`${match.url}`,name:'Profile',key:'r1'},
                {to:`${match.url}/postJob`,name:'Post Job',key:'r2'}
            ],
            navSessionButtonData : [{onClick:this.logout,name:'Logout',key:'b1'}],
            isLoading:true
        }) 

        const tokenVar = localStorage.getItem('token');
        if(tokenVar == null){
            this.setState({
                token:'',
                isLoading:false
            });
        }else{            
            fetch('/api/account/verify?token='+tokenVar)
            .then(res=>res.json())
            .then(json=>{
                if(json.success){
                    this.setState({
                        token : tokenVar,
                        isLoading:false
                    });                    
                }else{
                    this.setState({    
                        token:'',             
                        isLoading:false,
                    });
                }
            });
        }
    }
    
    isLoading(){        
        let {isLoading,token,navSessionButtonData,navSessionRouteData} = this.state;
        if(isLoading === true){
            return (
                <p>Loading...</p>
            );
        }
        else{
            let {match} = this.props
            return(
                <div>
                    {
                        (token)?(null):<Redirect to={{pathname: '/' }} />
                    }
                    <div className = "row">
                        <Nav navRouteData = {navSessionRouteData}  navButtonData = {navSessionButtonData}/>
                    </div>
                        <div className="row justify-content-center">
                            <Switch>
                                <Route path={`${match.path}/postJob`} render={(props) => <PostJob setToken={this.setToken} {...props} getToken = {this.getToken} /> } />
                                <Route exact = {true} path={`${match.path}`} render={(props) => <Profile setToken={this.setToken} {...props} getToken = {this.getToken} /> } />                                
                            </Switch>
                        </div>
                </div>
            )
        }
    }


    render(){    
        return(
            <div>
                {this.isLoading()}
            </div>
        )
    }
}

export default In;