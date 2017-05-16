import { Router } from 'express'
import getUsers from './handlers/getUsers'
import getUser from './handlers/getUser'
import setUser from './handlers/setUser'
import authenticateCallback from './handlers/authenticateCallback'
import logout from './handlers/logout'
import ensureAuthenticated from './middleware/ensureAuthenticated'
import updateUser from './handlers/updateUser'
import currentUser from './middleware/currentUser'

import passport from 'passport'

const router = Router()
const ok = (req, res) => res.send('OK')

router.use(currentUser)

router.get('/', getUsers)
router.get('/signup', (req, res) => res.render('signup'))
router.post('/signup', setUser)
router.get('/users/:username', getUser)
router.get('/login', (req, res) => res.render('login'))
router.post('/login', authenticateCallback)
router.get('/edit', ensureAuthenticated, ok)
router.put('/edit', ensureAuthenticated, updateUser)
router.get('/logout', logout)

export default router
