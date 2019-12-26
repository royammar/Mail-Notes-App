import emailService from "../services/emailService.js";

export default class NewMail extends React.Component {
    state = {
        email:null,
        subject: '',
        body: '',
        
    }

    componentDidMount() {  
       if (this.props.match.params.id){
          let id=this.props.match.params.id
           emailService.getEmailById(id)
           .then(email=>this.setState({email:email,subject:'re:'+email.subject,body:email.body}))
       }  
        

 
    }

    componentWillUnmount(){
        console.log('died')
    }
    

onSave = () => {
    emailService.createMail(this.state.subject, this.state.body).then(this.props.history.push('/emails'))
}
inputChange = (ev) => {
    let fieldName = ev.target.name
    this.setState({ [fieldName]: ev.target.value })
}

render() {
    return <div>
        <input type="text" placeholder="subject" name="subject"
            onChange={this.inputChange} value={this.state.subject}></input>
        <input type="text" placeholder="Enter your mail here" name="body"
            onChange={this.inputChange} value={this.state.body}></input>
        <button onClick={this.onSave}>Send</button>
        
    </div>
}
}