function validateRegister(user) {

    let errors = [];

    if (!user.username || user.username.length < 3) {
        errors.push('Please incldue a username with more than 3 characters');
    }

    if (!user.password || user.password.length <= 6 ) {
        errors.push('Please include a password that is atleast 6 characters long.')
    }

    if (!user.email) {
        errors.push('An email is required!');
    }

    if (!user.city) {
        errors.push('A city is required!');
    }

    return {
        isSuccessfull: errors.length > 0 ? false : true,
        errors
    };
}

module.exports = validateRegister;