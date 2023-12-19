<template>
  <div class="darken-background" v-if="alertStore.isOpen" />
  <div v-if="alertStore.isOpen" id="dialog">
    <h4 class="dialog-title">{{ alertStore.alert.title }}</h4>
    <p class="dialog-content">{{ alertStore.alert.content }}</p>
    <div class="dialog-cta">
      <button class="button negative" @click="alertStore.closeAlert()">Fermer</button>
      <button v-if="alertStore.alert.ctaLink" class="button positive" @click="openLink(alertStore.alert.ctaLink)">Voir</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAlertStore } from '../stores/alert'

const alertStore = useAlertStore()

onMounted(() => {
  alertStore.fetchAlert()
  if (localStorage.getItem(`alertBorrezeSeen${alertStore.alert.id}`) !== 'true') {
    alertStore.seen = false
    alertStore.isOpen = true
  }
})

function openLink(link) {
  window.location = link
}

</script>

<style scoped>
.darken-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;
}

#dialog {
  background-color: var(--light);
  border-radius: 20px;
  width: 500px;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  z-index: 1000;
}

.dialog-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.dialog-content {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.dialog-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
