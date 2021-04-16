const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

AccountService.listAccountsByCustomer = async (customerId) => {
    //buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //si la lista da resultados su tamaño es cero
    //es porque no existe un cliente con esa cedula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //cuando se retorna directamente el resultado de una funcion que
    //haya que esperar el resultado, no es necesario usar await...
    return AccountRepository.listAccoutsByCustomer(customerId)
}

AccountService.create = async (account) => {
    //buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(account.customerid)

    //si la lista de resultados su tamaño es cero
    //es porque no exite un cliente con esa cedula
    if(customerFound.length === 0){
        throw new Error('Customer does not exist')
    }

    //consultando las cuentas del cliente..., el id del cliente viene en el objeto
    const accountsByCustomer = await AccountRepository.listAccoutsByCustomer(account.customerid)

    //verificando que solo tenga hasta tres...
    if (accountsByCustomer.length >= 3){
        throw new Error('no more than 3 accounts...')
    }

    account.openedat = new Date();//colocando la fecha de apertura
    account.amount = 0; //colocando el saldo inicial
    await AccountRepository.create(account)
}

//--------------------------------------------------

AccountService.delete = async (accountId) => {
    const dbAccount = await AccountRepository.findById(accountId)

    if(dbAccount.length === 0) {
        throw new Error('Account does not exist')
    }

    console.log(dbAccount[0].amount)

    if(dbAccount[0].amount > 0) {
        throw new Error('Account with amount, can not be deleted')
    }

    await AccountRepository.delete(accountId)
}

AccountService.remove = async (idAcc, account) => {
    const accountFound = await AccountRepository.findById(idAcc) //Buscar la cuenta por el id para ver si existe

    if(accountFound.length === 0){
        throw new Error('Account does not exist')
    }

    console.log(accountFound) //Revisa cuál es el monto que hay en la base de datos 
    console.log(account.amount) //Revisa el monto que se va a retirar

    if(accountFound[0].amount < account.amount) { //Revisa si la cuenta tien saldo suficiente
        throw new Error('The account does not have enough balance') //Muestra mensaje si la cuenta no tiene saldo suficiente
    }

    accountFound[0].amount = accountFound[0].amount - account.amount; //Al monto que hay en la base de datos le resta lo que va a retirar

    console.log('The new amount in the DB' + accountFound[0].amount)

    await AccountRepository.edit(idAcc, accountFound[0]) //Le envía al repositorio los datos actualizados
}



AccountService.record = async (idAcc, account) => {
    const accountFound = await AccountRepository.findById(idAcc) //Busca la cuenta por el id para ver si existe

    if(accountFound.length === 0){
        throw new Error('Account does not exist')
    }

    console.log(accountFound) //Revisa cuál es el monto que hay en la base de datos 
    console.log(account.amount) //Revisa el monto que se va a consignar

    accountFound[0].amount = (accountFound[0].amount) + parseInt((account.amount)); //Al monto que hay en la base de datos le suma lo que va a consignar

    console.log('The new amount in the DB' + accountFound[0].amount) //Verifica que no esté concatenando sino sumando

    await AccountRepository.edit(idAcc, accountFound[0]) //Le envía al repositorio los datos actualizados
}



AccountService.transfer = async (clientT) => {
    const accountFoundOrigen = await AccountRepository.findById(clientT.accountO) //Busca la cuenta por el id para ver si existe la cuenta de origen
    const accountFoundDestino = await AccountRepository.findById(clientT.accountD) //Busca la cuenta por el id para ver si existe la cuenta de destino
    console.log(clientT)
    if(accountFoundOrigen.length === 0){
        throw new Error('Origin account does not exist') //Muestra mensaje si la cuenta de origen no existe
    }

    if(accountFoundDestino.length === 0){
        throw new Error('Destination account does not exist') //Muestra mensaje si la cuenta de destino no existe
    }

    if(accountFoundOrigen[0].amount < clientT.amount) {
        throw new Error('The origin account does not have enough balance') //Muestra mensaje si la cuenta de origen no tiene saldo suficiente
    }
console.log(clientT.amount)
    accountFoundOrigen[0].amount = accountFoundOrigen[0].amount - clientT.amount; //Al monto que hay en la base de datos le resta lo que va a transferir
    accountFoundDestino[0].amount = accountFoundDestino[0].amount + clientT.amount; //Al monto que hay en la base de datos le suma lo que va a recibir por transferencia

    await AccountRepository.edit(clientT.accountO, accountFoundOrigen[0]) //Le envía al repositorio los datos actualizados para la cuenta de origen
    await AccountRepository.edit(clientT.accountD, accountFoundDestino[0]) //Le envía al repositorio los datos actualizados para la cuenta de destino
}