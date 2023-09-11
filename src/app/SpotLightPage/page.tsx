import React from 'react'
import "./page.css";
const page = () => {
  return (
    <div className='spot_ligt_container'>
          <div className='spoting_light_heading_button'>
            <div className='game_heading_all_games_button'>
                <div className="spot_icon_spoting_heading">
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694240206/12852488831548329951_1_mygnng.png' alt='spot' className='spot_icon' />
                    <span className='spoting_heading'>Spotlight<span className='game_heading'> Games</span></span>
                </div>
                <button className='view_all_button'>View All</button>
            </div>
              <div className="all_picture_container">
                  <div className='first_inner_picture'>
                        <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694242538/life_beyond_cover_1_ro2ghl.png'
                          alt='picture_cover' className='picture_elemts' />
                      <div className='text_container'>
                        <h1  className='heading_section'>Life Beyond</h1>
                        <p className='para_section'>Life Beyond is a sci-fi metaverse powered by Unreal Engine, NFTs, and ERC-20 tokens</p>
                      </div>
                  </div>
                  <div className='secoud_inner_picture'>
                        <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694245275/maxresdefault_1_dieqkl.png'
                          alt='picture_cover' className='picture_elemts' />
                      <div className='text_container'>
                        <h1 className='heading_section'>Treeverse</h1>
                        <p className='para_section'>The Treeverse is a beautifully artistic top-down open-world<br/> classless MMORPG within the city of Elderwall that is protected by the World Tree.</p>
                      </div>
                  </div>
              </div>  
        </div>
    </div>
  ) 
}

export default page
