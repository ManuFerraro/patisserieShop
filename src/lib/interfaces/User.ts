import { ObjectId } from "mongoose";

export interface IHistorialPedido {
    ordenId: ObjectId;
    fecha: Date;
    // Otros campos según sea necesario
}

interface ICarritoItem {
    productoId: ObjectId;
    cantidad: number;
}

export interface IUser {
    _id: string
    username: string;
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    isVerfied: boolean;
    isAdmin: boolean;
    forgotPasswordToken: string | undefined;
    forgotPasswordTokenExpiry: Date | undefined;
    verifyToken: string | undefined;
    verifyTokenExpiry: Date | undefined;
    direcciones?: {
        calle: string;
        numero: string;
        ciudad: string;
        codigoPostal: string;
    };
    historialPedidos?: IHistorialPedido[];
    carrito?: ICarritoItem[];
}

export interface IUserAndToken {
    _id: string
    username: string;
    email: string;
    password?: string;
    nombre?: string;
    apellido?: string;
    isVerfied: boolean;
    isAdmin: boolean;
    direcciones?: {
        calle: string;
        numero: string;
        ciudad: string;
        codigoPostal: string;
    };
    historialPedidos?: IHistorialPedido[];
    carrito?: ICarritoItem[];
}