import "./style.css"
import { useState } from "react";

function saveInput(){
    const [inputText, setInputText] = useState<string>('');
    const [textArray, setTextArray ] = useState<string[]>([])
    

    return(
        <>
        <input type="text" />
        <p>listan:{textArray}</p>
        </>
    )
}


export default Text