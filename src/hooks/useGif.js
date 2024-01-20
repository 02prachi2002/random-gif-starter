import { useEffect, useState } from "react";
import axios from 'axios';
function useGif(tag){
    // const [tag, settag] = useState("");
    const [gif,setgif] = useState("");
    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    async function fetchdata(tag){
 
        const {data}= await axios.get(tag ? (tagurl) : (randomurl));
        const imagesource = data.data.images.downsized_large.url;
        setgif(imagesource);
    }

useEffect(
        ()=>{
            fetchdata(tag);
        },[] )

        return(fetchdata, gif)

}
export default useGif;
