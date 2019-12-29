const { Link } = ReactRouterDOM
export default class Sort extends React.Component {



    handleSortChange = (ev) => {
        // let field = ev.target.name
        let value = ev.target.value
        // this.props.onSetSort({ [field]: value })
        this.props.onSetSort(value)

    }


    render() {
        return <div className="sort-container">

            <select onChange={this.handleSortChange} name="sortBy" id="">
                <option value='newToOld'>Newest To Oldest</option>
                <option value='oldToNew'>Oldest To Newest</option>
                <option value='alphaAsc'>A-Z</option>
                <option value='alphaDes'>Z-A</option>

            </select>

        </div>
    }
}