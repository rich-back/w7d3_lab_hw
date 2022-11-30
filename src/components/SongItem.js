

const SongItem = ({song, index}) => {

const chartPos = (index +1);


   return (
    <div className="song-container">
        <h1 className="chartpos">{chartPos}</h1>
        <a href={song.link[0].attributes.href} target="_blank"><img className="album-cover" src={song["im:image"][2].label}></img></a> 
        {/* <li className="song-title">{song["im:name"].label}</li> */}
    </div> 
)
    
}

export default SongItem;