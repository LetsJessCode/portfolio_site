import React from 'react'
import pdf from '../images/certificate.pdf'
import './About.css'
import Footer from '../Project/ProjectFooter'


const About = () => {
    return (
        <div className="about_body">
            <div className="about"> 
                <p className="intro">Hi! My name is Jessica!</p> I am a results-driven software engineer with a passion for helping people. Having experience with medical insurance & my natural ability to learn new skills quickly, I’ll become a  productive employee in record time. My app ‘A Date Night Site’ shares stay-at-home date ideas to keep relationships fresh & alive (especially now!). My professional characteristics are: <span>Bright</span> / <span>Bubbly</span>, <span>Reliable</span>, <span>Professional</span>, <span>Flexible</span>. I believe that changing the world starts with changing the lives of those I interact with directly, I hope that my positive influence leaves each person in a better place than before we met.
            </div>
            <h2>Most Recent Certification</h2>
            <div class="container"> 
                
                <iframe class="responsive-iframe" align='center' width="560" height="315" src={pdf + "#toolbar=0"} title='Certification'/>
            </div>
            <Footer/>
        </div>
    )
}

export default About
