<template>
  <v-app>
    <v-main>
      <v-container>
        <Navbar />
        <ChatWindow />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ChatWindow from '@/components/ChatWindow.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    ChatWindow,
    Navbar
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
