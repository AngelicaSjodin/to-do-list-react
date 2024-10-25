import { TodoItem } from "./todoitem"

export type Prop = {
    todo: TodoItem;
    remove: (id:number)=>void; //kom ihåg void betyder no return value
};

export const Remove:React.FC<Prop>=(props) => {
    
    
    return (
    <li onClick={()=>props.remove(props.todo.id)}>
        {props.todo.text}
    </li>
);
};
