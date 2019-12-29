
import { getRandomID } from "../../../services/utils.js";
import storageSevice from "./storageSevice.js";

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

let gMails = storageSevice.load('emails') || createMails()

function createMail(subject, body) {
    let newMail = {
        id: getRandomID(),
        subject: subject,
        body: body,
        isRead: false,
        isSent: true,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    }
    gMails = [newMail, ...gMails]
    storageSevice.store('emails',gMails)
    return Promise.resolve(newMail)
}

function createMails(){
    const mails=[{
        id: '123123',
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },
    
    {
        id: '512515',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    },
    
    {
        id: '51251125',
        subject: 'hi?',
        body: 'how are you  at!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    },
    
    {
        id: '51251121125',
        subject: 'what do you want?',
        body: 'i dont want anything!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    },
    
    {
        id: '5121251121125',
        subject: 'where are you gouing?',
        body: 'Paim going yo eat somethinggp!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    },
    
    {
        id: '3311223',
        subject: 'Wagap?',
        body: 'Pick up!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    },
    
    {
        id: '331211223',
        subject: 'agap?',
        body: 'Pick up!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()
    },
    ]
    storageSevice.store('emails',mails)
    return mails
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
    storageSevice.store('emails',gMails)

    return Promise.resolve(gMails)

}

function changeFavoriteState(id) {
    let curEmail = gMails.find(email => email.id === id)
    curEmail = { ...curEmail }
    curEmail.isFavorite = !curEmail.isFavorite
    gMails = gMails.map(email => email.id === id ? curEmail : email)
    storageSevice.store('emails',gMails)
    return Promise.resolve(gMails)

}

function changeReadState(id) {
    let curEmail = gMails.find(email => email.id === id)
    curEmail = { ...curEmail }
    curEmail.isRead = !curEmail.isRead
    gMails = gMails.map(email => email.id === id ? curEmail : email)
    storageSevice.store('emails',gMails)
    return Promise.resolve(gMails)

}

function getFavorites() {
    let favoriteMails = gMails.filter(mail => mail.isFavorite)
    return Promise.resolve(favoriteMails)
}

function deleteEmail(id, folder) {
    // let mailsAfterDelete;
    const curMailidx = gMails.findIndex(mail => mail.id === id)
    gMails[curMailidx].isDeleted = true
    gMails = [...gMails]
    storageSevice.store('emails',gMails)
    return Promise.resolve(gMails)
    // if (folder==='sent') {
    //     gMails[curMailidx].isSent=false
    //     mailsAfterDelete = gMails.filter(mail => mail.id !== id)
    //     gMails=mailsAfterDelete


    // }
    // else {
    //     mailsAfterDelete = gMails.filter(mail => mail.id !== id)
    //     gMails=mailsAfterDelete

    // }

    // return Promise.resolve(gMails)
}

function getEmailsToRender(filter, sort) {
    // console.log(sort)

    let filteredMails
    if (filter.readingState === 'read') {
        filteredMails = gMails.filter(email => {
            return (email.subject.toLowerCase().includes(filter.title.toLowerCase()) && email.isRead)
        })
    }
    else if (filter.readingState === 'unRead') {
        filteredMails = gMails.filter(email => {
            return (email.subject.toLowerCase().includes(filter.title.toLowerCase()) && !email.isRead)
        })
    }

    else filteredMails = gMails.filter(email => {
        return (email.subject.toLowerCase().includes(filter.title.toLowerCase()))
    })

    if (filter.folder === 'starred') {
        filteredMails = (filteredMails.filter(email => email.isFavorite && !email.isDeleted))
    }

    else if (filter.folder === 'sent') {
        filteredMails = (filteredMails.filter(email => email.isSent && !email.isDeleted))
    }

    else if (filter.folder === 'deleted') {
        filteredMails = (filteredMails.filter(email => email.isDeleted))
    }
    else filteredMails = filteredMails.filter(email => !email.isDeleted)
    filteredMails = sortEmails(filteredMails, sort)

    return Promise.resolve(filteredMails.map(email => email))


}

function sortEmails(emails, sort) {
    console.log(sort)
    if (sort === 'oldToNew') {
        emails = emails.sort((email1, email2) => {
            return email1.sentAt - email2.sentAt
        })

    }
    else if (sort === 'newToOld') {
        emails = emails.sort((email1, email2) => {
            return email2.sentAt - email1.sentAt
        })
    }
    else if (sort === 'alphaAsc') {
        emails = emails.sort((email1, email2) => {
            return (email1.subject.toLowerCase() > email2.subject.toLowerCase()) ? 1 : -1
        })
    }
    else {
        emails = emails.sort((email1, email2) => {
           return (email2.subject.toLowerCase() > email1.subject.toLowerCase()) ? 1 : -1
        })
    }
    return emails
}









