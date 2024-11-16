import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

/**
 * Function to send an email using Mailjet
 * @param {string} fromEmail - Email address of the sender
 * @param {string} fromName - Name of the sender
 * @param {string} toEmail - Email address of the recipient
 * @param {string} toName - Name of the recipient
 * @param {string} subject - Subject of the email
 * @param {string} Content - Content of the email, react-like component
 * @param {object} data - Additional data to send
 */
export const sendEmail = async (
    fromEmail,
    fromName,
    toEmail,
    toName,
    subject,
    Content,
    data) => {
  try {

    const htmlContent = ReactDOMServer.renderToStaticMarkup(
        <Content {...data} />
    );
    const textContent = convert(htmlContent, {
        wordwrap: 130,
    });
    
    const req = {
      Messages: [{
        From: {
          Email: fromEmail,
          Name: fromName
        },
        To: [{
          Email: toEmail,
          Name: toName
        }],
        Subject: subject,
        TextPart: textContent,
        HTMLPart: htmlContent,
      }]
    };


    await mailjetClient.post("send", { 'version': 'v3.1' }).request(req);
  } catch (err) {
    console.error('Error sending email:', err);
  }
};
