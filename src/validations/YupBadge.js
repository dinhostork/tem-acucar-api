import Yup from 'yup';

const YupBadge = {
    store: Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required()
    }),
    
    add: Yup.object().shape({
        id_resident: Yup.number().required().positive().integer(),
        id_seal: Yup.number().required().positive().integer()
    })
}

export default YupBadge;