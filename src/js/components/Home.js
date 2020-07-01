import React,{Component} from 'react'
import '../../css/home.css';

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="col-12 p-1 mt-lg-5 pt-5">
                <h2 className="text-center heading-custom w-100">Image Gallery</h2>
                <blockquote className="text-center pt-3 blockquote-custom">
                        "A demo application to upload and share images with everyone"
                </blockquote>
            </div>
        )
    }
}
export default Home;