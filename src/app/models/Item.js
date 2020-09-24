import Sequelize, { Model } from "sequelize";

class Itens extends Model {
    static init(sequelize) {
        super.init({
            category: Sequelize.STRING,
        }, {
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Favors, {foreignKey: 'id_favor', as: 'favor'});
    }

}
export default Itens;