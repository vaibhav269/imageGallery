import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props => 
    <div className="col-12 text-center">
        <div className = 'button d-inline-block m-2 mr-5 d-inline-block'>
            <label htmlFor = 'single'>
                <FontAwesomeIcon icon={faImage} color='#3B5998' style={{height:'20vh',width:'20vw',cursor:'pointer'}} />
            </label>
            <input type='file'className="d-none" id='single' onChange={props.onChange} /> 
        </div>
        
        <div className = 'button d-inline-block m-2 ml-5 d-inline-block'>
            <label htmlFor = 'multi'>
                <FontAwesomeIcon icon={faImages} color='#6d84b4' style={{height:'20vh',width:'20vw',cursor:'pointer'}} />
            </label>
            <input className="d-none" type='file' id='multi' onChange={props.onChange} multiple  />
        </div>
    </div>