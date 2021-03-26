import { insertDocument } from '../../helpers/mongoHelper'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(422).json({ message: 'Invalid email address' });
    }

    await insertDocument('newsletter', { email })

    return res.status(201).json({ message: 'Signed up!' })
  }
}
