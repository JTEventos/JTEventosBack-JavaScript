module.exports = async (error, req, resp, next) => {
    console.log(`Handling error: ${error}`);
    console.log(error)
    if(error.status) {
        resp.status(error.status).json({msg: error.msg});
    } else if (error.array) {
        resp.status(404).json(error.array());
    } else {
        resp.status(500).json({msg: "Unidentified error"});
    }
}