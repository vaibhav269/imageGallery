import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props => 
    props.images.map((image, i) =>      
        <div key={i} className='fadein' className = "p-2 d-inline-block" style = {{width:'20%'}}>
            <div 
                onClick={() => props.removeImage(image.public_id)} 
                className='delete'
            >
                <FontAwesomeIcon icon={faTimesCircle} size='2x' />
            </div>
            <img src={image.secure_url} alt=''  className = "w-100" />
        </div>
    )