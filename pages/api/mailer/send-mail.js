
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
        from: PrivEmail,
        to: `${email}`,
        subject: `Payment Successful !!`,
        text: `Your payment Successful. Event Name ${name} and Transaction_Id : ${message}
        `
    }
    try {
        await transporter.sendMail(mail, function (err, data) {
            if (err) {
                res.status(404).json(err, "some error");
            } else (
                res.status(200).json(data, 'successful')
            )
        })
    } catch (err) {
        res.status(500).json({ error: err })
       
    }

}