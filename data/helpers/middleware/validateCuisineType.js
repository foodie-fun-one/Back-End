function validateCuisineType(cuisine_type) {

    let errors = [];

    if (!cuisine_type.cuisine_value_id && cuisine_type.cuisine_value_id > 0 ) {
        errors.push('A cuisine value ID is required or ID must be greater than 0');
    }

    if (!cuisine_type.restaurant_id && cuisine_type.restaurant_id > 0) {
        errors.push('A cuisine restaurant ID is required or ID must be greater than 0!');
    }

    return {
        isSuccessfull: errors.length > 0 ? false : true,
        errors
    };
}

module.exports = validateCuisineType;