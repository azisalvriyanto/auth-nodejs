const model = require('../models')
const User = model.user;

exports.getUserlist = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)
        res.json({
            status: true,
            message: null,
            data: user
        })
    } catch (err) {
        res.json({
            status: false,
            message: err,
            data: null
        })
    }
}