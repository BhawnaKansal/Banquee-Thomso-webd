import React from 'react'
import img1 from '../../Images/Small Businesses.png'
import img2 from '../../Images/Enterprises.png'
import img3 from '../../Images/Startups.png'
import '../Business/Business.css'

export default function Business() {
return (
    <div>
    <div className='container4'>
        <h1>designed for businesses of all sizes</h1>
        <div className='container-41'>
            <div className='row1'>
                <img src={img1} alt="" width={'400vw'}/>
            </div>
            <div className='row2'>
                <img src={img2} alt="" width={'230vw'} />
            </div>
            <div className='row3'>
                <img src={img3} alt="" width={'230vw'} />
            </div>
        </div>
    </div>
    </div>
)
}
