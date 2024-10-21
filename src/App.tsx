
import Header from "./components/Header.tsx";
import Text from "./components/Text.tsx";
import List from "./components/List.tsx";
import { Todo } from "./components/todo.tsx";
import { TodoItem } from "./components/props.tsx";
import {useState} from 'react';
import './App.css';


function App() {
  const [input,setInput]=useState('');
  const[list,setList]=useState<TodoItem[]>([]);
  
  const addToList=(text:string)=>{
    const newTodo: TodoItem={
      id: Date.now(),
      text,
    };
    setList([...list,newTodo]);
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
          <Todo key={todo.id} todo={todo} //toggleTodo={toggleTodo}
          />
        ))}
      </ul>
      
    </main>
  )
}

export default App
