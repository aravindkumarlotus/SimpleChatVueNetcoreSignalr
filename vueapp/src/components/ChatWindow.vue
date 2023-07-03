<template>
    <v-overlay :model-value="overlay" class="align-center justify-center overlay-style" :size="110" :width="9" persistent>
        <v-progress-circular color="dark-blue" indeterminate size="64">
            <v-icon>mdi-penguin</v-icon>
        </v-progress-circular>
    </v-overlay>

    <v-card class="Custom-card" variant="outlined">
        <v-card-title class="cardtitle empty-title">
            <v-icon>mdi-forum-outline</v-icon>
            <span>User</span>
        </v-card-title>
        <v-card-text class="chatbody">
            <div v-for="message in messages" :key="message">
                {{ message }}
            </div>
        </v-card-text>
        <v-card-actions>
            <v-text-field label="Send message ..." variant="outlined" v-model="newMessage"
                append-inner-icon="mdi-send-outline" @click:append-inner="sendMessage"></v-text-field>
        </v-card-actions>
    </v-card>
</template>
  
<script>
import signalrService from '@/signalrService';

export default {
    data() {
        return {
            messages: [],
            receivedMessage: '',
            newMessage: '',
            overlay: true,
        };
    },

    mounted() {
        setTimeout(() => {
            this.overlay = !this.overlay;
        }, 500);
        signalrService.startConnection().then(() => {
            signalrService.onMessageReceived(this.handleMessageReceived);
        });
    },

    methods: {
        handleMessageReceived(message) {
            this.messages.push(message);
            console.log("recieved ",message)
        },

        sendMessage() {
            if (this.newMessage) {
                signalrService.sendMessage(this.newMessage);
                this.newMessage = '';
            }
        },
        updateReceivedMessage(message) {
            this.receivedMessage = message;
            this.messages.push(message);

        }
    }
};
</script>
<style>
.Custom-card {
    height: 86vh;
}

.Custom-card1 {
    height: 30vh;
}

.Custom-card2 {
    height: 53vh;
}

.room-add {
    float: right;
    right: 0;
}

.room_list {
    overflow: auto;
    height: 20vh;
}

.room_list_1 {
    overflow: auto;
    height: 40vh;
}

.overlay-style {
    opacity: 1;
    background-color: white;
}

.chatbody {
    height: 69vh;
    border-bottom: 1px solid;
}

.cardtitle {
    border-bottom: 1px solid;
}

.prependIcon {
    margin-right: 10px !important;
}

.empty-title {
    height: 7vh;
}
</style>