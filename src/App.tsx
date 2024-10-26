import './App.css';
import {useState} from 'react';
import { TodoItem } from "./components/todoitem.tsx";
import { Remove } from "./components/remove.tsx";
import { InputAndButton } from './components/addButton.tsx';



function App() {
  const[list,setList]=useState<TodoItem[]>([]);
    const storage= localStorage.getItem('todos');



  const addToList=(text:string)=>{ 
    const newTodo: TodoItem={
      id: Date.now(),
      text,
    };
    setList([...list,newTodo]); 
  }

  const removeTodo=(id:number)=>{
    setList(list.filter(todo =>todo.id !== id)); 
  }

  return (
    <main>
      
      <div className='content'>
        <p>min lista i typescript :D</p>
        <InputAndButton addToList={addToList} />
      
        <ul>
          {list.map(todo=>(
            <Remove key={todo.id} todo={todo} remove={removeTodo}//toggleTodo={toggleTodo}? fixar efter save function 
            />
          ))}
        </ul>
      </div>
      
    </main>
  )
}

export default App
