import {DataTypes, Model } from "sequelize";

class Categories extends Model{
    static init(sequelize){
        super.init({
            category: DataTypes.STRING
        },{
            sequelize
        })

        return this;
    }

    /*static associate(models){

    }*/

}

export default Categories;