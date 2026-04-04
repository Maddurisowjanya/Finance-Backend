const supabase = require("../config/supabase");

// add record
const addRecord = async (req, res) => {
    try {
        const { amount, type, category, date, notes, user_id } = req.body;

        if (!amount || !type || !category) {
            return res.status(400).json({ message: "missing fields" });
        }

        const { data, error } = await supabase
            .from("records")
            .insert([{ amount, type, category, date, notes, user_id }])
            .select();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(201).json({ message: "added", data });

    } catch (err) {
        res.status(500).json({ message: "error adding" });
    }
};


// get records
const getRecords = async (req, res) => {
    try {
        let query = supabase.from("records").select("*");

        const { type, category } = req.query;

        if (type) query = query.eq("type", type);
        if (category) query = query.eq("category", category);

        const { data, error } = await query;

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json(data);

    } catch (err) {
        res.status(500).json({ message: "error fetching" });
    }
};


// update
const updateRecord = async (req, res) => {
    try {
        const id = req.params.id;

        const { data, error } = await supabase
            .from("records")
            .update(req.body)
            .eq("id", id)
            .select();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json({ message: "updated", data });

    } catch (err) {
        res.status(500).json({ message: "error updating" });
    }
};


// delete
const deleteRecord = async (req, res) => {
    try {
        const id = req.params.id;

        const { error } = await supabase
            .from("records")
            .delete()
            .eq("id", id);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json({ message: "deleted" });

    } catch (err) {
        res.status(500).json({ message: "error deleting" });
    }
};


module.exports = {
    addRecord,
    getRecords,
    updateRecord,
    deleteRecord
};