export default function NoteImg(props) {
    return (<div className="noteImg" style={props.note.style}>
        <span>`${props.note.tite}`</span>
        <img src={props.note.info.url} height="200"/>
    </div>

    )
}

