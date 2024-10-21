
import Header from "./components/oldCode.tsx";
import Text from "./components/Text.tsx";
import List from "./components/List.tsx";
import { oldtodo } from "./components/todo.tsx";

import './App.css';
import {useState} from 'react';
import { TodoItem } from "./components/props.tsx";
import { Remove } from "./components/remove.tsx";


function App() {
  const [input,setInput]=useState('');
  const[list,setList]=useState<TodoItem[]>([]);
  
  const addToList=(text:string)=>{
    if (text.trim() === '') return; //trim tar bort spaces hihi
    const newTodo: TodoItem={
      id: Date.now(),
      text,
    };
    setList([...list,newTodo]); //updatera med ny todo
    setInput('');
  }

  const removeTodo=(id:number)=>{
    setList(list.filter(todo =>todo.id !== id)); // man ska behålla
  }

  return (
    <main>
      
      <div>
        <p>min lista</p>
        <input type="text" value={input} onChange={e=> setInput(e.target.value)} />
        <button onClick={()=> addToList(input)}>lägg till</button>
      </div>
      <ul>
        {list.map(todo=>(
          <Remove key={todo.id} todo={todo} remove={removeTodo}//toggleTodo={toggleTodo} 
          />
        ))}
      </ul>
      
    </main>
  )
}

export default App
