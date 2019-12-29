
import emailService from "../services/emailService.js";
import EmailList from "../cmps/EmailList.jsx"
import Filter from "../cmps/Filter.jsx";
import NavBar from "../cmps/NavBar.jsx";
import Sort from "../cmps/Sort.jsx";


export default class EmailApp extends React.Component {

    state = {
        emails: [],

        filterBy: {
            readingState: 'all',
            title:'',            
            folder: 'inbox'
        },
        // sortBy:{
        //     date:'newToOld'
        // }
        sortBy: 'newToOld'

    }



    componentDidMount() {
        this.loadEmails()
    }


    loadEmails = () => {       
        emailService.getEmailsToRender(this.state.filterBy,this.state.sortBy).then(emails=>this.setState({emails}))
        
    }
    onDelete=(id)=>{
        emailService.deleteEmail(id).then(emails=>this.loadEmails())

    }

    onSetFilter = (filter) => {
        this.setState(prevState=>({filterBy:{...prevState.filterBy,...filter}}),this.loadEmails)
    }

    onChangeMark=(id)=>{
        emailService.changeReadState(id).then(emails => this.loadEmails())
    }

    onFavoriteMark=(id)=>{        
        
        emailService.changeFavoriteState(id).then(emails => this.loadEmails())

    }

    setFolder=(folderName)=>{
        this.onSetFilter({folder:folderName})        
        
    }

    // addActive=()=>{
    //     return 'active'
    // }

    onSetSort=(sort)=>{
        this.setState({sortBy:sort},this.loadEmails)
        // this.setState(prevState=>({sortBy:{...prevState.sortBy,...sort}}),this.loadEmails)

    }


    render() {
        console.log(this.state.emails)
        
        return <div className="emails-main">
            <div className="email-header">
                <div className="email-logo">Mr.Email</div>                
                <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter>
                <Sort onSetSort={this.onSetSort}>Sort</Sort>
            </div>
            

            <NavBar folder={this.state.filterBy.folder} setFolder={this.setFolder} getAllEmails={this.loadEmails}></NavBar>
            <div className="emails-container">
            {(this.state.emails) ? <EmailList folder={this.state.filterBy.folder} onFavoriteMark={this.onFavoriteMark} onChangeMark={this.onChangeMark} onDelete={this.onDelete} updateEmails={this.loadEmails} emails={this.state.emails} changeReadState={this.changeReadState}></EmailList> : "No Emails"}
            </div>

            

        </div>
            
        
    }

}


