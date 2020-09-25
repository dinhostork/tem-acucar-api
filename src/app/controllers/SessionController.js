import Resident from '../models/Resident';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/authConfig';

class SessionController {
    async create(req,res){
        const {nickname, password} = req.body

        const resident = await Resident.findOne({
            where: {nickname}
        })

        if(!resident) {
            return res.status(401).json({error: "Usuário não encontrado!"})
        }

        if(!(await resident.checkPassword(password))) {
            return res.status(401).json({error: "Senha Incorreta!"})
        }

        resident.password_hash = undefined

        return res.json({
            resident,
            token: jwt.sign({ id }, authConfig.key, {
                expiresIn: authConfig.expiresIn
            })
        })
    }

}

export default new SessionController();