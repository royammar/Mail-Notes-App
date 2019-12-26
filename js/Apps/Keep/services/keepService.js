
import { getRandomID } from "../../../services/utils.js";

export default {
    createNote,
    getNotesTorender,
    DeleteNote,
    toggleTodo,
    editNote
}

var gNotes = [{ id: '124124', type: "NoteText", isPinned: false, info: { txt: "Fullstack Me Baby!" }, style: { backgroundColor: "#00d" } },
{ id: '12412412', type: "NoteImg", isPinned: false, info: { url: "https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } },
{ id: '1211412412', type: "NoteTodos", isPinned: false, info: { label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }] }, style: { backgroundColor: "#00d" } },
{ id: '311233', type: "NoteVideo", isPinned: false, info: { url: "https://www.youtube.com/embed/tgbNymZ7vqY", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } }];


function createNote(info, type) {
    let note = {
        id: getRandomID(),
        type: type,
        isPinned: false,
        info: setInfo(info, type),
        style: { backgroundColor: "#00d" }
    }

    gNotes = [...gNotes, note]
    return Promise.resolve(gNotes)

}

function getNotesTorender() {
    return Promise.resolve(gNotes)
}

function toggleTodo(noteId, todoIdx) {
    let currTodo = findNoteById(noteId)
    let currTodoDoneAt = gNotes[currTodo].info.todos[todoIdx].doneAt
    if (!currTodoDoneAt) gNotes[currTodo].info.todos[todoIdx].doneAt = Date.now()
    else gNotes[currTodo].info.todos[todoIdx].doneAt = null
    return Promise.resolve(true)

}

function editNote(noteId, value, item,toDoIdx) {
    let noteIdxToEdit = findNoteById(noteId)
    if (item==="txt") gNotes[noteIdxToEdit].info[item] = value
    else if (item==="todos")  gNotes[noteIdxToEdit].info[item][toDoIdx].txt=value;
     
    return Promise.resolve(gNotes)
}

function findNoteById(noteId) {

    return gNotes.findIndex(note => note.id === noteId)

}

function setInfo(info, type) {
    let noteInfo = ''
    switch (type) {
        case 'NoteText':
            noteInfo = { txt: info }
            break;
        case 'NoteImg':
            noteInfo = { url: info, title: "new Image" }
            break;
        case 'NoteVideo':
            noteInfo = { url: info, title: "new Video" }
            break;
        case 'NoteTodos':
            noteInfo = {
                label: "New Todo:", todos: getTodosFormat(info)
            }
            break;
        default:
            break;
    }
    return noteInfo
}

function getTodosFormat(info) {
    let todos = []
    let txts = info.split(',')
    txts.map(text => {
        let todo = {
            txt: text,
            doneAt: null

        }
        todos.push(todo)
    })
    return todos
}


function DeleteNote(noteId) {
    gNotes = gNotes.filter((currNote) => currNote.id !== noteId)
    return Promise.resolve(true)

}
