import BookService from "../services/bookService.js";

export default class ReviewAdd extends React.Component {


    state = {
        book: null,
        review: {
            id:'',
            text: '',
            reader: '',
            rating: '',
            ReadAt: Date.now(),
        }
    }

    handleReviewAdd = (ev) => {
        ev.preventDefault()
        this.props.onAddReview(this.state.review)

    }


    handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value

        this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))
            var checkValue = document.querySelectorAll(".check");
            var checkStar = document.querySelectorAll("label");
            var checkSmiley = document.querySelectorAll("i");
            var checkCount = 0;
           
            
            for(var i=0; i<checkValue.length; i++){
               
                
                if(checkValue[i].htmlFor===event.target.value){
                   
                    checkCount = i+1;
                }
            }
            for(var j=0; j<checkCount; j++){
                console.log('as');
                checkValue[j].checked = true;
                checkStar[j].className = "rated";
                checkSmiley[j].style.display = "none";
            }
            for(var k=checkCount; k<checkValue.length; k++){
           
                checkValue[k].checked = false;
                checkStar[k].className = "check"
                checkSmiley[k].style.display = "none";	
                
            }
            if(checkCount == 1){
           
                
                document.querySelectorAll("i")[0].style.display = "block";
            }
            if(checkCount == 2){
             
                document.querySelectorAll("i")[1].style.display = "block";
            }
            if(checkCount == 3){
          
                document.querySelectorAll("i")[2].style.display = "block";
            }
            if(checkCount == 4){

                document.querySelectorAll("i")[3].style.display = "block";
            }
            if(checkCount == 5){
    
                document.querySelectorAll("i")[4].style.display = "block";
            }
        }
    

    render() {

        return <div><form action="">
            <input onChange={this.handleChange} type="text" name="reader" id="" placeholder="Book Reader" />
            <input onChange={this.handleChange} type="text" name="text" id="" placeholder="Enter your review" />
            <input onChange={this.handleChange} type="date" name="ReadAt" placeholder={Date.now()} />
            <button onClick={this.handleReviewAdd}>Submit</button>
            <div className="smileybox">
                <label htmlFor='1' className="check"><input type="checkbox" id='1' onChange={this.handleChange} value="1" /><i className="em em-weary"></i></label>
                <label  htmlFor='2' className="check"><input type="checkbox" id='2' onChange={this.handleChange}  value="2"  /><i className="em em-worried"></i></label>
                <label  htmlFor='3' className="check"><input type="checkbox" id='3' onChange={this.handleChange}  value="3" /><i className="em em-blush"></i></label>
                <label  htmlFor='4' className="check"><input type="checkbox" id='4' onChange={this.handleChange}  value="4" /><i className="em em-smiley"></i></label>
                <label  htmlFor='5' className="check"><input type="checkbox" id='5' onChange={this.handleChange}  value="5" /><i className="em em-sunglasses"></i></label>
            </div>
        </form>
        </div>
    }

}