export class Model {
    user; 
    items;
    constructor(){
        this.user = "Pavel"; 
        this.items = [
            new TodoItem("Купить цветы", false),
            new TodoItem("Написать программу на Angular", true),
            new TodoItem("Прибраться дома", false),
            new TodoItem("Приготовить еду", false),
        ]
    }
}
export class TodoItem{
    action; 
    done; 
    constructor(action, done){
        this.action = action; 
        this.done = done; 
    }
}