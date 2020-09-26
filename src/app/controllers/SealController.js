import Seals from '../models/Seal';
import Resident from '../models/Resident';
import YupBadge from '../../validations/YupBadge';

class SealsController{
    async create(req, res){
        if(!(await YupBadge.store.isValid(req.body))){
            return res.status(400).send();
        }
        const {title, description, icon} = req.body;
        const seal = await Seals.create({title, description, icon});

        return res.send(seal);
    }

    async add(req, res){
        /*if(!(await YupBadge.add.isValid(req.body))){
            return res.status(400).send();
        }

        const {id_resident, id_seal} = req.body;

        const resident = await Resident.findByPk(id_resident);
        const seal = await Seals.findByPk(id_seal);

        if(!resident || !seal){
            return res.status(406).send();
        }

        await resident.addSeals(seal);

        return res.send();*/
    }
}

export default new SealsController;