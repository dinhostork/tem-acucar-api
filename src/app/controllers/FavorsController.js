import Resident from "../models/Resident";
import YupResident from '../../validations/YupResident';

class ResidentsController {
    async create(req, res){
        if(!(await YupResident.store.isValid(req.body))){
            return res.status(400).send();
        }
        const resident = await Resident.create(req.body);

        return res.json(resident);
    }

    async index(req, res){
        const resident = await resident.findByPk(req.id_resident);
        return res.json(resident)
    }
    
    async list(req, res){
        if(!(await YupResident.list.isValid(req.params))){
            return res.status(400).send();
        }
        
        const resident = await resident.findByPk(req.id_resident);
        
        const {id_building} = req.params;
        
        if(resident.admin){
            const residents = await resident.findAll({
                where: {
                    id_building,
                }
            });
        }
        else {
            const residents = await resident.findAll({
                where: {
                    id_building,
                    active: true,
                }
            });
        }

        return res.json(residents);
        
    }

    async update(req, res){
        if(!(await YupResident.update.isValid(req.body))){
            return res.status(400).send();
        }
        const {id} = req.body;
        const resident = await resident.findByPk(id);
        
        if(!resident){
            return res.status(406).send();
        }

        const {ap_number, name, nickname, phone} = req.body;
        await resident.update({ap_number, name, nickname, phone},{
            where: {id}
        })
        
        return res.json(resident)
    }
}

export default new ResidentsController;