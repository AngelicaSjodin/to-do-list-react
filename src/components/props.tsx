export type TodoItem={
    id:number;
    text:string;
};

export type Prop = {
    todo: TodoItem;
    remove: (id:number)=>void; //kom ihåg void betyder no return value
};



