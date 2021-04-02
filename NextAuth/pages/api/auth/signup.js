import { insertDocument, findOneDocument } from '../../../lib/mongoUltil'
import { hashPassword } from '../../../lib/auth'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !email.includes('@') || !password || password.trim().length < 4) {
      return res.status(422).json({ message: 'Invalid Input' })
    }

    const userExists = await findOneDocument('users', { email })

    if (userExists) return res.status(422).json({ message: 'Email already taken'})

    const hashedPassword = await hashPassword(password)
    const result = await insertDocument('users', { email, password: hashedPassword })

    return res.status(201).json({ message: 'Created User' })
  }
}