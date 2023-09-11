import React from 'react'
import "./page.css";
export default function page() {

const NewRelease =[
       {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352628/Rock_Paper_Shotgun_1_jfcxvo.png",
            "tittle": "Rock Paper Shotgun",
            "paragraph": "A bite-sized multiplayer strategy game of wits and luck.",
            "Released" : "Released 5 days ago",
       },
      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352316/Rock_Paper_Shotgun_2_yamu7t.png",
            "tittle": "Wilderness",
            "paragraph": "Wilderness is an immersive survival game that will take you.",
            "Released" : "Eurogamer",
       },
      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352316/Cover_Image_jqitmd.png",
            "tittle": "Battlebots Arena",
            "paragraph": "If you're a fan of robot battles, then you'll love Battlebots Arena.",
            "Released" : "IGN",
       },


      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694352628/Rock_Paper_Shotgun_1_jfcxvo.png",
            "tittle": "Hades' Labyrinth",
            "paragraph": "Choose your character and weapons wisely, and make your way through",
            "Released" : "PC Gamer",
       },
       
      {
           "imgUrl": "https://res.cloudinary.com/dgvec2ipx/image/upload/v1694357048/Rock_Paper_Shotgun_3_w6wafq.png",
            "tittle": "Goblin Market",
            "paragraph": "Goblin Market is a unique game that combines elements of trading card",
            "Released" : "Rock Paper Shotgun",
       },
]

  return (
    <div className='heading_container'>
      <span className='featured_heading'>Coming <span className='games_heading'>Soon</span></span>
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