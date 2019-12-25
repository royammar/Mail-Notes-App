export default {
    createMail,
    creatMails,
    getEmailsToRender
}



let gMails =[{

    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
}]


function createMail(subject,body) {
    let newMail={
        subject:subject,
        body : body,
        isread :false,
        sentAt : Date.now()
    }
return newMail
}



function creatMails () {
    gmails.push(createMail('asfasfasf','asfasfasfasfasfasfsasfasfasf'))
    gMails.push(createMail('asfasfasfasfasf1213132','sdfgdfgdsffgdf'))
    gMails.push(createMail('kjasdvlkuadbvkluadbva','asfasfasfafasf'))
    gMails.push(createMail('work','what about the work'))
    gMails.push(createMail('play','lets play'))
    gMails.push(createMail('go','go to hell'))
    gMails.push(createMail('hi','asdasdasd'))
    gMails.push(createMail('asdasdwe','asdasdhhhrr'))
    gMails.push(createMail('aewfahh','hboiskjv'))
    gMails.push(createMail('fdasf','asddghea'))

}

function getEmailsToRender() {

    return gMails
}


