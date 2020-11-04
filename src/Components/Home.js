import React from 'react'
import { MdEmail } from 'react-icons/md'
import { CgTwitter } from 'react-icons/cg'
// ------------------------------

const Home = () => {
    return (
        <div>
            <h3>Home Page</h3>
            <ul>
                <li> contact information  
                    <ol>
                    <a href="mailto:letsjesscode@gmail.com"><MdEmail /></a> <br />
                     <a href="https://twitter.com/LetsJessCode"><CgTwitter /></a>
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
