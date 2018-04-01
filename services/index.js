'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')


function createToken(user){
    const playload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }

   return  jwt.encode(playload, config.SECRET_TOKEN)
}

function decodeToken(token){
    return new Promise((resolve, reject)=>{
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN)
            if(payload.exp <= moment().unix()){
                reject({
                    status:401,
                    message: 'El token a expirado'
                })
            }

            resolve(payload.sub)

        } catch(err) {
            reject({
                status:500,
                message: 'Invalid Token'
            })
        }
    })
}



module.exports = {
    createToken,
    decodeToken
}