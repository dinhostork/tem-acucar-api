import multer from 'multer';
import {extname, resolve} from 'path';
import crypto from 'crypto';

export default {
    avatar: {
        storage: multer.diskStorage({
            destination: resolve(__dirname, '..', '..', 'uploads/avatars/'),
            filename: (req, file, cb) => {
                crypto.randomBytes(16, (error, res) => {
                    return cb(null, res.toString('hex') + extname(file.originalname));
                })
            }
        })
    }
}
