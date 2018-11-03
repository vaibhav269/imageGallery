import React,{Component} from 'react';
import About from './About';
import ImagesGallery from './ImagesGallery';

var fullDisplay = {
    display : 'flex',
    width:'100%'
}

var noDisplay = {
    display : 'none',
    width : '0'
}


class Profile extends Component{
    constructor(){
        super();
        this.state={
            showAbout : true,
            showSelection : true
        }
        this.toggleAbout = this.toggleAbout.bind(this);
    }
    
    toggleAbout(){
        this.setState({
            showAbout:!this.state.showAbout
        });
    }
 
    render(){
        let { showAbout,showSelection } = this.state;
        return(
            <div className = "col-lg-12 p-0">
                
                <div className="row no-gutters bg-dark p-3">
                    <div className="col text-left">
                        <div className="d-inline-block">
                            {
                                (showAbout) ? 
                                    (<button className = "btn btn-danger pl-3 pr-3 " style = {{ fontSize:'150%' }} onClick = {this.toggleAbout}> X </button>)
                                    :
                                    (<button className = "btn btn-success pl-3 pr-3" style = {{ fontSize:'150%' }} onClick = {this.toggleAbout}> + </button>)
                            }
                        </div>
                    </div>                   
                </div>
                
                <div className = "row no-gutters">
                    <div className = "col-lg-3" style = { (showAbout) ? fullDisplay : noDisplay }>
                        <About />                        
                    </div>
                        
                    <div className = "col">                        
                        <ImagesGallery />                        
                    </div>                                        
                </div>
            </div>
        )
    }
}

module.exports=Profile;