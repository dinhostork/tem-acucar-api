import {DataTypes, Model} from 'sequelize';

class Residents extends Model {
    static init(sequelize){
        super.init({
            ap_number: DataTypes.STRING,
            name: DataTypes.STRING,
            photo: DataTypes.STRING,
            nickname: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
            phone: DataTypes.STRING,
            admin: DataTypes.BOOLEAN, 
            active: DataTypes.BOOLEAN
        }, {
            sequelize
        })

        return this;
    }

    static associate(models){
        this.belongsTo(models.Buildings, {foreignKey: 'id_building', as: 'building'});
    }
}

export default Residents;