
type TasksPropsType = {
    data: IncomingDataType,
}

type IncomingDataType = {
    title: string,
    tasks: TaskType[],
    students: string[],
}

type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean,
}
export const Tasks = (props: TasksPropsType) => {
    const checkboxToggle = (prop: boolean) => {
        return !prop;
    }

    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map((el, index) => {
                    return (
                        <li key={index}><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>
                    )
                })}

            </ul>
            <ol>
                {props.data.students.map((el, index) => {
                    return (
                        <div key={index}>{el}</div>
                    )
                })}
            </ol>
        </div>
    )
}