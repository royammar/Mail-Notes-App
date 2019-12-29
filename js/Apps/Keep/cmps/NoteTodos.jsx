
export default class NoteTodos extends React.Component {

    handleChange = (ev, i) => {

        this.props.onEditNote(this.props.note.id, ev.target.value, ev.target.name, i);
    }


    render() {
        return (
            <div className="todo-container">
                <div  >
                    <input type="text" name="todos-label" className="note-label text-box notes-input"
                        onChange={() => this.handleChange(event)} value={this.props.note.info.title}>
                    </input>
                </div>
                <ul className="todos-list-container" >
                {this.props.note.info.todos.map((todo, i) =>
                    
                        <li key={i} className='clickable-item'>
                            <input type="text" name="todos" className={todo.doneAt ? 'done text-box notes-input' : "text-box notes-input"}
                                onChange={() => this.handleChange(event, i)} value={todo.txt}>
                            </input>
                            <input onClick={() => this.props.onMarkTodoAsDone(this.props.note.id, i)} type="checkbox" name="" value="" />
                        </li>
                    
                )}
                </ul>
            </div>

        )
    }

}

