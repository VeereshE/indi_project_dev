import React from 'react'

import "./page.css"
export default function page() {
    
const ClansList = [
    {
        "id": "1",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694259094/FCim1_tm7ezi.png",
        "tittle": "Delysium",
        "first_status": "3.2k",
        "secound_status":"Esports Tournament",
        
    },
    { 
        "id": "2",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346335/banner-rarrible_1_cnxko3.png",
        "tittle": "Gods Unchained",
        "first_status": "2.3k",
        "secound_status":"Fun Casual Gameplay",
        
    },
    {
        "id": "3",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346382/medium_heroes_of_mavia_banner_rln4e6.png",
        "tittle": "Heroes Of Mavia",
        "first_status": "2.3k",
        "secound_status":"Live Tournament",
        
    },
    { 
        "id": "4",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346428/banner-rarrible_1_1_apdbt1.png",
        "tittle": "Life Beyond",
        "first_status": '2.3k',
        "secound_status":"Battle Royale Game",
    },
    {
        "id": "5",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346474/planet_ix_rectangle_thumbnail_6163b884ad_jenmkk.png",
        "tittle": "Planet IX",
        "first_status": "3.2k",
        "secound_status":"Esports Tournament",
        
    },
    {
        "id": "6",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346702/EFAS_1_iu654e.png",
        "tittle": "Safrootics",
        "first_status": "2.3k",
        "secound_status":"Battle Royale Game",
        
    },
    {
        "id": "7",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346680/RotationAFinal_qbujey.png",
        "tittle": "Planet IX",
        "first_status": "2.3k",
        "secound_status":"Live Tournament",
        
    },
    {
        "id": "8",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346620/Metalcore_cinematic_3_2be8d42f66_hwslmg.png",
        "tittle": "Pulsar",
        "first_status": "2.3k",
        "secound_status":"Fun Casual Gameplay",
    },
    {
        "id": "9",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346574/devikins_key_art_1_glheqb.png",
        "tittle": "Devikins",
        "first_status": "3.2k",
        "secound_status":"Esports Tournament",
        
    },
    {
        "id": "10",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694346525/FiK-1R-XEAA-Um3_6_kp4dz7.png",
        "tittle": "Ember Sword",
        "first_status": "2.3k",
        "secound_status":"Battle Royale Game",
    },
]
  return (
      <>
        <div className='game_container'>
            <div className='game_heading_all_games_button'>
                <span className='featured_heading'>Other<span className='games_heading'>Quests</span></span>
                <button className='all_games_button'>All Games</button>
            </div>
            <div className='all_container_games'>
            {ClansList.map((game, index) => (
                <div className='all_container_games_container clus_games'>
                     <div className='game_item_container'>
                        <div className='game_image_details_container'>
                            <div className='all_small_img_and_icons'>
                                <div key={index}>
                                <img src={game.imageUrl} alt={game.id} className='games_images' />
                            <div className='heading_para'>
                                <h1 className='heading_title'>{game.tittle}</h1>
                                    <div className='par_details_1'>
                                        <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694414932/like1_1_dolrjz.png' alt='like' className='like_icon'/>
                                        <p className='paragraph_details'>{game.first_status}</p>
                                        <p className='paragraph_details'>{game.secound_status}</p>
                                    </div>
                            </div>
                            <hr className='horizant_line' />
                            <div className='icons_container'>
                                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694260629/Vector_wwzhqa.svg' alt='money' className='money_icons' />
                                    <span className='cart_title'>Reward USD 130$</span>
                                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694260629/Stepd_icon_bgndvz.svg' alt='money' className='money_icons' />
                                    <span className='cart_title'>Steps 10</span>
                                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1694260629/Group_303_avupo3.svg' alt='money' className='money_icons' />
                                    <span className='cart_title'>Slots 3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            ))}
            </div>
          </div> 
      </>
  )
}