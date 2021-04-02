import { getSession } from 'next-auth/client'

import { findOneDocument, updateOneDocument } from '../../../lib/mongoUltil'
import { verifyPassword, hashPassword } from '../../../lib/auth'

export default async (req, res) => {
  if (req.method === 'PATCH') {
    const session = await getSession({ req })

    if (!session) { 
      return res.status(401).json({ message: 'User is not authenticated' })
    }

    const { email } = session.user;
    const { oldPassword, newPassword } = req.body;
    console.log(newPassword)

    const user = await findOneDocument('users', { email })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    if (!(await verifyPassword(oldPassword, user.password))) {
      return res.status(403).json({ message: 'Old password does not match' })
    }

    const newPasswordHashed = await hashPassword(newPassword)

    const updatedUser = await updateOneDocument('users', { email }, { password: newPasswordHashed })

    console.log(updatedUser)

    return res.status(200).json({ message: 'Password updated' })
  }
}