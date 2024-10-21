import { Prop } from "./props.tsx";


export const Todo:React.FC<Prop>=(props) => {

    return <li>
        {props.todo.text}
    </li>
}



export const TodoOLDVERSION:React.FC<Prop>=(props) => {
    return <li
    onClick={()=>(props.todo.id)}
    //onClick={()=>props.toggleTodo(props.todo.id)}
    style={{textDecoration:props.todo.isCompleted?"line-through":"none"}}
    >
        {props.todo.text}
    </li>
}