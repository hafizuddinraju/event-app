
import nodemailer from "nodemailer";

export default async function (req, res) {
    const { name, email, message } = req.body

    const PrivEmail = process.env.USER_EMAIL
    const PrivPass = process.env.USER_PASS

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: PrivEmail,
            pass: PrivPass
        }
    })


    const mail = {
        from: `${email}`,
        to: PrivEmail,
        subject: `New Mail From ${name}`,
        text: `${name} Wrote: ${message}`,
    }
    try {
        await transporter.sendMail(mail, function (err, data) {
            if (err) {
                console.log(err, "some error");
            } else (
                console.log(data, 'successful')
            )
        })
    } catch (err) {
        res.status(500).json({ err: 'error found' })
        console.log(err)
    }

}