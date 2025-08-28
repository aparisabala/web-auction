const { Globuser } = require('@src/models');
exports.list = async (req, res) => {
    try {
        const users = await Globuser.findOne({
            where: {id: 4},
            attributes: ['id', 'name', 'email']
        });
        res.status(200).json({ success: true, data: users });
    } catch (e) {
        console.log(e)
        res.status(500).json({ success: false,message: e.message});
    }
};