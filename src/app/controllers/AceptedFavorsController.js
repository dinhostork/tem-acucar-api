import Resident from '../models/Resident';
import Favors from '../models/Favor';
import YupFavor from '../../validations/YupFavor';
import Notification from '../schemas/Notification';
import SealController from './SealController';

class AceptedFavorsController {
  async create(req, res) {
    const { id } = req.params;
    const favors = await Favors.findByPk(id);

    if (!favors) {
      return res.status(406).send();
    }

    await favors.update({ state: 'em andamento', id_volunteer: req.id_resident },{
        where: { id },
      },
    );

    const user = await Resident.findByPk(req.id_resident);

    await Notification.create({
      title: `${user.name.split(' ')[0]} está disposto a te ajudar!`,
      id_user: favors.id_creator,
      content: 'aa'
    });

    await SealController.add(req.id_resident);

    return res.json(favors);
  }

  async list(req, res) {
    const resident = await Resident.findByPk(req.id_resident);

    const { id_building } = resident;

    const favors = await Favors.findAll({
      where: {
        id_building,
        id_volunteer: req.id_resident,
      },
    });

    return res.json(favors);
  }

  async delete(req, res) {
    if (!(await YupFavor.delete.isValid(req.params))) {
      return res.status(400).send();
    }

    const { id } = req.params;
    const favors = await Favors.findByPk(id);

    if (!favors) {
      return res.status(406).send();
    }

    await favors.update(
      { state: 'Em aberto', id_volunteer: null },
      {
        where: { id },
      },
    );

    const user = await Resident.findByPk(req.id_resident);

    await Notification.create({
      title: `${user.name.split(' ')[0]} desistiu de fazer o seu favor!`,
      id_user: favors.id_creator,
    });

    return res.json(favors);
  }
}

export default new AceptedFavorsController();
