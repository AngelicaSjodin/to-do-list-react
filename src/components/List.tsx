import "./style.css"
import { useState } from "react";

function List (){
    const [syssla,setSyssla]=useState([
        {
            id:1,
            text:'städa',
            completed: true
        },
        {
            id:2,
            text:'äta',
            completed:false
        }
    ]);

    const[text,setText]=useState('');



    return(
        <div></div>
    )
}

export default List