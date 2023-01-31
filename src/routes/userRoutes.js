const userControllers = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();

//vista del login 
router.get('/login', userControllers.login);
router.post('/login', userControllers.processLogin);

// vista de form de registro
router.get('/registro', userControllers.registroUsuario);
router.post('/registro', uploadFile.single('imagen'),userControllers.CrearUsuario);

//vista del perfil de usuario
router.get('/perfil', userControllers.perfilUsuario)


//cambiar contraseña usuario comun
router.get('/contrasena', userControllers.contrasenaUsuario);
router.put('/contrasena', userControllers.cambiarContrasena);

//vista de editar el usuario
router.get('/editar', userControllers.editarUsuario)
router.put('/editar', userControllers.actualizarUsuario)

//vista de crear usuario desde el admin 
router.get('/nuevo-usuario', userControllers.agregarUsuario)
router.post('/nuevo-usuario', userControllers.crear)

//vista del admin  (listado de usuarios)
router.get('/admin', userControllers.vistaAdmin)
router.post('/admin', userControllers.Admin)

//vista de eliminar usuario 
router.get('/eliminar', userControllers.eliminarUsuario) 





module.exports = router;