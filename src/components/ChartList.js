import { useState } from "react";
import SongItem from "./SongItem";

const ChartList = ({songs}) => {


    const songItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index}/>
      })

return(
    <>
        <ul className="list-container">{songItems}</ul>
    </>
)
}


export default ChartList;