export default function NoteAudio(props) {
    return (
        <audio
        controls
        src={props.note.info.url}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    )
}
