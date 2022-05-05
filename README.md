# Mail Sender

To call SendGrid, you need an account set up.  You can run through the Prerequisite steps here:
<https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs>

Once you have an API key, this needs to be in the environment as `SENDGRID_API_KEY`.

Make sure you also register a sender email.

To send an email, you make a `POST` request.  The data for SendGrid gets passed-through as-is.

The API documentation for the expected format is [here](https://docs.sendgrid.com/api-reference/mail-send/mail-send#body).

You can read some more example email JSON bundles here:
<https://github.com/sendgrid/sendgrid-nodejs/blob/main/docs/use-cases/README.md>

Here's a simple example:
```json
{
    "to": "addressee@example.com",
    "from": "registeredSender@example.com",
    "subject": "Smell the Glove",
    "text": "This is some text for that email I'm sending"
}
```

Save your json to a file called `request.json`.  Then, when the server is running, call the POST like so:
```bash
 curl -X POST -H 'Content-Type: application/json' -d @request.json http://localhost:3000/send
```

Verify in the console that you get a `202`.

And then check the spam folder of wherever you sent the email, since that's most likely where it will end up.

