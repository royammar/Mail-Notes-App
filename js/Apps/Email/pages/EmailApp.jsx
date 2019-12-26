
import emailService from "../services/emailService.js";
import EmailList from "../cmps/EmailList.jsx"
export default class EmailApp extends React.Component {

    state={
        emails:[]
    }
    
    componentDidMount (){        
        this.loadEmails()
    }


    loadEmails=()=>{
        this.setState({emails:emailService.getEmailsToRender()})
    }



    render() {
    return ( (this.state.emails) ? <EmailList updateEmails={this.loadEmails} emails={this.state.emails} changeReadState={this.changeReadState}></EmailList> : "No Emails"
        //filter
     )
    }

}


