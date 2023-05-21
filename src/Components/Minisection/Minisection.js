import React from 'react'
import '../Minisection/Minisection.css'
import img from '../../Images/5 1.png'
import profile1 from '../../Images/profile1.png'
import profile2 from '../../Images/profile2.png'

export default function Minisection() {
return (
    <div>
    <div className='container5'>
        <h1>
        We take banking personally
        </h1>
        <div className='container-51'>
            <div className='text-51'>
            <h2>SAVE</h2><br />
            <p>We're using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.</p><br />
            <h2>Spend</h2><br />
            <p>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.</p><br />
            <h2>Send</h2><br />
            <p>From international transfers to on-the-spot payments at market stalls, we've simplified sending money so you don't need to think too much about it.</p>
            </div>
            <div className='img'>
                <img src={img} alt="" height={'500vw'} />
            </div>
        </div>
    </div>
    <div className='container6'>
        <h1>trusted by People all over the world</h1>
        <div className='container-61'>
            <div className='row-611'>
                <h3>Super user-friendly</h3>
                <p className='text-611'>The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.</p><br />
                <div className='profile1'>
                    <img src={profile1} alt="" width={'50vw'}/>
                    <div>
                    <p className='name-611'>William Tromp</p><br />
                    <p className='about-611'>CTO - Gislason and Sons</p>
                    </div>
                </div>
            </div>
            <div className='row-612'>
                <h3>Saved hours every week!</h3>
                <p className='text-612'>I have been saved so much time on tax calculations. And it gives me reliable projections.I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.</p><br />
                <div className='profile2'>
                    <img src={profile2} alt="" width={'50vw'}/>
                    <div>
                    <p className='name-612'>Rebecca Emard</p><br />
                    <p className='about-612'>Founder - Conn Inc</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}
