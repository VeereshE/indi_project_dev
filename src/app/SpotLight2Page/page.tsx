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
                        <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694354193/images_14_1_2_es9fpe.png'
                          alt='picture_cover' className='picture_elemts' />
                      <div className='text_container'>
                        <h1  className='heading_section'>Warriors</h1>
                        <p className='para_section'>A bite -sized multiplayer strategy game of wits and luck. A bite-sized multiplayer strategy game of wits and luck</p>
                      </div>
                  </div>
                  <div className='secoud_inner_picture'>
                        <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694354193/images_15_1_1_pso8k2.png'
                          alt='picture_cover' className='picture_elemts' />
                      <div className='text_container'>
                        <h1 className='heading_section'>Ares</h1>
                        <p className='para_section'>A bite -sized multiplayer strategy game of wits and luck. A bite-sized multiplayer strategy game of wits and luck</p>
                      </div>
                  </div>
              </div>  
        </div>
    </div>
  ) 
}

export default page
