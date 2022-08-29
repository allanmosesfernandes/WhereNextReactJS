import React from 'react'
import {Link} from 'react-router-dom'
import { HiPhone } from 'react-icons/hi';
import { SiWhatsapp } from 'react-icons/si';
import { RiMessage2Line } from 'react-icons/ri';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import pattern from './world.png'
import './footer.scss';

const Footer = () => {
  return (
    <div className="container">
    <footer>
        <div className="footer--logo">
            <Link to="/about">Where Next?</Link>
        </div>
        <div className="footer--links">
                <div className="whereMedia">
                    <h5>Where Next Media</h5>
                    <Link to="/" className='nav-logo'>Inicio</Link>
                                <a href='/about' className='nav-links'>Chal na bc</a>

                    <Link to="/" className='nav-logo'>Contacto?</Link>
                    <Link to="/" className='nav-logo'>Privacy</Link>
                    <Link to="/" className='nav-logo'>Privacy</Link>
                </div>
                <div className="whereMedia">
                    <h5>Legal</h5>
                    <Link to="/" className='nav-logo'>Inicio</Link>
                    <Link to="/" className='nav-logo'>Contacto?</Link>
                    <Link to="/" className='nav-logo'>Privacy</Link>
                </div>
                <div className="whereMedia">
                    <h5>Contact</h5>
                    <Link to="/" className='nav-logo'><HiPhone />123456789</Link>
                    <Link to="/" className='nav-logo'><SiWhatsapp />Whatsapp</Link>
                    <Link to="/" className='nav-logo'><RiMessage2Line />hola@wherenext.com</Link>
                </div>
        </div>
        <div className="footer--links__social">
            
            <Link to="/" className='nav-logo'><IoLogoTwitter /></Link>
            <Link to="/" className='nav-logo'><FaFacebookF /></Link>
            <Link to="/" className='nav-logo'><ImLinkedin2 /></Link>
        </div>

        <div className="footer--body">
            <p>&copy; 2022 Where Next </p>
            <p>Bade Bade Bol Chaddi mai hole</p>
            <p>Badi Badi baatei vada pav khatei </p>
            <div className='footer--body__text'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente   excepturi molestiae, atque neque culpa aliquam maiores totam modi, odit, ipsam    sed molestias tenetur. Rem fuga explicabo veniam ducimus nobis! ,<br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente   excepturi molestiae, atque neque culpa aliquam maiores totam modi, odit, ipsam    sed molestias tenetur. Rem fuga explicabo veniam ducimus nobis! ,

                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente   excepturi molestiae, atque neque culpa aliquam maiores totam modi, odit, ipsam    sed molestias tenetur. Rem fuga explicabo veniam ducimus nobis! ,<br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente   excepturi molestiae, atque neque culpa aliquam maiores totam modi, odit, ipsam    sed molestias tenetur. Rem fuga explicabo veniam ducimus nobis! ,
                </p>

            </div>
            
            <h5>Where Next gets no commision from Universities!</h5>

        </div>
        <div className="footer--background" style={{backgroundImage: `url(${pattern})`}}></div>
    </footer>
    </div>

  )
}

export default Footer