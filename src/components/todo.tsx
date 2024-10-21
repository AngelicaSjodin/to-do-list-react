import { Prop } from "./props.tsx";


export const Todo:React.FC<Prop>=(props) => {
    
    return <li
    onClick={()=>props.toggleTodo(props.todo.id)}
    style={{textDecoration:props.todo.isCompleted?"line-through":"none"}}
    >
        {props.todo.text}
    </li>
}