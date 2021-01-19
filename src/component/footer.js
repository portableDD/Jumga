import React from 'react'
import Phone from '../pics/phone call icon.png'
import Whatsapp from '../pics/whatsapp icon.png'
import Twitter from '../pics/twitter icon.png'
import Facebook from '../pics/facebook.png'
import Instagram from '../pics/instagram icon.png'
import Gmail from '../pics/gmail.png'

const Footer = () => {
    return (
        <footer>
        <div className = "footer-items">
            <div className= "footer-site-contact">
                <h6>Contacts</h6>
                <p>
                    <span>
                        <b>ADEMOLA ALABI, OLUSOSUN, IKEJA, LAGOS.</b>
                    </span>
                    <span>
                        <i className = "fas fa-phone">
                            <img src={Phone} alt='phone icon'/>
                        </i>
                        +234 8165656988
                    </span>
                    <span>
                        <i className = "fas fa-phone">
                            <img src= {Phone} alt='phone icon'/>
                        </i>
                        +234 9078562988
                    </span>
                    <span>
                        <i className = "fas fa-envelope">
                            <img src={Gmail} alt='gmail icon' />
                        </i>
                        emmanueldorcas@15@gmail.com
                    </span>
                </p>
            </div>
            <div className= 'social-icons'>
                <a href="https://www.facebook.com/Onibata-Mall-101977884694791/">
                    <i className = "fas fa-facebook-f">
                        <img src= {Facebook}  alt='facebook icon'/>
                    </i>
                </a>
                <a href ="https://twitter.com/ayolovisgod">
                    <i className = "fas fa-twitter">
                        <img src ={Twitter} alt='twitter icon' />
                    </i>
                </a>
                <a href = "https://www.instagram.com/invites/contact/?i=mwm4wzxt1tsp&utm_content=dp4zu37">
                    <i className = "fas fa-instagram">
                        <img src ={Instagram} alt='instagram icon' />
                    </i>
                </a>
                <a href ="https://wa.me/2349080788447?text=Hi%20Onibata%20mall!%F0%9F%91%9E%F0%9F%91%A1%F0%9F%91%9E.My%20name%20is..and%20my%20occupation%20is%20.">
                    <i className = "fas fa-whatsapp">
                        <img src ={Whatsapp} alt='whatsapp icon' />
                    </i>                    
                </a>
            </div>
        </div>
        <div className= "footer-credits">
            <span>
                Copyright @ 2020 - Jumga | 
                <a href='hhagbdnm'>PortableWebTech</a>
            </span>
        </div>
</footer>

    )

}

export default Footer