import Resident from '../models/Resident';
import YupActive from '../../validations/YupActive';

class ActiveResidentController {
    async update(req, res){
        if((!(await YupActive.isValid(req.body)))){
            return res.status(400).send();
        }

        const {id_resident_admin} = req;
        const resident_admin = await Resident.findByPk(id_resident_admin);

        if(!resident_admin){
            return res.status(400).send();
        }
        
        if(!resident_admin.admin){
            return res.status(401).send();
        }
        const {id_resident, active} = req.body;
        const resident = await Resident.findByPk(id_resident);

        if(!resident){
            return res.status(406).send();
        }

        resident.active = active;
        await resident.update();
        return res.send();
    }
}

export default new ActiveResidentController