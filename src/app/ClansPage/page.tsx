import React from 'react'

import "./page.css"
export default function page() {

const ClansList = [
    {
        "id": "1",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694259094/FCim1_tm7ezi.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694259165/FCim1_1_hhrvll.png",
        "tittle": "#Red Devils",
        "imgIcon1": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/Announcement_icon_dvlsvi.png",
        "first_status": "Announcement",
        "secound_status": "",
        "imgIcon2": "",
        
    },
    { 
        "id": "2",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694264861/Warriors-Gaming-Clan-Mascot-Logo-scaled_1_lmk4w9.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694343803/Warriors-Gaming-Clan-Mascot-Logo-scaled_zrwbzu.png",
        "tittle": "#Warriors Gamer",
        "imgIcon1": "",
        "first_status": "Match",
        "secound_status": "Featured",
        "imgIcon2": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/registration_icon_nnmoq7.png",
        
    },
    {
        "id": "3",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694343614/download_8_ihzwyv.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694343803/Warriors-Gaming-Clan-Mascot-Logo-scaled_zrwbzu.png",
        "tittle": "#Assassin",
        "imgIcon1": "",
        "first_status": "Registration",
        "secound_status": "Popular",
        "imgIcon2": "",
        
    },
    { 
        "id": "4",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694343614/download_9_1_lpckia.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694343984/download_9_2_eqfqgn.png",
        "tittle": "#Warriors",
        "imgIcon1": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/Announcement_icon_dvlsvi.png",
        "first_status": "Announcement",
        "secound_status":"Editers",
        "Subtittle": "Shooter, Battle Royale",
        "imgIcon2": "",
    },
    {
        "id": "5",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344227/images_14_1_sd5qzg.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344128/FCIM2_1_a2yrhh.png",
        "tittle": "#The Best",
        "imgIcon1": "",
        "first_status": "Announcement",
        "secound_status": "Popular",
        "imgIcon2": "",
        
    },
    {
        "id": "6",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344169/FCIM2_2_ue42qd.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344128/FCIM2_1_a2yrhh.png",
        "tittle": "#Warriors",
        "imgIcon1": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/registration_icon_nnmoq7.png",
        "first_status": "Registration",
        "secound_status": "Popular",
        "imgIcon2": "",
        
    },
    {
        "id": "7",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344227/images_14_1_sd5qzg.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344356/images_15_2_hbmq5k.png",
        "tittle": "#Ares",
        "imgIcon1": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/Announcement_icon_dvlsvi.png",
        "first_status": "Announcement",
        "secound_status": "New",
        "imgIcon2": "",
        
    },
    {
        "id": "8",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344438/images_18_sadbha.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344447/images_18_1_xtll59.png",
        "tittle": "#The King",
        "imgIcon1": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/Announcement_icon_dvlsvi.png",
        "first_status": "Announcement",
        "secound_status":"Popular",
        "Subtittle": "Shooter, Battle Royale",
        "imgIcon2": "",
    },
    {
        "id": "9",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344525/images_20_dtrqxm.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344534/images_20_1_k6bhog.png",
        "tittle": "#Spartan",
        "imgIcon1": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694410181/_2023539072864_hg4dw7.png",
        "first_status": "Match",
        "secound_status": "New",
        "imgIcon2": "",
        
    },
    {
        "id": "10",
        "imageUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344611/print-232723370_b09wx8.png",
        "SubImage": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694344629/download_8_2_pyq8j4.png",
        "tittle": "#Theseus",
        "imgIcon1": "",
        "first_status": "Announcement",
        "secound_status": "Popular",
        "imgIcon2": "",
    },
]
  return (
      <>
        <div className='game_container'>
            <div className='game_heading_all_games_button'>
                <span className='featured_heading'>Featured <span className='games_heading'>Clans</span></span>
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
                                    <img src={game.SubImage} alt={ game.id} className='Sub_images' />  
                            <div className='heading_para'>
                                <h1 className='heading_title'>{game.tittle}</h1>
                                <div className='par_details'>
                                    <span className='text_img'>
                                        <img src={game.imgIcon1} alt={ game.id} className='icons_img' />
                                        <p className='paragraph_details'>{game.first_status}</p>
                                    </span>
                                    <span className='text_img'>
                                        <img src={game.imgIcon2} alt={ game.id} className='icons_img' />
                                        <p className='paragraph_details'>{game.secound_status}</p>
                                    </span>
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