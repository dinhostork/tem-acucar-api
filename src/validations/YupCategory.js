import Yup from 'yup';

const YupBadge = {
    store: Yup.object().shape({
        category: Yup.string().required()
    }),
    
    update: Yup.object().shape({
        category: Yup.string().required()
    })
}

export default YupBadge;