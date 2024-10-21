import { Prop } from "./props.tsx";


export const oldtodo:React.FC<Prop>=(props) => {

    return <li>
        {props.todo.text}
    </li>
}



