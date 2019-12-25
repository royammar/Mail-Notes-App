export default class BookPreview extends React.Component {

    state = {
        curr: ''
    }
    componentDidMount() {
        this.getCurrency()
    }

    getCurrency = () => {
        switch (this.props.book.listPrice.currencyCode) {
            case 'EUR':
                this.setState({ curr: '€' })
                break;
            case 'USD':
                this.setState({ curr: '$' })
                break;
            case 'ILS':
                this.setState({ curr: '₪' })
                break;
            default:
                break;
        }
    }

    render() {
        const { props } = this;
        return  <span onClick={()=>props.onSelectBook(props.book)}>
            <h2>{props.book.title}</h2>
            <h3>{props.book.listPrice.amount}{this.state.curr}</h3>
            <img src={props.book.thumbnail} height="400" />
        </span>
       
    }
}