
import emailService from "../services/emailService.js";
import EmailList from "../cmps/EmailList.jsx"
import Filter from "../cmps/Filter.jsx";
import NavBar from "../cmps/NavBar.jsx";
export default class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            readingState: 'all',
            title:'',            
            folder: 'general'
        },

    }



    componentDidMount() {
        
        this.loadEmails()
    }


    loadEmails = () => {       
        emailService.getEmailsToRender(this.state.filterBy).then(emails=>this.setState({emails}))
        
    }
    onDelete=(id)=>{
        emailService.deleteEmail(id).then(res=>this.loadEmails())

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


    render() {
        
        return <div className="emails-main">
            <NavBar setFolder={this.setFolder} getAllEmails={this.loadEmails}></NavBar>
            <div className="emais-list">
            <div ><Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter></div>
            {(this.state.emails) ? <EmailList onFavoriteMark={this.onFavoriteMark} onChangeMark={this.onChangeMark} onDelete={this.onDelete} updateEmails={this.loadEmails} emails={this.state.emails} changeReadState={this.changeReadState}></EmailList> : "No Emails"}
            </div>

        </div>
            
        
    }

}


