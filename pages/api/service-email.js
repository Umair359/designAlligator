import { sendEmail } from '../../lib/sendgrid';

export default async (req, res) => {
  const { name, email, phone, message, title, price } = req.body;
  try {
    const message = sendEmail('Design Alligators', name, email, phone, '', message, "", "", "", "", title, price);
    res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}