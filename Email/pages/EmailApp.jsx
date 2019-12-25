
import emailService from "../services/emailService.js";

export default class EmailApp extends React.Component {


    a=()=>{
     console.log(emailService.createMail('asfasf','asfasfasfasf'));
        
    }

    

    render() {
    return <div>{this.a()}</div>
        //filter
        // <EmailList></EmailList>

    }

}


