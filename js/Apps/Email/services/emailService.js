
import { getRandomID } from "../../../services/utils.js";

export default {
    createMail,
    // creatMails,
    getEmailsToRender,
    getEmailById,
    deleteEmail,
    changeEmailToRead,
    changeReadState,
    changeFavoriteState,
    getFavorites
}

let gMails = [{
    id: '123123',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},

{
    id: '512515',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},

{
    id: '51251125',
    subject: 'hi?',
    body: 'how are you  at!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},

{
    id: '51251121125',
    subject: 'what do you want?',
    body: 'i dont want anything!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},

{
    id: '5121251121125',
    subject: 'where are you gouing?',
    body: 'Paim going yo eat somethinggp!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},

{
    id: '3311223',
    subject: 'Wagap?',
    body: 'Pick up!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},

{
    id: '331211223',
    subject: 'agap?',
    body: 'Pick up!',
    isRead: false,
    isFavorite: false,
    sentAt: 1551133930594
},
]

function createMail(subject, body) {
    let newMail = {
        id: getRandomID(),
        subject: subject,
        body: body,
        isRead: false,
        isFavorite: false,
        sentAt: Date.now()
    }
    gMails = [newMail, ...gMails]
    return Promise.resolve(newMail)
}


function getEmailById(id) {
    const curEmail = gMails.find(email => email.id === id)
    return Promise.resolve(curEmail)
}

function changeEmailToRead(id) {
    let readEmail = gMails.find(email => email.id === id)
       
    readEmail = { ...readEmail }
    if (readEmail.isRead === false) {
        readEmail.isRead = true
    }
    gMails = gMails.map(email => email.id === id ? readEmail : email)
    
    return Promise.resolve(gMails)

}

function changeFavoriteState(id){
    let curEmail = gMails.find(email => email.id === id)
    curEmail = { ...curEmail }
    curEmail.isFavorite = !curEmail.isFavorite
    gMails = gMails.map(email => email.id === id ? curEmail : email)
    
    return Promise.resolve(gMails)

}

function changeReadState(id) {
    let curEmail = gMails.find(email => email.id === id)
    curEmail = { ...curEmail }
    curEmail.isRead = !curEmail.isRead
    gMails = gMails.map(email => email.id === id ? curEmail : email)
    
    return Promise.resolve(gMails)

}

function getFavorites(){    
   let favoriteMails=gMails.filter(mail=>mail.isFavorite)
    return Promise.resolve(favoriteMails)
}

function deleteEmail(id) {
    const mailsAfterDelete = gMails.filter(mail => mail.id !== id)
    gMails = mailsAfterDelete
    console.log(gMails)
    return Promise.resolve(gMails)
}

function getEmailsToRender(filter) {
    console.log(filter)
    let filteredMails
    if (filter.readingState === 'read') {
        filteredMails =  gMails.filter(email => {
            return (email.subject.toLowerCase().includes(filter.title.toLowerCase()) && email.isRead)
        })
    }
    else if (filter.readingState === 'unRead') {
        filteredMails=gMails.filter(email => {
            return (!email.isRead && email.subject.toLowerCase().includes(filter.title.toLowerCase()))
        })
    }   

    else filteredMails=gMails.filter(email => {
        return (email.subject.toLowerCase().includes(filter.title.toLowerCase()))
    })

    if(filter.folder==='starred'){
        return Promise.resolve(filteredMails.filter(email=>email.isFavorite))
    }

    return Promise.resolve(filteredMails)

    
}









