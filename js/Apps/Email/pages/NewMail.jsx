import emailService from "../services/emailService.js";
// import NewMail from "../pages/"
export default class NewMail extends React.Component {
    state={
        subject:'',
        body:''
    }

    onSave = ()=>{
        emailService.createMail(this.state.subject,this.state.body).then(this.props.history.push('/emails'))
    }
    inputChange =(ev)=>{
        let fieldName = ev.target.name
        this.setState({[fieldName] : ev.target.value})
    }

    render() {
        return <div>
            <input type="text" placeholder="subject" name="subject" 
                    onChange={this.inputChange} value={this.state.subject}></input>
            <input type="text" placeholder="Enter your mail here" name="body"  
                    onChange={this.inputChange} value={this.state.body}></input>
            <button onClick={this.onSave}>Save</button>
        </div>
    }
}