import mapDynamicComponents from "../services/mapDynamicComponentes.js"

export default class NotePreivew extends React.Component {


    componentDidMount() {

    }


    getComponent() {


        return mapDynamicComponents[this.props.note.type]
    }


    render() {
        const Cmp = this.getComponent();


        return (
            <React.Fragment>
                <div className='note'>
                    <h3>{this.props.note.id}</h3>
                    <Cmp note={this.props.note}></Cmp>
                </div>
            </React.Fragment>
        )

    }
}