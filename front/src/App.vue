<template>
  <Alert />
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import Alert from './components/Alert.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'

</script>
