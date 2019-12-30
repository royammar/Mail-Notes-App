
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
        id: getRandomID(),
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 1000000
    },
    {
        id: getRandomID(),
        subject: 'Reagrding our last conversation',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 20000000
    },
    {
        id: getRandomID(),
        subject: 'Reagrding our last conversation',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 3567893
    },
    {
        id: getRandomID(),
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },{
        id: getRandomID(),
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },{
        id: getRandomID(),
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },
    {
        id: getRandomID(),
        subject: 'Hi yael',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000
    },
    {
        id: getRandomID(),
        subject: 'lorem ipsum?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },
    {
        id: getRandomID(),
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },
    {
        id: getRandomID(),
        subject: 'Thank you so much',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },
    {
        id: getRandomID(),
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit corporis cumque illum ea explicabo molestias quas facilis officia aspernatur error illo ipsam nemo consequuntur animi quisquam aliquid, unde magni!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now() - 100000000000
    },
    {
        id: getRandomID(),
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
        sentAt: Date.now()-200000000000000
    },
    
    {
        id: '51251125',
        subject: 'hi?',
        body: 'how are you?',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()-4000000000000
    },
    
    {
        id: '51251121125',
        subject: 'what do you want?',
        body: 'i dont want anything!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()-500000000
    },
    
    {
        id: '5121251121125',
        subject: 'where are you gouing?',
        body: 'Im going to eat something!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()-3000000000000
    },
    
    {
        id: '3311223',
        subject: 'Wasap?',
        body: 'Pick up!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()-3544758758758
    },
    
    {
        id: '331211223',
        subject: 'agap?',
        body: 'Pick up!',
        isRead: false,
        isSent: false,
        isFavorite: false,
        isDeleted: false,
        sentAt: Date.now()-79878756454554   
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
    
}

function getEmailsToRender(filter, sort) {
    

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









