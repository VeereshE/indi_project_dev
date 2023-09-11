import React from 'react'
import './page.css';
export default function page() {
  return (
    <div className='explore_all_container_image_text'>
        <div className="all_image_container_explore">
            <div className="all_image_container_explorea_container">
                <img src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1694354867/delysium_cover_1_coubut.png" alt="Image 1" className="image"/>
                 <img src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1694354867/paradise_tycoon_cover_onlfct.png" alt="Image 2" className="image down1"/>
                <img src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1694354866/1671085035834_card_512_x_576_png_mkavah.png" alt="Image 3" className="image down2"/>
                <img src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1694354865/The-Harvest-game-1850x1041_ui29zd.png" alt="Image 4" className="image down3"/>    
            </div>
              <div className='text_exlpore_button'>
                  <h1 className='expore_heading'>Explore our Catalog </h1>
                <p className='expore_para_section'>Rows by genre, features, price, and more to find your next favourite game. <br/>Rows by genre, features, price, and more to find your next favourite game.</p>
                <button className='expore_button_section'>Explore all Games</button>
            </div>
        </div>
    </div>
  )
}
