export default function NoteVideo(props) {
    return (
        <div >
            <div className="note-label">{props.note.info.title}</div>
            <iframe className="note-img" width="200" height="200" src={props.note.info.url}>
            </iframe>
        </div>
    )
}


