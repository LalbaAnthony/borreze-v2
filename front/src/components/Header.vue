<template>
  <header>
    <div v-if="!mobile">
      hey
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { isMobile } from '../helpers/helpers.js'

defineProps({
  alerteMessage: {
    type: String,
    required: false
  }
})

const mobile = isMobile()
const menu = ref([
  {
    name: 'Accueil',
    slug: 'accueil',
    path: '/',
    icon: '',
  },
  {
    name: 'Actualités',
    slug: 'actualites',
    path: '/actualites',
    icon: '',
  },
  {
    name: 'Salles de fêtes',
    slug: 'salles-des-fetes',
    path: '/salles-des-fetes',
    icon: '',
  },
  {
    name: 'À propos',
    slug: 'a-propos',
    path: '/a-propos',
    icon: '',
  },
  {
    name: 'Contact',
    slug: 'contact',
    path: '/contact',
    icon: '',
  },
])

// function toggleSidePanel() {
//   sidePanelOpened.value = !sidePanelOpened.value;
// }

// function closeSidePanel() {
//   sidePanelOpened.value = false;
// }

</script>

<style scoped>
header {
  color: var(--vt-c-white);
  padding: 0.5rem;
  align-items: center;
}
</style>
