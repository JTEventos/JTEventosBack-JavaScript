exports.validateFields = (username, password) => {
    if (!username && !password) {
        const err = {status: 400, msg: "One of following params must not be null: username, password"};
        throw err;
    }
}
