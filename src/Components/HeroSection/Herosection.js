import React from 'react';
import '../HeroSection/HeroSection.css';
import logo from '../../Images/Logo.png'
import navbar from '../../Images/Cheeseburger.png'
import star from '../../Images/Star2.png'
import heroimage from '../../Images/Hero_image.png'
import container2 from '../../Images/image2.jpg'

export default function Herosection() {
return (
    <div className='HeroSection'>
    <div className='container1'>
        <div className='container-11'>
        <div className='logo-1'>
            <img src={logo} alt="logo" width={'200vw'} />
        </div>
        <div className='navbar'>
            <img src={navbar} alt="..." width={'40vw'}/>
        </div>
        </div>
        <div className='text'>
            <img src={star} alt="..." />
            <h1>EASY WAY TO BANKING</h1>
            <p>
            We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.
            </p>
            <button className='Getbutton'>Get Started</button>
        </div>
        <div className='image-main'>
            <img src={heroimage} alt="..." width={'600vw'} />
        </div>
        
    </div>
    <div className='container-2'>
        <img src={container2} alt="" height={'50vw'} />
    </div>
    </div>
    
)
}
