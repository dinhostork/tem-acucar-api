import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt'

class Residents extends Model {
  static init(sequelize) {
    super.init({
      ap_number: DataTypes.STRING,
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      nickname: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      phone: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });

    this.addHook("beforeSave", async (resident) => {
      if(resident.password){
        resident.password_hash = await bcrypt.hash(resident.password, 8)
      } 
    })
    
    
    return this;
  }



  static associate(models) {
    this.belongsTo(models.Buildings, { foreignKey: 'id_building', as: 'building' });
    this.belongsToMany(models.Seals, {foreignKey: 'id_resident', through: 'seals_residents'});
  }

  checkPassword(password){
    return bcrypt.compare(password, this.password_hash)
  }
}

export default Residents;
