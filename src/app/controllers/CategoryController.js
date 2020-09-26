import Category from "../models/Category";
import YupCategory from '../../validations/YupCategory';

class CategoryController {
    async create(req, res){
        if(!(req.body.category)){
            return res.status(400).send();
        }

        const category = await Category.create(req.body);

        return res.json(category);
    }
    
    async list(req, res){
        
        const category = await Category.findAll();
        return res.json(category);
        
    }

    async update(req, res){
        if(!(await YupCategory.update.isValid(req.body))){
            return res.status(400).send();
        }

        const {id} = req.params;
        const category = await Category.findByPk(id);
        
        if(!category){
            return res.status(406).send();
        }

        const {category} = req.body;
        await resident.update({category},{
            where: {id}
        })
        
        return res.json(resident)
    }

    async delete(req, res){
        
        const {id} = req.params;

        const category = await Category.findByPk(id);
        
        if(!category){
            return res.status(406).send();
        }

        await category.destroy({
            where: {id}
        })
        
        return res.json(category)
    }
}

export default new CategoryController;