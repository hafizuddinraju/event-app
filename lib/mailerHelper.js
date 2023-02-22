export const postMailer = async (data) => {
    
    fetch('/api/mailer/send-mail', {
        method: 'POST',
        headers: { 'content-type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
    })
        .then((res) => {
            return res;
        })
        .catch(err => console.log(err))
}