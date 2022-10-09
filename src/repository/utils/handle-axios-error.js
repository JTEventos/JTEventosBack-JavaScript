module.exports = (error, requestUrl) => {
    if(error.response) {
        const err = {
            status: error.response.status,
            msg: error.response.data,
            url: requestUrl
        };
        throw err;
    }
}