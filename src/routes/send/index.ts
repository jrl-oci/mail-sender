/** @type {import('./[id]').RequestHandler} */
import sgMail from "@sendgrid/mail";

const apiKey = process["env"]['SENDGRID_API_KEY']
if (apiKey) {
    sgMail.setApiKey(apiKey)
}

export async function post({ request }) {
    const msg = await request.json();

    await sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
    return {
        body: 'email sent'
    };
}