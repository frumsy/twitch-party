import React, {useState} from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

export default function Stream() {
    const [channel, setChannel] = useState('')
    const [toSearch, setQuery] = useState('')

    const handleSubmit = () =>{
        setChannel(toSearch)
        setQuery('')
    }
    return (
        <div>
            {channel === '' && 
            <div>
              <form onSubmit={handleSubmit} style={{padding: '10px'}}>
                  <label>
                    type the name of a streamer you like:
                    <br/>
                    <input type="text" value={toSearch}
                      onChange={e => setQuery(e.target.value)}/>
                  </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
            }
            {channel !== '' && <ReactTwitchEmbedVideo channel={channel} width={'500'} height={'500'}  />}
        </div>
    )
}
