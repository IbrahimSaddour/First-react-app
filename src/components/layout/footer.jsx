import React from 'react'
import "../../styles/footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
// import {  } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_content'>
                <span>A propos</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis maiores hic asperiores reprehenderit iste repellendus exercitationem voluptatum. A tempora molestias sequi, eum deserunt, iure eos libero in nostrum aliquid harum asperiores officia eaque vitae explicabo fugit laudantium blanditiis dolore debitis. Aspernatur doloribus fuga porro dolor iusto error autem et.
                </p>
                <div className='footer_socials'>
                    <span>Suivez-nous</span>
                    <div className='socials_container'>
                        <ul className='socials_list'>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaYoutube /></li>
                            <li><FaLinkedin /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
