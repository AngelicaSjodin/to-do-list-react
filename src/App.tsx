import './App.css';
import {useEffect, useState} from 'react';
import { TodoItem } from "./components/TodoItem.tsx";
import { Remove } from "./components/remove.tsx";
import { InputAndButton } from './components/addButton.tsx';



function App() {
  const[list,setList]=useState<TodoItem[]>(()=> {
    const storage= localStorage.getItem('todos'); 
    return storage ? JSON.parse(storage):[];
  });

  const addToList=(text:string)=>{ 
    const newTodo: TodoItem={
      id: Date.now(),
      text,
    };
    const update= [...list,newTodo];
    setList(update);
    localStorage.setItem('todos',JSON.stringify(update)); 
  };

  

  const removeTodo=(id:number)=>{
    const updateRemove= list.filter(todo=> todo.id !== id);
    setList(updateRemove);
    localStorage.setItem('todos',JSON.stringify(updateRemove));
  };

  useEffect(()=>{//startar när det ändras
    localStorage.setItem('todos',JSON.stringify(list));
  },[list]);

  return (
    <main>
      
      <div className='content'>
        <p>min lista i typescript :D</p>
        <InputAndButton addToList={addToList} />
      
        <ul>
          {list.map(todo=>(
            <Remove key={todo.id} todo={todo} remove={removeTodo}
            />
          ))}
        </ul>
      </div>
      
    </main>
  )
}

export default App
