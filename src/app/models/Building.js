import Sequelize, { Model } from "sequelize";

class Buildings extends Model {
    static init(sequelize) {
        super.init({
            address: Sequelize.STRING,
            name: Sequelize.STRING,
            active: Sequelize.BOOLEAN,
        }, {
            sequelize,
        });

        return this;
    }
    static associate(models) {
        this.hasMany(models.Favors, {foreignKey: 'id_building', as: 'favors'});
        
    }

}
export default Buildings;