import { insertDocument } from '../../helpers/mongoHelper'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });

      return;
    }

    await insertDocument('newsletter', { email })

    res.status(201).json({ message: 'Signed up!' })
  }
}
