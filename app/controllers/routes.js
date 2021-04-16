const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')


const router = express.Router();

router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/accounts', AccountController.listAccoutsByCustomer);
router.post('/accounts', AccountController.createAccount);
router.post('/customers', CustomerController.createCustomer); //crear cliente
router.delete('/accounts/:id', AccountController.delete); //eliminar cuenta.
router.put('/accounts/:id/remove', AccountController.remove); //retirar
router.put('/accounts/:id/record', AccountController.record); //consignar
router.put('/accounts/transfer', AccountController.transfer); //transferir

module.exports = router;