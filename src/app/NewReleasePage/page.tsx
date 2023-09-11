import React from 'react'
import "./page.css";
export default function page() {

const NewRelease =[
       {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694348613/Rock_Paper_Shotgun_1_rg9it6.png",
            "tittle": "Heroes of Mavia",
            "paragraph": "Build your army, defend your base and fight for Ruby in Heroes of Mavia",
            "Released" : "Released 9 days ago",
       },
      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352316/Rock_Paper_Shotgun_2_yamu7t.png",
            "tittle": "God Unchained",
            "paragraph": "Wilderness is an immersive survival game that will take you.",
            "Released" : "Eurogamer",
       },
      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352316/Cover_Image_jqitmd.png",
            "tittle": "Delysium",
            "paragraph": "Battle Royale Shooter",
            "Released" : "IGN",
       },


      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352316/Cover_Image_1_nfj5sr.png",
            "tittle": "Paradise Tycoon",
            "paragraph": "Choose your character and weapons wisely, and make your way through",
            "Released" : "PC Gamer",
       },
       
      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352316/Cover_Image_2_kjtdyt.png",
            "tittle": "Thetan Arena",
            "paragraph": "Battle Arena",
            "Released" : "Rock Paper Shotgun",
       },

]


  return (
    <div className='heading_container'>
      <span className='featured_heading'>New <span className='games_heading'>Release</span></span>
      <div className="full_section_container">
        {NewRelease.map((element, index) => (
        <div key={index}>
          <div className='all_new_coming_soon_containers'>
            <div className='new_top_coming_soon_container'>
          <img src={element.imgUrl}
            alt='games_player' className='new_top_coming' />
          <div className='details_of_games_carts'>
              <h1 className="heading_players_games">{ element.tittle}</h1>
              <h4 className="para_players_games">{ element.paragraph}</h4>
            <p className="released_days">{element.Released}</p>
            <button className="play_button_games">Play</button>
          </div>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}