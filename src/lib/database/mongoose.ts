import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0
}

export const connectDB = async() => {

    if ( mongoConnection.isConnected ) {
        console.log('Ya estabamos conectados');
        return;
    }

    if ( mongoose.connections.length > 0 ) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if ( mongoConnection.isConnected === 1 ) {
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect( 'mongodb+srv://mannprogrammingok:5mffOVXjSdlIHRr7@cluster0.r7fsdz6.mongodb.net/' || '');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', 'mongodb+srv://mannprogrammingok:5mffOVXjSdlIHRr7@cluster0.r7fsdz6.mongodb.net/' );
}

export const disconnectDB = async() => {
    
    if ( process.env.NODE_ENV === 'development' ) return;

    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    console.log('Desconectado de MongoDB');
}