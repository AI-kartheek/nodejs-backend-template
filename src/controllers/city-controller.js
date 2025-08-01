const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /cities
 * req-body { name: 'London' }
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.message = 'Successfully created a city';
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while creating a city';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createCity
}