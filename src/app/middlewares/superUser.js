require('dotenv').config();

export default async(req, res, next) => {
   const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send({error: "token não enviado"});
    }

    const [, token] = authHeader.split(' ');

    try{
        if(token == process.env.SUPERADMIN_KEY)
        return next();
    } catch(error) {
        return res.status(401).send({error: "Apenas moderadores podem fazer isso"});

    }
}