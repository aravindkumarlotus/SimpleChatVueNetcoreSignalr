<template>
    <div>
        <v-app-bar color="blue-grey-darken-3" prominent>
            <v-toolbar-title>CHatHub</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="text-none" stacked>
                <v-badge :content="newMessageCount" color="error">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
            </v-btn>
        </v-app-bar>
    </div>
</template>
  
<script>
import signalrService from '@/signalrService';

export default {
    data() {
        return {
            newMessageCount: 0
        };
    },

    mounted() {
        signalrService.onMessageReceived(() => {
            this.newMessageCount++;
        });
    }
};
</script>
  