import Favor from "../models/Favor";
import Resident from "../models/Resident";
import Notification from '../schemas/Notification';
import YupFavor from '../../validations/YupFavor';

class FavorsController {
    async create(req, res){
        if(!(await YupFavor.store.isValid(req.body))){
            return res.status(400).send();
        }

        const user = await Resident.findByPk(req.id_resident)

        const favor = await Favor.create(req.body);

        const residents = await Resident.findAll({
            where: { id_building  },
            active: true
        })

        residents.forEach(async (resident) => {
            await Notification.create({
                title: `"Ajude seu vizinho ${user.name[0]}`,
                content: req.body.title,
                id_user: resident.id
            })
        });

        return res.json(favor);
    }

    async index(req, res){
        const favor = await Favor.findByPk(req.params.id);
        return res.json(favor)
    }
    
    async list(req, res){
        if(!(await YupFavor.list.isValid(req.params))){
            return res.status(400).send();
        }
        
        const resident = await resident.findByPk(req.id_resident);
        
        const {id_building} = resident;
        
        if(resident.admin){
            const favor = await Favor.findAll({
                where: {
                    id_building,
                    ///Agrupar os favores
                }
            });
            return res.json(favor);
        }

        const favor = await Favor.findAll({
            where: {
                id_building,
                state: 'em aberto'
            }
        });
        return res.json(favor);

        
    }

    async update(req, res){
        if(!(await YupFavor.update.isValid(req.body))){
            return res.status(400).send();
        }

        const {id} = req.params;
        const favor = await Favor.findByPk(id);
        
        if(!favor){
            return res.status(406).send();
        }

        const {id_category, final_date, titulo, descricao} = req.body;
        await resident.update({id_category, state, final_date, titulo, descricao},{
            where: {id}
        })
        
        return res.json(resident)
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