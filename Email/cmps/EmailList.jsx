import EmailPreview from "./EmailPreview.jsx"

export default class EmailList extends React.Component {


    render() {
        return (
        <div>{this.props.emails.map((email,i)=><EmailPreview email={email} key={i}></EmailPreview>)}</div>
        )
    }


}