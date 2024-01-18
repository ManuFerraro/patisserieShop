import mongoose, { Model } from "mongoose";
import { IUser } from "../interfaces/User";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
          ],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    image: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    direcciones: [
        {
            calle: String,
            numero: String,
            ciudad: String,
            codigoPostal: String,
        },
    ],
    historialPedidos: [
        {
            ordenId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Orden",
            },
            fecha: Date,
        },
    ],
    carrito: [
        {
            productoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Producto",
            },
            cantidad: Number,
        },
    ],

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User: Model<IUser> = mongoose.models.User || mongoose.model("User", userSchema);

export default User;