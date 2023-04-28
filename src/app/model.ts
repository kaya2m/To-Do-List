export class Model{
    user;
    item;

    /**
     *
     */
    constructor() {
        this.user="kaya"
        this.item=[
            new TodoItem("Spor",false),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Kitap Okumak",false),
            new TodoItem("Sinema",false)
         
        ];
        
    }
}
export class TodoItem{
     description;
    action;

   
    constructor(description: string,action: boolean) {
        this.description=description;
        this.action=action;
    }
}