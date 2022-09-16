import {Fragment, React, useContext} from 'react'
import {Outlet, Link} from 'react-router-dom'
import { GrFormNextLink } from 'react-icons/gr';
import Footer from '../footer/Footer';
import './navbar.scss';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navbar = () => {

  const {currentUser }  = useContext(UserContext);

  return (
    <Fragment>
    <nav className='nav-container'>
        <Link to='/' className='nav-logo'>WhereNext?</Link>
        <div className='nav-center'>
            <Link to='/' className='nav-links'>About </Link>
            <Link to='/discover' className='nav-links'>Discover</Link>
            {/* <Link to='/' className='nav-links'>Update</Link> */}
            <Link to='news' className='nav-links'>Latest News</Link>
        </div>
        <div className='nav-sign-up arrow'>
        { currentUser ? (
          <span className='nav-links' onClick={signOutUser}>
            {' '}
            SIGN OUT {' '}
          </span>
            ):(
                <Link to='/auth' className='nav-links'>Sign In</Link>
            )
          }
        </div>
    </nav>
    <Outlet />
    <Footer></Footer>
    </Fragment>

  )
}

export default Navbar

// GrFormNextLink