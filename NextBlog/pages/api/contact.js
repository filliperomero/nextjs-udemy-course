import { insertDocument } from '../../lib/mongoUltil';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      return res.status(422).json({ message: 'Invalid Input' })
    }

    const newMessage = {
      email, 
      name, 
      message
    }
    const result = await insertDocument('messages', newMessage)

    return res.status(201).json({ message: 'Successfully stored message!', newMessage: { id: result.insertedId, ...newMessage } })
  }
}