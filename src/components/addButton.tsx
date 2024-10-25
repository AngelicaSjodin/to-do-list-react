import {useState} from 'react';


interface AddTodoProps {
    addToList: (text:string) => void;
}

export const InputAndButton: React.FC<AddTodoProps> = ({addToList}) =>{
    const [input,setInput] =useState('');

    const add =()=> {
        if (input.trim() === '') return;
        addToList(input);
        setInput('');
    };

    return(
        <div>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="text..."></input>
            <button onClick={add}>Lägg till</button>
        </div>
    )
}

