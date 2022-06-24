import React from 'react'
import "../styles/card.css"
function SongCard({song, callBackOnClick}) {
    const onClick = () => {
        callBackOnClick(song)
    }
  return (
    <div className= "card-body" onClick={onClick}>
        <div style = {{width:"100%", height:"70%"}}>
            <img className="card-img" src={song.song_art_image_url} alt="" />
        </div>
        
        <div style={{width:"100%", height:"30%"}}>
            <div className="card-text">
                <div className="card-title">{song.title}</div>
                <div className="card-desc">{song.artist_names}</div>
            </div>

        </div>
        
    </div>

  )
}

export default SongCard