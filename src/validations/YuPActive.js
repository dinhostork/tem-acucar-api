import * as Yup from 'yup';

const YupActive = Yup.object().shape({
        id_building: Yup.number().positive().integer().required()
    })


export default YupActive;