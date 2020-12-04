const {Router}=require('express')
const router=Router()
const empleadoCtrl=require('../controllers/empleado.controller')
const Auth=require('../helpers/Auth')



router.post('/crear',Auth.verificartoken,empleadoCtrl.crear)
router.get('/listarempleados',Auth.verificartoken,empleadoCtrl.listar)
router.get('/listar/:id',Auth.verificartoken,empleadoCtrl.listarId)
router.get('/listarempleadosjefe/:id',Auth.verificartoken,empleadoCtrl.empleadosJefe)
router.delete('/eliminar/:id',Auth.verificartoken,empleadoCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificartoken,empleadoCtrl.actualizar)
router.get('/buscarempleado/:nombre',Auth.verificartoken,empleadoCtrl.buscarEmpleado)




module.exports=router
