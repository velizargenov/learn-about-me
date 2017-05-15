import knex from '../knex'

export default async function updateUser (req, res, next) {
  const body = req.body

  await knex('learn_about_me')
  .where({
    username: body.username
  })
  .update({
    bio: body.bio
  })
  res.ok()
}
