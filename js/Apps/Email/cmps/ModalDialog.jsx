// import eventBusService from "../../../eventBusService.js"

export default class ModalDialog extends React.Component {
    eventKiller = null;

    state = { display: false, book: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (details) => {
          console.log(details)  })
    }
    // this.setState(prevState => ({ display: !prevState.display, book }))

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        // case of swal - return null
        if (!this.state.display) return null;
        return <div>Sucsses </div >
    }
} 