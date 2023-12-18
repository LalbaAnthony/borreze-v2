<template>
  <header v-if="!mobile">
    <router-link to="/">
      <h1 class="main-title">Borrèze</h1>
    </router-link>
    <div class="quick-access">
      LIENS PRATIQUES
    </div>
    <img class="menu-image" src="/img/borreze-header-cropped.jpg" alt="Image de fond de Borrèze">
    <div class="menu-list">
      <router-link v-for="item in menu" :key="item.slug" :to="item.path">
        <component class="menu-icon" :is="getComponent(item.icon)" />
        {{ item.name }}
      </router-link>
    </div>
  </header>
  <header v-else>
    <div>
      hey
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { isMobile } from '../helpers/helpers.js'
import IconHouse from './icons/IconHouse.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconBuilding from './icons/IconBuilding.vue'
import IconInfoCircle from './icons/IconInfoCircle.vue'
import IconEnvelope from './icons/IconEnvelope.vue'

const mobile = isMobile()
const menu = ref([
  {
    name: 'Accueil',
    slug: 'accueil',
    path: '/',
    icon: 'IconHouse',
  },
  {
    name: 'Actualités',
    slug: 'actualites',
    path: '/actualites',
    icon: 'IconCalendar',
  },
  {
    name: 'Salles des fêtes',
    slug: 'salles-des-fetes',
    path: '/salles-des-fetes',
    icon: 'IconBuilding',
  },
  {
    name: 'À propos',
    slug: 'a-propos',
    path: '/a-propos',
    icon: 'IconInfoCircle',
  },
  {
    name: 'Contact',
    slug: 'contact',
    path: '/contact',
    icon: 'IconEnvelope',
  },
])

const getComponent = (icon) => {
  switch (icon) {
    case 'IconHouse':
      return IconHouse;
    case 'IconCalendar':
      return IconCalendar;
    case 'IconBuilding':
      return IconBuilding;
    case 'IconInfoCircle':
      return IconInfoCircle;
    case 'IconEnvelope':
      return IconEnvelope;
    default:
      return null;
  }
};

// function toggleSidePanel() {
//   sidePanelOpened.value = !sidePanelOpened.value;
// }

// function closeSidePanel() {
//   sidePanelOpened.value = false;
// }

</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

h1.main-title {
  color: var(--light);
  position: absolute;
  top: 40px;
  left: 10%;
  font-family: 'Rethink Sans', 'Roboto';
  font-size: 80px;
  z-index: 1;
  text-shadow: 1px 1px 2px black;
}

/* h1.main-title::before {
  content: 'Commune';
  font-size: 13px;
  position: absolute;
  top: 54px;
  left: -40px;
  rotate: -90deg;
} */

h1.main-title:after {
  content: "";
  display: block;
  width: 120px;
  height: 5px;
  background-color: var(--primary);
  margin: 0.5rem auto;
  transform: translate(0, -30px);
  opacity: 1;
  animation-name: slideAndOpacity;
  animation-duration: 0.5s;
}

@keyframes slideAndOpacity {
  0% {
    opacity: 0;
    transform: translate(-300px, -30px);
  }

  100% {
    opacity: 1;
    transform: translate(0px, -30px);
  }
}

.quick-access {
  position: absolute;
  color: var(--light);
  background-color: rgba(0, 0, 0, .35);
  top: 0;
  right: 10%;
  font-family: 'Rethink Sans', 'Roboto';
  padding: 1rem;
  height: 200px;
  z-index: 1;
}

img.menu-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  filter: brightness(50%)
}

.menu-list {
  background-color: var(--primary);
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-list>* {
  background-color: var(--primary);
  color: var(--light);
  padding: 0.5rem 2rem;
}

.menu-list>*:hover {
  background-color: var(--light);
  color: var(--primary);
  transition: all 0.2s ease-in-out;
}

.menu-icon {
  position: relative;
  top: 2px;
  right: 5px;
}
</style>
