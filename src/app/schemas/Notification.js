import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    id_user: {
        type: Number,
        required: true
    },

    read: {
        type: Boolean,
        required: true,
        default: false
    }

},
{
    timestamps: true
})

export default mongoose.model("Notification", NotificationSchema);