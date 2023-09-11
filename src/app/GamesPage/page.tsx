import React from 'react'
import SpotLightPage from "../SpotLightPage/page"
import "./page.css"
export default function page() {

const GameList = [
    {
        "id": "1",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694162884/delysium_cover_wmjgvw.png",
        "tittle": "Delysium",
        "Subtittle": "Shooter, Battle Royale",
    },
    { 
        "id": "2",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694257313/1-166_1_1_tahr32.png",
        "tittle": "Gods Unchained",
        "Subtittle": "Multiplayer Strategy",
    },
    {
        "id": "3",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694180833/image_4_1_jelglv.png",
        "tittle": "Superior",
        "Subtittle": "Shooter, Multiplayer",
    },
    { 
        "id": "4",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694180833/stella_fantasy_6e7bf9a322_1_yokqox.png",
        "tittle": "Stella Fantasy",
        "Subtittle": "Adventure, MMORPG",
    },
    // ---
    {
        "id": "5",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694257541/genopets_key_art_8b707d70b7_1_1_yemcwi.png",
        "tittle": "Genopets",
        "Subtittle": "Adeventure, Sports",
    },
    {
        "id": "6",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694180831/FrRtfPYWYAo5CTx_2_qvy2bv.png",
        "tittle": "Legends of elysium",
        "Subtittle": "Strategy, Multiplayer",
    },
    {
        "id": "7",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694257899/co508y_1_2_ovuu6n.png",
        "tittle": "Legends of Venari ",
        "Subtittle": "Casual, Adventure",
    },
    {
        "id": "8",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694180830/miniature_1_-min_1_mzizrg.png",
        "tittle": "Cross the Ages",
        "Subtittle": "Multiplayer, Strategy",
    },
    {
        "id": "9",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694180826/FiK-1R-XEAA-Um3_1_euzvsb.png",
        "tittle": "Ember  Sword",
        "Subtittle": "Adventure, Multiplayer",
    },
    {
        "id": "10",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694258047/photo_2022-12-08_01-06-06_1_1_zoqvwj.png",
        "tittle": "EV.IO",
        "Subtittle": "Shooter Multiplayer",
    },
]
  return (
      <>
        <div className='game_container'>
            <div className='game_heading_all_games_button'>
                <span className='featured_heading'>Featured <span className='games_heading'>Games</span></span>
                <button className='all_games_button'>All Games</button>
            </div>
            <div className='all_container_games'>
            {GameList.map((game, index) => (
                <div className='all_container_games_container'>
                     <div className='game_item_container'>
                        <div className='game_image_details_container'>
                        <div key={index}>
                            <img src={game.imageUrl} alt={game.tittle} className='games_images' />
                            <div className='heading_para_1'>
                                <h1 className='heading_tittle'>{game.tittle}</h1>
                                <p className='paragraph_details'>{game.Subtittle}</p>
                            </div>
                            <hr className='horizant_line' />
                            <div className='webiste_play_container'>
                                <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694179499/Group_175_vduh1o.svg' alt='webiste' className='webiste_logo' />
                                <button className='play_now_button'>Play</button>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            ))}
            </div>
          </div>
          <SpotLightPage/>
      </>
  )
}