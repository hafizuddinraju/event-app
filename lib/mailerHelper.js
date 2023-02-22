export const postMailer = async (data) => {
    console.log(data)
    fetch('/api/mailer/send-mail', {
        method: 'POST',
        headers: { 'content-type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => console.log(err))
}