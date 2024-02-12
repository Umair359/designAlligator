import { sendEmail } from '../../lib/sendgrid';

export default async (req, res) => {
  const { service, name, email, organization, phone, service_required, hear_by, message } = req.body;
  try {
    const message = sendEmail('Design Alligators', name, email, phone, '', message, organization, service, service_required, hear_by);

    res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}