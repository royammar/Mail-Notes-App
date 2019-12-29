export default class NoteUrlEdit extends React.Component {
    state = {
        name: '',
        URL: ''
    }


    handleUrlEdit = () => {
        var urlEl = document.getElementById(`urlInput${+this.props.note.id}`);
        (urlEl.style.display === "none")? urlEl.style.display = "block" : urlEl.style.display = "none"
    }

    handleUrlUpload = () => {
            this.props.handleUrlChange(this.props.note.id , this.state.URL)
            this.setState({name:'' , URL:''})
            var urlEl = document.getElementById(`urlInput${+this.props.note.id}`);
            urlEl.style.display = "none";
    }

    inputChange =(ev)=>{
        let fieldName = ev.target.name
        this.setState({[fieldName] : ev.target.value})
    }




    render() {
        return (
            <React.Fragment>
                <button value="Yes" onClick={this.handleUrlEdit}><img  className="note-controller-img" src="../../../../img/icons8-edit-24.png" /></button>
                <div id={'urlInput' + this.props.note.id} style={{ display: 'none' }}>
                      <input type="text" placeholder="Enter a URL" name="URL"  
                    onChange={this.inputChange} value={this.state.URL}></input>
                    <button  onClick={this.handleUrlUpload}><img  className="note-controller-img" src="../../../../img/icons8-upload-96.png" /></button>
                </div>
            </React.Fragment>

        )
    }


}


// function ShowHideDiv(btnPassport) {
//     var dvPassport = document.getElementById("dvPassport");
//     dvPassport.style.display = btnPassport.value == "Yes" ? "block" : "none";
// }
// </script >
//     <span>Do you have Passport?</span>
//     <input type="button" value="Yes" onclick="ShowHideDiv(this)" />
//     <input type="button" value="No" onclick="ShowHideDiv(this)" />
//     <hr />
//     <div id="dvPassport" style="display: none">
//         Passport Number:
// <input type="text" id="txtPassportNumber" />
//     </div>