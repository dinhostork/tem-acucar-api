import * as Yup from 'yup';

const YupResident = {
    list: Yup.object().shape({
        id_building: Yup.number().positive().integer().required()
    }),

    store: Yup.object().shape({
        id_building: Yup.number().positive().integer().required(),
        ap_number: Yup.number().positive().integer().required(),
        name: Yup.string().required(),
        nickname: Yup.string().required(),
        password: Yup.string().required().min(8),
        phone: Yup.string().notRequired()
    }),
    
    update: Yup.object().shape({
        id: Yup.number().positive().integer().required(),
        ap_number: Yup.number().positive().integer().required(),
        name: Yup.string().required(),
        nickname: Yup.string().required(),
        phone: Yup.string().notRequired()
    }),
}

export default YupResident;