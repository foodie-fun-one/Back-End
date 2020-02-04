function validateCuisineType(cuisine_type) {

    let errors = [];

    if (!cuisine_type.cuisine_value_id ) {
        errors.push('A cuisine value ID is required!');
    }

    if (!cuisine_type.restaurant_id) {
        errors.push('A cuisine restaurant ID is required!');
    }

    return {
        isSuccessfull: errors.length > 0 ? false : true,
        errors
    };
}

module.exports = validateCuisineType;