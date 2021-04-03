import { insertDocument } from '../../libs/mongoUtil'

export default async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const result = await insertDocument('meetups', data)

    console.log(result);

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}
