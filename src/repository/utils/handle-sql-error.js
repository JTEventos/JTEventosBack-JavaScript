module.exports = (error) => {
    if(error.msg && error.status) throw error;
    const err = {
        status: error.code == "23505" ? 400 : 500,
        msg: `Sql error: ${error}`
    };
    throw err;
}