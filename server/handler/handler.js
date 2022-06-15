const mongoose = require('mongoose');
const handler =  require('../v1/controllers/index')

module.exports.userRegister = async (userData)=>{
    return new Promise((resolve, reject)=>{
        request({
            method: 'POST',
            // url: constants.apis.continuevideos,
            body: userData,
            headers: {
              "Content-Type": "application/json",
            //   "Authorization": 'Bearer ' + token
            },
            json: true,
          }, (err, successData) => {
            if (err) {
              reject(err)
            } else {
              resolve(successData)
              console.log("Success")
            }
          })
    })
}

