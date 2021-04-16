const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.listAccoutsByCustomer = (customerId) => {
    return DB('accounts').where({customerid : customerId}).select('*')
}

AccountRepository.create = (account) => {
    return DB('accounts').insert(account)
}

AccountRepository.delete = (idAcc) => {
    return DB('accounts').where( {id: idAcc}).del()
}

AccountRepository.findById = (idAcc) => {
    return DB('accounts').where({id: idAcc}).select('*')
}

AccountRepository.edit = (idAcc, account) => {
    return DB('accounts').where( {id: idAcc}).update(account)
}