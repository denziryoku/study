/*
type Status = "未着手" | "作業中" | "レビュー中" | "完了";
type Priority = 1 | 2 | 3;

interface Task {
    readonly id: number;
    text: string;
    completed: boolean;
    priority: Priority;
    status: Status;
    assignee?: string;
}

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

function getFirst<T>(items: T[]): T {
    return items[0];
}

const firstTask = getFirst(tasks);

console.log(firstTask.text);



function getCompletedTasks<T extends { completed: boolean }>(tasks: T[]): T[] {
    return tasks.filter(function(task) {
        return task.completed;
    });
}

const tmp = getCompletedTasks(tasks);

console.log(tmp);

console.log(tasks[0]);
console.log(tasks[0].assignee);

type TaskKey = keyof Task;
let key: TaskKey;

key= "text";
key= "priority";

type TaskUpdate = Partial<Task>;

const update: TaskUpdate = {
    text: "TypeScriptを勉強する"
};

console.log(update);


function showValue(value: string | number) {
    if (typeof value === "string") {
        console.log("文字列：" + value);
    } else {
        console.log("数字：" + value);
    }
}

showValue(123);
showValue("こんにちは");
*/

export default function hello() {
    console.log("Hello!");
}