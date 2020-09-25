import Building from '../models/Building';
import YupBuilding from '../../validations/YupBuilding';

class BuildingsController {
    async create(req, res){
        if(!(await YupBuilding.store.isValid(req.body))){
            return res.status(400).send();
        }

        const building = await Building.create(req.body)

        return res.json(building);
    }

    async update(req, res){
        const building = await Building.findByPk(req.params.id);
        building.active = true
        await building.update()
        return res.json(building)
    }
    
    async delete(req, res){
        const building = await Building.findByPk(req.params.id);
        building.active = false
        await building.update()
        return res.json(building)
    }
}

export default new BuildingsController();