const supabase = require("../config/supabase");

// total income & expense
const getSummary = async (req, res) => {
    try {

        const { data, error } = await supabase
            .from("records")
            .select("amount, type");

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        let income = 0;
        let expense = 0;

        // simple loop to calculate
        data.forEach(item => {
            if (item.type === "income") {
                income += item.amount;
            } else if (item.type === "expense") {
                expense += item.amount;
            }
        });

        res.json({
            totalIncome: income,
            totalExpense: expense,
            balance: income - expense
        });

    } catch (err) {
        res.status(500).json({ message: "error in summary" });
    }
};


// category-wise totals
const getCategorySummary = async (req, res) => {
    try {

        const { data, error } = await supabase
            .from("records")
            .select("amount, category");

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        let result = {};

        data.forEach(item => {
            if (!result[item.category]) {
                result[item.category] = 0;
            }
            result[item.category] += item.amount;
        });

        res.json(result);

    } catch (err) {
        res.status(500).json({ message: "error in category summary" });
    }
};


// monthly trend (basic)
const getMonthlyData = async (req, res) => {
    try {

        const { data, error } = await supabase
            .from("records")
            .select("amount, date");

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        let monthly = {};

        data.forEach(item => {
            const month = item.date?.slice(0, 7); // YYYY-MM

            if (!monthly[month]) {
                monthly[month] = 0;
            }

            monthly[month] += item.amount;
        });

        res.json(monthly);

    } catch (err) {
        res.status(500).json({ message: "error in monthly data" });
    }
};

module.exports = {
    getSummary,
    getCategorySummary,
    getMonthlyData
};