
export default class NoteMap extends React.Component {




    render() {

        return (
            <iframe width="80%"
                height="300px"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${this.props.note.info.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0">
            </iframe>

        )
    }
}

