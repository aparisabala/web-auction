
import Globuser from '#src/models/globuser';
import bcrypt from 'bcrypt';

/**
 * Returns all the glob users
 * @param {*} req 
 * @param {*} res 
 */
export const list = async (req, res) => {
    try {
        const users = await Globuser.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.status(200).json({ success: true, data: users });
    } catch (e) {
        res.status(500).json({ success: false, data: [], message: e.message });
    }
};

export const register = async (req, res) => {
    try {
        const user = await Globuser.create({ ...req?.body });
        res.status(201).json({ success: true, data: user, msg: 'User created successfully' });
    } catch (e) {
        res.status(400).json({ success: false, data: [], msg: e.message });
    }
};
