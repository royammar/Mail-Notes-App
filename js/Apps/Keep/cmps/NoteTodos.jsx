export default function NoteTodos(props) {
    return (
        <div>{props.note.info.label}
            {props.note.info.todos.map((todo, i) =>
                <ul key={i}>
                    <li>{todo.txt}</li>
                    <li>{todo.donAt}</li>
                </ul>
            )}
        </div>

    )
}

