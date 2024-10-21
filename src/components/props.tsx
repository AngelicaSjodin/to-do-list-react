export type TodoItem={
    id:number;
    text:string;
    isCompleted:boolean;
};

export type Prop = {
    todo: TodoItem;
    toggleTodo: (id:number) => void;
};