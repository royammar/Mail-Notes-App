export default function NoteImg(props) {
    return (
        <div className="noteImg" >
            <div className="note-label">{props.note.info.title}</div>
            <div>
                <img className="note-img" src={props.note.info.url} height="200" width="270" />
            </div>
        </div>
    )
}

