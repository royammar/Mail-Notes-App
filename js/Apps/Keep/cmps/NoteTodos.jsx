
export default class NoteTodos extends React.Component {

    handleChange = (ev,i) => {

        this.props.onEditNote(this.props.note.id, ev.target.value, ev.target.name,i);
    }


    render() {
        return (

            <div >{this.props.note.info.label}
                {this.props.note.info.todos.map((todo, i) =>
                    <ul key={i} className='clickable-item'>
                        <li>
                            <input type="text" name="todos" className={todo.doneAt ? 'done text-box' : "text-box"}
                                onChange={() => this.handleChange(event,i)} value={todo.txt}>
                            </input>
                            <input onClick={() => this.props.onMarkTodoAsDone(this.props.note.id, i)} type="checkbox" name="" value="" />
                        </li>
                    </ul>
                )}
            </div>

        )
    }

}

{/* <li  className= {todo.doneAt && 'done' } onClick={()=>props.onMarkTodoAsDone(props.note.id,i) }>{todo.txt}</li> */ }