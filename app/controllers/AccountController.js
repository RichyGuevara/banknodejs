const AccountController = module.exports
//importando el modulo de la logica..
const AccountService = require('../services/AccountService');

AccountController.listAccoutsByCustomer = async (req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.listAccountsByCustomer(params.id)

        //enviando respuesta al cliente que retorna la logica
        res.send(response)
        //-------------------------
    } catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) => {
    const body = req.body;
    
    try {
        await AccountService.create(body)
        res.send({message: 'account created'})
        //-------------------
    } catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}


AccountController.delete = async (req, res, next) => {
    const params = req.params;

    try {
        await AccountService.delete(params.id)
        res.send({message: 'Account deleted'})
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.remove = async (req, res, next) => {
    const params = req.params;
    const body = req.body; //Extrayendo el body de la petición

    try {
        await AccountService.remove(params.id, body)
        res.send({message: 'amount withdrawn'}) //Monto retirado
        //---------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.record = async (req, res, next) => {
    const params = req.params;
    const body = req.body; //Extrayendo el body de la petición

    try {
        await AccountService.record(params.id, body)
        res.send({message: 'Amount consigned'}) //Monto consignado
        //---------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.transfer = async (req, res, next) => {
    const body = req.body;

    try {
        await AccountService.transfer(body)
        res.send({message: 'Successful transfer'}) //Mensaje de transferencia exitosa
        //------------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}