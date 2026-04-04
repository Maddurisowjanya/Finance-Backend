// simple middleware to check roles

const allowRoles = (...roles) => {
    return (req, res, next) => {

        // taking role from headers (for now)
        const role = req.headers.role;

        if (!role) {
            return res.status(401).json({ message: "role missing" });
        }

        // check if role allowed
        if (!roles.includes(role)) {
            return res.status(403).json({ message: "not allowed" });
        }

        next(); // move to next
    };
};

module.exports = allowRoles;