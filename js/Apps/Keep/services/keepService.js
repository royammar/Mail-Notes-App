
import {getRandomID} from "../../../services/utils.js";

export default {
    createNote,
    getNotesTorender
}

var gNotes = [{id :'124124', type: "NoteText", isPinned: false, info: { txt: "Fullstack Me Baby!" } },
            { id :'12412412',type: "NoteImg",isPinned: false, info: { url: "https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } },
            { id :'1211412412',type: "NoteTodos",isPinned: false, info: { label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }] } }];
            
            
function createNote (type,info) {
let note={
    id:getRandomID(),
    type:type,
    isPinned:false,
    info:info,
    }

   return gNotes=[...gNotes,note]

}

function getNotesTorender() {
 return Promise.resolve(gNotes)
}
