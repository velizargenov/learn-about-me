import bcrypt from 'bcrypt'

export default async function hashPassword (password) {
  const SALT_FACTOR = 10

  const salt = await bcrypt.genSalt(SALT_FACTOR)
  const hash = await bcrypt.hash(password, salt)

  return hash
}
