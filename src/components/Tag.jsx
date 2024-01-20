
import { useState } from "react";

import useGif from "../hooks/useGif";

function Tag(){
const [tag, settag] = useState("")
    const {gif, fetchdata} = useGif(tag)

function clickhandler(){
            fetchdata();
         }

    return(
<div>
<h1>Random {tag} Gif</h1>
<img src={gif}/>
<input value={tag}
onChange={(event)=>settag(event.target.value)
}
/>
<button onClick={clickhandler}>Genrate button</button>
</div>
    );
}
export default Tag