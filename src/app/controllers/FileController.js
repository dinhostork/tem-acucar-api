import Residents from '../models/Resident';
import fs from 'fs';
import {resolve} from 'path';

class FileController{
    async store(filename, id){
        const resident = await Residents.findByPk(id);
        resident.photo = filename;
        await resident.update();
    }

    async update(req, res){
        const resident = await Residents.findByPk(req.id_resident);
        const filepath = resolve(__dirname, '..', '..', '..', 'uploads/avatars') + "\\" + resident.photo;
        fs.unlink(filepath, (error) => {
            console.log('erro ao deletar');
        })
        resident.photo = req.file.filename;
        await resident.update();
        return res.send();
    }

    async delete(req, res){
        const resident = await Residents.findByPk(req.id_resident);
        const filepath = resolve(__dirname, '..', '..', '..', 'uploads/avatars') + "\\" + resident.photo;
        fs.unlink(filepath, (error) => {
            console.log('erro ao deletar');
        })
        return res.send();
    }
}

export default new FileController