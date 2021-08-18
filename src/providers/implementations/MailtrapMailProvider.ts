import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '5475544efb92f3',
                pass: '1f9a986dcb6166',
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail( {
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.to.name,
                address: message.to.email,
            },
            subject: message.subject,
            html: message.body,
        })
    }
}