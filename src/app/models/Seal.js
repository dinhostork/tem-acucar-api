import Sequelize, { Model } from 'sequelize';

class Seals extends Model {
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
    this.belongsToMany(models.Residents, {foreignKey: 'id_seal', through: 'seals_residents'});
  }
}
export default Seals;
