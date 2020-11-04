import React from 'react'
import { Button } from '@material-ui/core';


const Home = () => {
    return (
        <div>
            <h3>Home Page</h3>
            <Button variant="contained" color="primary">
      Hello World
    </Button>
            <ul>
                <li> contact information  
                    <ol>
                        <li>email</li>
                        <li>social media (twitter and linkedin)</li>
                    </ol>
                </li>      
                <li> images of self  </li>        
                <li> maybe a song to play </li>
            </ul>
        </div>
    )
}

export default Home
