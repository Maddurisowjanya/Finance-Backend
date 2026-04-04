const supabase = require("../config/supabase");

// create user
const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "fill all fields" });
        }

        const { data, error } = await supabase
            .from("users")
            .insert([{ name, email, password, role }])
            .select();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(201).json({
            message: "user created",
            data: data
        });

    } catch (err) {
        res.status(500).json({ message: "error" });
    }
};

module.exports = { createUser };