import * as Yup from 'yup';

const YupFavor = {
    list: Yup.object().shape({
        id_building: Yup.number().positive().integer().required(),
    }),

    store: Yup.object().shape({
        id_building: Yup.number().positive().integer().required(),
        id_category: Yup.number().positive().integer().required(),
        final_date: Yup.date().required(),
        title: Yup.string().required(),
        description: Yup.string().required(),
        id_creator: Yup.number().positive().integer().required(),
    }),

    update: Yup.object().shape({
        id_favor: Yup.number().positive().integer().required(),
        id_category: Yup.number().positive().integer().required(),
        state: Yup.string().required().oneOf(['em aberto', 'em andamento', 'finalizado']),
        final_date: Yup.date().required(),
        titulo: Yup.string().required(),
        descricao: Yup.string().required(),
    }),

    delete: Yup.object().shape({
        id_favor: Yup.number().positive().integer().required(),
    })
}

export default YupFavor;