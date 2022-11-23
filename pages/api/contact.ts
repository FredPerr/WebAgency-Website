import { SMTPClient } from 'emailjs'
import { NextApiRequest, NextApiResponse } from 'next'





export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, phone, message, motive } = req.body

    const client = new SMTPClient({
        port: 465,
        host: "smtp.gmail.com",
        user: process.env.SMTP_ADDRESS,
        password: process.env.SMTP_PASSWORD,
        ssl: true
    })

    try {
        client.sendAsync(
            {
                text: `${message} \n ${phone}`,
                from: email,
                to: email,
                subject: `[${motive}] (${name})`
            }
        ).catch((err)=> {
            console.log(err)
        })
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}