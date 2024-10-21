export type TodoItem={
    id:number;
    text:string;
    isCompleted:boolean;
};

export type Prop = {
    todo: TodoItem;
};

export type PropOLDVERSION = {
    todo: TodoItem;
    toggleTodo: (id:number) => void;
};

