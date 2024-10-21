import { Prop } from "./props"


export const Remove:React.FC<Prop>=(props) => {

    return (
    <li onClick={()=>props.remove(props.todo.id)}>
        {props.todo.text}
    </li>
);
};