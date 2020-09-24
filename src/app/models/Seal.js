import Sequelize, { Model } from "sequelize";

class Stamps extends Model {
    static init(sequelize) {
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            icon: Sequelize.STRING,
        }, {
            sequelize,
        });
        
        return this;
    }
    static associate(models) {

    }
}
export default Stamps;