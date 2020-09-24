import Sequelize, { Model } from "sequelize";

class Favors extends Model {
    static init(sequelize) {
        super.init({
            state: Sequelize.STRING,
            final_date: Sequelize.BOOLEAN,
            title: Sequelize.STRING,
            description: Sequelize.STRING,
        }, {
            sequelize,
        });

        return this;
    }
    
    static associate(models) {
        this.belongsTo(models.Buildings, {foreignKey: 'id_building', as: 'building'});
        this.belongsTo(models.Categories, {foreignKey: 'id_category', as: 'category'});
        this.belongsTo(models.Residents, {foreignKey: 'id_creator', as: 'creator'});
        this.belongsTo(models.Residents, {foreignKey: 'id_volunteer', as: 'volunteer'});
    }

}
export default Favors;