
import useGif from "../hooks/useGif";
function Random(){

 
    const {gif, fetchdata} = useGif()
         function clickhandler(){
            fetchdata();
         }
    return(
<div>
<h1>Random Gif</h1>
<img src={gif}/>
<button onClick={clickhandler}>Genrate button</button>
</div>
    );
}
export default Random;