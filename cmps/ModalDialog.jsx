import eventBusService from "../services/eventBusService.js";

export default class ModalDialog extends React.Component {
    eventKiller = null;

    state = { display: false, book: null }

    componentDidMount() {


        this.eventKiller = eventBusService.on('toggleModal', (book) => {
            this.setState(prevState => ({ display: !prevState.display, book })), Swal.fire({
                html:
                    'Sucsses!<b> Check it out</b>,' +
                    `<a href="/#/books/${this.state.book.id}">${this.state.book.title}</a>`, icon: 'success',
            })
        })
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        // case of swal - return null
        if (!this.state.display) return null;
        return <div>Sucsses </div >
    }
} 