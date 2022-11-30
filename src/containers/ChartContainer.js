import { useState, useEffect } from "react"
import ChartList from "../components/ChartList";


const ChartContainer = () => {

const [songs, setSongs] = useState([]);

useEffect(() => {
    getSongs();
  }, [])

    const getSongs = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))

    }

    console.log(songs)
    
return(
    <div>
        <ChartList songs={songs}/>
    </div>
)

}


export default ChartContainer;