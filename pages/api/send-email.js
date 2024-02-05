import { sendEmail } from '../../lib/sendgrid';

export default async (req, res) => {
  const { name, email, phone, company, message } = req.body;
  try {
    sendEmail('Design Alligators', name, email, phone, company, message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
