import Favors from "../models/Favor";
import YupFavor from '../../validations/YupFavor'

class FavorsController {
    async create(req, res){

        const {id} = req.body;
        const favors = await Favors.findByPk(id);
        
        if(!favors){
            return res.status(406).send();
        }
        
        await favors.update({ state: 'em andamento' },{
            where: {id}
        })

        return res.json(favor);
    }
    
    async list(req, res){
        
        if(!(await YupFavor.list.isValid(req.body))){
            return res.status(400).send();
        }

        const resident = await resident.findByPk(req.id_resident);
        
        const {id_building} = req.params;
        
        const favors = await resident.findAll({
            where: {
                id_building,
                id_volunteer: req.id_resident 
            }
        })

        return res.json(favors);
    }
    
    async delete(req, res){
        
        if(!(await YupFavor.delete.isValid(req.body))){
            return res.status(400).send();
        }

        const {id} = req.body;
        const favors = await Favors.findByPk(id);
        
        if(!favors){
            return res.status(406).send();
        }

        await favors.update({ state: "finalizado" },{
            where: {id}
        })
        
        return res.json(favors)
    }
}

export default new FavorsController;