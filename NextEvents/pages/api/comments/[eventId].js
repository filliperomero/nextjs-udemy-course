import { insertDocument, getAllDocuments } from '../../../helpers/mongoHelper'

export default async (req, res) => {
  const { eventId } = req.query

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      return res.status(422).json({ message: 'Invalid input' });
    }

    const newComment = { email, name, text, eventId }
    
    const result = await insertDocument('comments', newComment)
    newComment.id = result.insertedId;

    return res.status(201).json({ message: 'Comment created', comment: newComment })
  }

  if (req.method === 'GET') {
    const documents = await getAllDocuments('comments', { eventId }, { sort: { _id: -1 }})

    return res.status(200).json({ comments: documents })
  }
}
