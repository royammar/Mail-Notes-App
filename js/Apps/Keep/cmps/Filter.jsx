export default class Filter extends React.Component{
    state = {
        filterBy: {
            name: '',
            numOfLegs: 4
        }
    }
    changeInput =(ev)=>{
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value ;
        this.setState(prevState=>({filterBy: {...prevState.filterBy , [field] : value}}))
        ///{filterBy:  {name:'' , numOfLegs:4 , name: 'e}}
    }

    onFilterClick = ()=>{
        this.props.onFilter(this.state.filterBy)
    }
    render() {
        return <div>
            <input type="text" placeholder="name" value={this.state.filterBy.name}
                onChange={this.changeInput} name="name"></input>
            <input type="number" placeholder="num Of Legs" 
                value={this.state.filterBy.numOfLegs} name="numOfLegs"
                onChange={this.changeInput}></input>

            <button onClick={this.onFilterClick}>Filter</button>

        </div>
    }
}