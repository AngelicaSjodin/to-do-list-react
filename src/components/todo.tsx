import { Prop } from "./props.tsx";


export const Todo:React.FC<Prop>=(props) => {

    return <li>
        {props.todo.text}
    </li>
}



