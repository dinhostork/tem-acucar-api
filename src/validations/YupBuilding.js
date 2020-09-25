import * as Yup from 'yup';

const YupBuilding = {
    store: Yup.object().shape({
        address: Yup.string().required(),
        name: Yup.string().required(),
        resident: Yup.object().shape({
            ap_number: Yup.number().positive().integer().required(),
            name: Yup.string().required(),
            nickname: Yup.string().required(),
            password: Yup.string().required().min(8),
            phone: Yup.string().notRequired()
        }).required()
    }),

    update: Yup.object().shape({
        id: Yup.number().positive().integer().required(),
        active: Yup.boolean().required()
    }),
    
    delete: Yup.object().shape({
        id: Yup.number().positive().integer().required()
    })
}
export default YupBuilding;