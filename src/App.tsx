import './App.css';
import {useState} from 'react';
import { TodoItem } from "./components/props.tsx";
import { Remove } from "./components/remove.tsx";
import { addButton } from "./components/addButton.tsx";



function App() {
  const [input,setInput]=useState('');
  const[list,setList]=useState<TodoItem[]>([]);
  
  const addToList=(text:string)=>{
    if (text.trim() === '') return; 
    const newTodo: TodoItem={
      id: Date.now(),
      text,
    };
    setList([...list,newTodo]); 
    setInput('');
  }

  const removeTodo=(id:number)=>{
    setList(list.filter(todo =>todo.id !== id)); 
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
          <Remove key={todo.id} todo={todo} remove={removeTodo}//toggleTodo={toggleTodo}? fixar efter save function 
          />
        ))}
      </ul>
      
    </main>
  )
}

export default App
