export default class NoteVideo extends React.Component {

    getUrlId=()=>{
    let regExp =  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = this.props.note.info.url.match(regExp)
    if (match && match[2].length == 11) {
        console.log('https://www.youtube.com/embed/' + match[2]);
      return 'https://www.youtube.com/embed/' + match[2]
        
        
    }
}
    render(){
    return (
        <div >
            <div className="note-label">{this.props.note.info.title}</div>
            <iframe className="note-img" width="200" height="200" src={this.getUrlId()}>
            </iframe>
        </div>
    )
    }
}


