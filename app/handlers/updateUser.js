import knex from '../knex'

export default async function updateUser (req, res, next) {
  const { displayname, bio } = req.body
  const currentUser = res.locals.currentUser.username

  try {
    await knex('learn_about_me')
    .where({
      username: currentUser
    })
    .update({
      displayName: displayname,
      bio: bio
    })
    req.user.displayName = req.body.displayname
    req.user.bio = req.body.bio
  } catch (e) {
    return next(e)
  }
  res.redirect('/')
}
