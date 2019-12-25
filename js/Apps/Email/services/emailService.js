
import {getRandomID} from "../../../services/utils.js";

export default {
    createMail,
    // creatMails,
    getEmailsToRender,
    getEmailById,
    deleteEmail,
    changeEmailToRead,
    changeReadState
}

let gMails = [{
    id: '123123',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id: '512515',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id: '51251125',
    subject: 'hi?',
    body: 'how are you  at!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id: '51251121125',
    subject: 'what do you want?',
    body: 'i dont want anything!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id: '5121251121125',
    subject: 'where are you gouing?',
    body: 'Paim going yo eat somethinggp!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id: '3311223',
    subject: 'Wagap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id: '331211223',
    subject: 'agap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},
]

function createMail(subject, body) {
    let newMail = {
        id: getRandomID(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: Date.now()
    }
    gMails = [newMail,...gMails]
    return Promise.resolve(newMail)
}


function getEmailById(id) {
    const curEmail = gMails.find(email => email.id === id)
    return Promise.resolve(curEmail)
}

function changeEmailToRead(id) {
    let readEmail = gMails.find(email => email.id === id)
    // console.log(readEmail)   
    readEmail = { ...readEmail }
    if (readEmail.isRead === false) {
        readEmail.isRead = true
    }
    gMails = gMails.map(email => email.id === id ? readEmail : email)
    console.log(gMails)
    return Promise.resolve(gMails)

}

function changeReadState(id) {
    let curEmail = gMails.find(email => email.id === id)
    curEmail = { ...curEmail }
    curEmail.isRead=!curEmail.isRead
    gMails = gMails.map(email => email.id === id ? curEmail : email)
    console.log(gMails)
    // return Promise.resolve(gMails)

}

function deleteEmail(id) {
    const mailsAfterDelete = gMails.filter(mail => mail.id !== id)
    gMails = mailsAfterDelete
    console.log(gMails)
    return Promise.resolve(gMails)
}



// function creatMails () {
//     gMails.push(createMail('asfasfasf','asfasfasfasfasfasfsasfasfasf'))
//     gMails.push(createMail('asfasfasfasfasf1213132','sdfgdfgdsffgdf'))
//     gMails.push(createMail('kjasdvlkuadbvkluadbva','asfasfasfafasf'))
//     gMails.push(createMail('work','what about the work'))
//     gMails.push(createMail('play','lets play'))
//     gMails.push(createMail('go','go to hell'))
//     gMails.push(createMail('hi','asdasdasd'))
//     gMails.push(createMail('asdasdwe','asdasdhhhrr'))
//     gMails.push(createMail('aewfahh','hboiskjv'))
//     gMails.push(createMail('fdasf','asddghea'))
//     console.log(gMails);

// }

function getEmailsToRender() {
    return gMails
}


