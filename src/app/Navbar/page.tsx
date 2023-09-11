import React from 'react'
import Link from 'next/link'
import './page.css'
export default function page() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light  fixed-top header_section ">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <img src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1694168251/image_3_2_eijkpo.png" className="logo_image" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto ">
                        <div className='search_icons_container'>
                            <input type='search' className='searchInput' placeholder='Search INDIGG' />
                            <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694169297/Icon_1_tmsp1z.png' alt='search_icons' className='icon_search'/>
                        </div>
                        <div className='unorder_list_container '>
                            <Link className="nav-link link_nav"  href="/home"> Home</Link>
                            <Link className="nav-link link_nav" href="/games">Games</Link>
                            <Link className="nav-link link_nav" href="/clans">Clans</Link>
                            <Link className="nav-link link_nav" href="/quests">Quests</Link>
                        </div>
                        <div className='bell_wallet_Connect'>
                            <div className='bell_container_element'>
                                <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694170741/bell_Icon_myc3kh.svg' alt='bell' className='bell_container' />
                                <button className='button_wallet'>Wallet Connect</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}
