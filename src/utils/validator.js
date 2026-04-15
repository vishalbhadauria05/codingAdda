const validator = require('validator')

const validate = (data) => {
    const mandatoryField = ['firstName','lastName','emailId','password']
    const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k))
    if(!IsAllowed) 
        throw new Error("Some Field is missing")

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid Email Id")

    if(!validator.isStrongPassword(data.password))
        throw new Error("Password is not strong enough")
}
module.exports = validate;