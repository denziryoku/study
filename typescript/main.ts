import { Task } from "./task.js";
import { add } from "./utils.js";
import hello from "./hello.js";

const tasks: Task[] = [
    {
        id: 1,
        text: "Gitを勉強する",
        completed: true,
        priority: 3,
        status: "完了"
    },
    {
        id: 2,
        text: "TypeScriptを勉強する",
        completed: false,
        priority: 2,
        status: "作業中"
    }
];

console.log(hello);
console.log(add(10, 20));
console.log(tasks);

