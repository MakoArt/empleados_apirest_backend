const{Router}=require('express')
const router=Router()
const JefeCtrl=require('../controllers/jefe.controller')


router.post('/crear',JefeCtrl.crear)
router.post('/login',JefeCtrl.login)





module.exports=router;