export default class Filter extends React.Component {

    // changeInput = (ev) => {
    //     const field = ev.target.name;
    //     let value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value

    //     if (ev.target.name === 'priceTo' && ev.target.value === '') value = Infinity
    //     if (ev.target.name === 'priceFrom' && ev.target.value === '') value = ''
    //     this.props.onSetFilter({ [field]: value })

    // }
    handleChange=(ev)=>{
        let field=ev.target.name
        let value=ev.target.value
        this.props.onSetFilter({[field]:value})
        

    }


    render() {
        return <div className="filter-container">
            <input type="text" name="title" placeholder="Search" value={this.props.filterBy.name} onChange={this.handleChange} />
            {/* <input type="text"/> */}
            <select onChange={this.handleChange} name="readingState" id="">
            <option value='all'>All</option>
            <option value='read'>Read</option>
                <option value='unRead'>Unread</option>
            </select>

        </div>
    }
}