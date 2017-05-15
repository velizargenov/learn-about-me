import { Router } from 'express'
import getUsers from './handlers/getUsers'
import getUser from './handlers/getUser'
import setUser from './handlers/setUser'

const router = Router()
const ok = (req, res) => res.send('OK')

router.get('/', getUsers)
router.get('/signup', ok)
router.post('/signup', setUser)
router.get('/users/:username', getUser)
router.get('/login', ok)
router.post('/login', ok)
router.get('/edit', ok)
router.post('/edit', ok)
router.get('/logout', ok)

export default router
