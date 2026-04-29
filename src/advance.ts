interface Todo{
    id: number;
    title?: string;
    completed: boolean;
}

// make all properties optional
type PartialTodo = Partial<Todo>;
let todo1: PartialTodo = {
    title: "Learn TypeScript"
};

// make all properties required
type RequiredTodo = Required<PartialTodo>;
let todo2: RequiredTodo = {
    id: 1,
    title: "Learn TypeScript",
    completed: false
};

// make all properties readonly
type ReadonlyTodo = Readonly<Todo>;
let todo3: ReadonlyTodo = {
    id: 2,
    title: "Learn TypeScript",
    completed: false
};
// todo3.completed = true; // Cannot assign to 'completed' because it is a read-only property

// pick two properties from Todo
type TodoPreview = Pick<Todo, "id" | "title">;
let todo4: TodoPreview = {
    id: 3,
    title: "Learn TypeScript"
};

// omit a property from Todo
type TodoWithoutId = Omit<Todo, "id">;
let todo5: TodoWithoutId = {
    title: "Learn TypeScript",
    completed: false
};

type PageInfo = {
    title: string;
    url: string;
}
type pages = "home" | "about" | "contact";
type Page = Record<pages, PageInfo>;
let website: Page = {
    home: { title: "Home", url: "/home" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact" }
};


// returntype of function
function callApi(){
    return{
        status: "success",
        id: 1,
    }
}
type funcType = ReturnType<typeof callApi>;