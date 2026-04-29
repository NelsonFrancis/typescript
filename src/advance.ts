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


// enum
enum Direction{
    Up = 7,
    Down,
    Left,
    Right
}
let dir: Direction = Direction.Left;

enum apiStatus{
    Success = "success",
    Error = "error",
    Loading = "loading"
}
let apistatus: apiStatus = apiStatus.Loading;

enum httpStatus{
    OK = 200,
    BadRequest = 400,
    NotFound = 404
}
function getHttpStatus(status: httpStatus): void{
    if(status === httpStatus.OK){
        console.log("Request successful");
    }
}


// promises
function fetchData(id: number): Promise<{id: number, msg: string}>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id, msg: "Data fetched successfully"});
        }, 1000);
    });
}

async function getData(): Promise<void>{
    try{
        const data = await fetchData(1);
        console.log(data);
    }catch(error){
        console.error("Error fetching data", error);
    }
}