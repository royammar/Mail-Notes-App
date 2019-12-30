
import { getRandomID } from "../../../services/utils.js";

export default {
    createNote,
    getNotesTorender,
    DeleteNote,
    toggleTodo,
    editNote,
    pinNote,
    ChangeColor,
    setUrlNote,
    duplicateNote,

}

var gNotes = [{ id: '124124', type: "NoteText", isPinned: false, info: {title:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." , txt: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." }, style: { backgroundColor: "#FFDC00" } },
{ id: '12412412', type: "NoteImg", isPinned: false, info: { url: "https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg", title: "Note to self" }, style: { backgroundColor: "#0074D9" } },
{ id: '1243212412', type: "NoteImg", isPinned: false, info: { url: "https://hackernoon.com/hn-images/1*_Q8TCuSlMVz2PIglVnKO_A.jpeg", title: "React is (not) fun" }, style: { backgroundColor: "#45B8AC" } },
{ id: '123243212412', type: "NoteImg", isPinned: false, info: { url: "https://media-cdn.tripadvisor.com/media/photo-s/16/85/e0/ac/amazing-interactive-things.jpg", title: "React is (not) fun" }, style: { backgroundColor: "lightblue" } },
{ id: '1211412412', type: "NoteTodos", isPinned: false, info: { title: "Tasks I have to do:", todos: [{ txt: "Learn React", doneAt: null }, { txt: "Finish this sprint", doneAt: null }, { txt: "Dont forget to sleep", doneAt: null }, { txt: "Stop eating cookies", doneAt: null }] }, style: { backgroundColor: "#c80e13" } },
{ id: '311233', type: "NoteVideo", isPinned: false, info: { url: "https://www.youtube.com/watch?v=joq114XAPM8", title: "My Music" }, style: { backgroundColor: "#7FDBFF" } },
{ id: '31123123113', type: "NoteAudio", isPinned: false, info: { url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", title: "My Music" }, style: { backgroundColor: "#7FDBFF" } },
// { id: '311323123113', type: "NoteMap", isPinned: false, info: { lat: 32,lng:35, title: "My Loacation" }, style: { backgroundColor: "#7FDBFF" } },
{ id: '123124666', type: "NoteMap", isPinned: false, info: { location:'New york',title: "My location" }, style: { backgroundColor: "#7FDBFF" } },
{ id: '31111233', type: "NoteVideo", isPinned: false, info: { url: "https://www.youtube.com/watch?v=PLOPygVcaVE&t=4s", title: "10 hours of paint drying" }, style: { backgroundColor: "#7d3cff" } }

];
function createNote(info, type) {
    let note = {
        id: getRandomID(),
        type: type,
        isPinned: false,
        info: setInfo(info, type),
        style: { backgroundColor: "lightblue" }
    }
    gNotes = [...gNotes, note]
    return Promise.resolve(gNotes)

}

function getNotesTorender(filterBy) {
    const notes = (!filterBy) ? [...gNotes] :
        gNotes.filter(note => note.type.includes(filterBy.NoteType) && note.info.title.includes(filterBy.name))
    return Promise.resolve(notes)
}

function toggleTodo(noteId, todoIdx) {
    let currTodo = findNoteById(noteId)
    let currTodoDoneAt = gNotes[currTodo].info.todos[todoIdx].doneAt
    if (!currTodoDoneAt) gNotes[currTodo].info.todos[todoIdx].doneAt = Date.now()
    else gNotes[currTodo].info.todos[todoIdx].doneAt = null
    return Promise.resolve(true)

}

function editNote(noteId, value, item, toDoIdx) {
    let noteIdxToEdit = findNoteById(noteId)
    if (item === "txt") gNotes[noteIdxToEdit].info[item] = value
    else if (item === "todos") gNotes[noteIdxToEdit].info[item][toDoIdx].txt = value;
    else if (item === "todos-label") gNotes[noteIdxToEdit].info.title = value

    return Promise.resolve(gNotes)
}

function findNoteById(noteId) {

    return gNotes.findIndex(note => note.id === noteId)

}

function pinNote(noteId) {
    gNotes[findNoteById(noteId)].isPinned = !gNotes[findNoteById(noteId)].isPinned
    let currNote = gNotes[findNoteById(noteId)]
    let notes = [...gNotes]
    gNotes = notes.filter(note => note.id !== noteId)
    gNotes = [currNote, ...gNotes]
    return Promise.resolve(gNotes)
}

function ChangeColor(noteId, color) {

    gNotes[findNoteById(noteId)].style = { 'backgroundColor': color }

    return Promise.resolve(gNotes)
}





function setInfo(info, type) {
    let noteInfo = ''
    switch (type) {
        case 'NoteText':
            noteInfo = { title: info,txt: info }
            break;
        case 'NoteImg':
            noteInfo = { url: info, title: "New Image" }
            break;
        case 'NoteVideo':
            noteInfo = { url: info, title: "New Video" }
            break;
        case 'NoteAudio':
            noteInfo = { url: info, title: "New Audio" }
            break;
        case 'NoteTodos':
            noteInfo = {
                title: "New Todo:", todos: getTodosFormat(info)
            }
            break;
        case 'NoteMap':
            
            noteInfo = {
                   title:"My Location",location: info
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

function setUrlNote(noteId, url) {

    gNotes[findNoteById(noteId)].info.url = url
    console.log(gNotes[findNoteById(noteId)].info.url);

    return Promise.resolve(gNotes)

}

function duplicateNote(noteId) {

    let currNote = gNotes[findNoteById(noteId)]
    let newNote = {
        id: getRandomID(),
        type: currNote.type,
        isPinned: false,
        info: (currNote.type === 'NoteTodos') ? duplcateInfo(currNote.info) : { ...currNote.info },
        style: { backgroundColor: currNote.style.backgroundColor }
    }
    gNotes = [...gNotes, newNote]
    return Promise.resolve(gNotes)
}


function duplcateInfo(info) {
    let newNoteInfo = {
        title: info.title,
        todos: []
    }
    info.todos.forEach(item => {
        newNoteInfo.todos.push({ ...item })
    })
    return newNoteInfo
}

 
