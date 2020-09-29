import Seals from '../models/Seal';
import Favors from '../models/Favor';
import YupBadge from '../../validations/YupBadge';
import Category from '../models/Category';
import Residents from '../models/Resident';

class SealsController{
    /*async index(req, res){
        const resident = await Residents.findByPk(req.id_resident,{
            attributes: {
                exclude: ['password_hash']
            },
            include: {
                association: 'stamps'
            }
        });
        return res.send(resident);
    }*/

    async create(req, res){
        if(!(await YupBadge.store.isValid(req.body))){
            return res.status(400).send();
        }
        const {title, description, icon} = req.body;
        const seal = await Seals.create({title, description, icon});

        return res.send(seal);
    }

    async add(id){
        const categories = await Category.findAll();
        for(let i in categories){
            const category = categories[i].category;
            const count = await Favors.count({
                where: {
                    id_volunteer: id,
                },
                include: {
                    association: "category",
                    required: true,
                    where: {category}
                }
            });
            
            if(count == 5){
                const resident = await Residents.findByPk(id);
                const seal = await Seals.findByPk(categories[i].id_stamp);
                await resident.addStamps(seal);
            }
        }

    }

}

export default new SealsController;
