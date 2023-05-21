import React from 'react'
import plus from '../../Images/Vector.png'
import '../Faqs/Faqs.css'
import star4 from '../../Images/Star 4.png'

export default function Faqs() {
return (
    <div className='container78'>
    <div className='container7'>
        <h1>frequently asked question</h1>
        <div className='col-711'>
        <p>How much would it require to open an account ?</p>
        <img src={plus} alt="" width={'20vw'}/>
        </div>
        <div className='col-712'>
        <p>Is there a minimum operational cost ?</p>
        <img src={plus} alt="" width={'20vw'}/>
        </div>
        <div className='col-713'>
        <p>where can i use my debit cards ?</p>
        <img src={plus} alt="" width={'20vw'}/>
        </div>
        <div className='col-714'>
        <p>how much do i get as interest on savings ?</p>
        <img src={plus} alt="" width={'20vw'}/>
        </div>
    </div>
    <div className='container8'>
        <div className='box-8'>
        <div className='heading-81'>
        <h2>subscribe to our newsletter for a 10% bonus on transactions</h2>
        <img src={star4} alt="" width={'90vw'}/>
        </div>
        <div className='button-81'>
        <input type="email" id="email" name="email" placeholder="Your email address" />
        <button id="subscribe" className="mail">SUBSCRIBE</button>
        </div>
        </div>

    </div>
    </div>
)
}
