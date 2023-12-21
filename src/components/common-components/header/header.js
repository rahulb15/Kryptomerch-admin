import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/mark-icon1.png'
import { TitleContext } from '../../../contexts/headerContext'
import "./header.scss"

const Header = () => {
    // useTitle('Dashboard')
    const { title } = useContext(TitleContext);

    return (
        <div>
            <header>
                <div className='headerLeft'>
                    <Link to='/'><img src={Logo} alt='' /></Link>
                </div>
                <div className='headerRight'>
                    <div className='head_Heading'>
                        <Link to='/marketplace-dashboard'
                            className={title === 'IDO'
                                // className={title === 'Marketplace' 
                                ? 'marketplace' : ''}>Marketplace</Link>
                        <Link to='/ido-dashboard'
                            className={title === 'Marketplace'
                                // className={title === 'IDO' 
                                ? 'ido' : ''}>IDO</Link>
                    </div>
                    {/* <div className='myaccountBx'>
                            <i></i>
                            <span>{user.firstName}</span>
                        </div> */}
                </div>
            </header>
        </div>
    )
}

export default Header