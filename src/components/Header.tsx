import "./style.css"

const Header = () => {
    return (
        <header>
            <h1>Min sida</h1>
            <small>Byggd i React!</small>
        </header>
    )
}

export default Header

//todo
//export const TodoOLDVERSION:React.FC<Prop>=(props) => {
//return <li
//    onClick={()=>(props.todo.id)}
//    //onClick={()=>props.toggleTodo(props.todo.id)}
//    style={{textDecoration:props.todo.isCompleted?"line-through":"none"}}
//    >
//        {props.todo.text}
//    </li>
//}

//props
//export type PropOLDVERSION = {
//    todo: TodoItem;
//    toggleTodo: (id:number) => void;
//};

//app
//const toggleTodo=(id:number)=>{
//  const newTodos=list.map(todo=>{
//    if(todo.id === id){
//    return{...todo,isCompleted: !todo.isCompleted};
//  }
//  return todo;
//   });
//setList(newTodos);
//  }