
import {getRandomID} from "../services/utils.js";

export default {
    createMail,
    // creatMails,
    getEmailsToRender, 
    getEmailById
}

let gMails =[{
    id:'123123',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id:'512515',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id:'51251125',
    subject: 'asdas?',
    body: 'asd!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id:'51251121125',
    subject: 'asdasd?',
    body: 'Pasdp!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id:'5121251121125',
    subject: 'geqg?',
    body: 'Pagp!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id:'3311223',
    subject: 'Wagap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{
    id:'331211223',
    subject: 'agap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},
]


function createMail(subject,body) {
    let newMail={
        id:getRandomID(),
        subject:subject,
        body : body,
        isread :false,
        sentAt : Date.now()
    }
    gMails=[...gMails,newMail]
    return Promise.resolve(newMail)
}


function getEmailById(id){
   const curEmail= gMails.find(email=>email.id===id)
   return Promise.resolve(curEmail)
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


