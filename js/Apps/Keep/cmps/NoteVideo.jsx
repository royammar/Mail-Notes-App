export default function NoteVideo(props) {
    return (
    <iframe width="200" height="200" contentEditable="true" src={props.note.info.url }>
    </iframe>
)
}


{/* <video width="320" height="240" controls >
        <source src={props.note.info.url} type="video/mp4">
        </source>
    </video> */}