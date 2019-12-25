
import emailService from "../services/emailService.js";
import EmailList from "../cmps/EmailList.jsx"
export default class EmailApp extends React.Component {

    state={
        books:[]
    }
    
    componentDidMount (){
        this.loadEmails()
    }


    loadEmails=()=>{
        this.setState({books:emailService.getEmailsToRender()})
    }



    render() {
    return ( (this.state.books) ?  <EmailList emails={this.state.books}></EmailList> : "No Emails"
        //filter
     )
    }

}


