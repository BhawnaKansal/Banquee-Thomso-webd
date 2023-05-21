import React from 'react';
import '../Features/Features.css'
import row1text from '../../Images/4 0.png'
import row1img from '../../Images/Group 5.png'
import row2img from '../../Images/Group 7.png'
import row2text from '../../Images/4 1.png'
import whitehouse from '../../Images/9 1.png'


export default function Features() {
return (
    <div className='features'>
    <div className='container2'>
        <h1>All features you need in one place</h1>
        <div className='col-1'>
            <div className='row-11'>
                <img src={row1text} alt="" height={'150vw'}/>
                <p>Secure online Banking</p>
            </div>
            <div className='row-12'>
                <img src={row1img} alt="" width={'300vw'}/>
            </div>
        </div>
        <div className='col-2'>
        <div className='row-21'>
                <img src={row2img} alt="" width={'300vw'}/>
        </div>
            <div className='row-22'>
                <img src={row2text} alt="" height={'150vw'}/>
                <p>Secure online Banking</p>
            </div>
        </div>
    </div>
    <div className='container3'>
        <img src={whitehouse} alt=""  height={'250vw'}/>
        <div className='text31'>
        <h1>Go digital now!</h1>
        <p>Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today.    
        </p>
        <button type='button' className='Getbutton2'>Get started</button>
        </div>
    </div>
    </div>
)
}
