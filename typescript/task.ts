type Status = "未着手" | "作業中" | "レビュー中" | "完了";
type Priority = 1 | 2 | 3;

export interface Task {
    readonly id: number;
    text: string;
    completed: boolean;
    priority: Priority;
    status: Status;
    assignee?: string;
}