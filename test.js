const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')


async function probar(){
    const result = await AccountService.create({
        id:'1234123',
        customerid: '1094920736',
        amount: 0,
        openedat: new Date(),
    })
    console.log(result)
}

probar().then(console.log('OK'))




/*
async function probar() {
    const result = await AccountService.listAccountsByCustomer('1094920736')
    console.log(result)
}

probar().then(console.log('OK'))
*/




/*
async function probar() {
    const result = await AccountService.listAccountsByCustomer('1094920736')
    console.log(result)
}

probar().then(console.log('OK'))
*/




/*
async function probarBuscar() {
    const customer = await CustomerService.findCustomer('1094920736')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))
*/



/*
async function probarEliminar() {
    await CustomerService.delete('1094920736')
}

probarEliminar().then(console.log('OK'))
*/


/*
async function probarEditar(){
    await CustomerService.edit('10201425',{
        lastname: 'quitian',
        name: 'obdulio'
    })
}

probarEditar().then(console.log('OK'))
*/



/*
async function probarCrearCliente() {
    await CustomerService.create({
        id: '2345',
        lastname: 'baca',
        name: 'fabian',
        email: 'fabian@gmail.com'
    })
}

probarCrearCliente().then(console.log('OK'))
*/


/*
//importando el repositorio...
const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountRepository')

console.log('probando...')

async function probandolistarCuentas() {
    const list = await AccountRepository.listAccoutsByCustomer('1094920736')
    console.log(list)
}

probandolistarCuentas()
.then(console.log('OK'))
*/





/* ClienteRepository.create({
    name:'juan',
    lastname: 'ferrer',
    id:'4321',
    email: 'juan@gmail.com'
})
//.then(console.log) //para que el programa espere a que la operacion termine..

async function probandoElBuscar() {
    const cliente = await ClienteRepository.findById('4321')
    console.log(cliente)
}

probandoElBuscar()
//.then(console.log('OK')) //para que el programa espere a que la operacion termine..

// async, siempre que haya un await dentro de una funcion, la funcion debe llevar async
async function probandoElEditar() {
    // await es para que nodejs espere que termine la ejecucion antes
    // de pasar a la siguiente instruccion
    await ClienteRepository.edit('4321',{
        name:'jose',
        lastname: 'perez'
    })
}

probandoElEditar()
//.then(console.log('OK')) //para que el programa espere a que la operacion termine..

async function probandoEliminar() {
    await ClienteRepository.delete('4321')
}

probandoEliminar()
//.then(console.log('OK')) //para que el programa espere a que la operacion termine..
*/