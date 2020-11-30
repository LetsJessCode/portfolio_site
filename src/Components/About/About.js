import React from 'react'
import pdf from '../images/certificate.pdf'
import './About.css'
import Footer from '../Project/ProjectFooter'


const About = () => {
    return (
        <div className="about_body">
            <div className="about"> 
                <p className="intro"> Result driven software engineer with a passion for helping people. My natural ability to swiftly learn new skills and adapt allows me to become an invaluable, and productive employee. My professional characteristics include, but are not limited to, being reliable, professional, and flexible. Outside of software engineering, I am a food fanatic, who enjoys creating fun desserts and DIY projects, in addition to my 5-6 hilarious mom jokes per day. My belief is that changing the world starts with changing the lives of those that are directly connected (or impacted by one’s life), and I hope that I can leave behind a positive influence with every interaction made. </p>
            </div>

            <h2>Most Recent Accomplishment</h2>
            <div class="container"> 
                
                <iframe class="responsive-iframe" align='center' width="250" height="250" src={pdf + "#toolbar=0"} title='Certification'/>
            </div>
            <Footer/>
        </div>
    )
}

export default About
