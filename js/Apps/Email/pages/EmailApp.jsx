
import emailService from "../services/emailService.js";
import EmailList from "../cmps/EmailList.jsx"
import Filter from "../cmps/Filter.jsx";
export default class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            readingState: 'all'
        }
    }

    componentDidMount() {
        this.loadEmails()
    }


    loadEmails = () => {
        console.log(this.state.filterBy)
        emailService.getEmailsToRender(this.state.filterBy).then(emails=>this.setState({emails}))

        
    }

    onSetFilter = (filter) => {
        this.setState(prevState=>({filterBy:{...prevState.filterBy,...filter}}),this.loadEmails)
    }

    render() {
        return (<div>
            <div><Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter></div>
            {(this.state.emails) ? <EmailList updateEmails={this.loadEmails} emails={this.state.emails} changeReadState={this.changeReadState}></EmailList> : "No Emails"}

        </div>
            //filter
        )
    }

}


