const { verify } = require("jsonwebtoken");
const { sessionExpired } = require("./utils/return-message");

exports.verifyJwt = async (req, resp, next) => {
    const token = req.get("Authorization");
    if (!token) return resp.status(401).json(sessionExpired());

    verify(token, process.env.SECRET, (e) => {
        if (e) return resp.status(401).json(sessionExpired());
        next();
    });
};
