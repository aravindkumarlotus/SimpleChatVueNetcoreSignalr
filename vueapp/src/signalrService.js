import { HubConnectionBuilder } from '@microsoft/signalr';

const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:7249/chathub') // Replace with your API URL
    .build();

export default {
    async startConnection() {
        try {
            await connection.start();
            const connectionId = connection.connectionId; // Retrieve the connection ID
            // Pass the connection ID to your backend API for authentication/authorization, if required
            console.log('SignalR connected. Connection ID:', connectionId);
        } catch (error) {
            console.error('Error starting SignalR connection:', error);
        }
    },

    sendMessage(message) {
        connection.invoke('SendMessage', message);
    },

    onMessageReceived(callback) {
        connection.on('ReceiveMessage', (message) => {
            callback(message);
        });
    },


};
