export enum TodoStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETE = 'COMPLETE',
}

export interface ITodoStep {
    id: string,
    title: string,
    details: string
}

export interface ITodo {
    id: string,
    title: string,
    goal: string,
    steps: ITodoStep[],
    status: TodoStatus
}
