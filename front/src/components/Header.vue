<template>
  <header>
    <router-link to="/">
      <h1 class="main-title">Borrèze</h1>
    </router-link>
    <div v-if="!mobile" class="quick-access">
      <div class="quick-access-list">
        <a href="tel:+33553288338">
          <IconTelephone class="quick-acces-icon icon-offset" />
          <p>Appeler</p>
        </a>
        <a href="mailto:mairie.borreze@wanadoo.fr">
          <IconEnvelope class="quick-acces-icon icon-offset" />
          <p>E-mail</p>
        </a>
        <a href="https://www.facebook.com/MairiedeBorreze/" target="_blank" rel="noopener noreferrer">
          <IconFacebook class="quick-acces-icon icon-offset" />
          <p>Facebook</p>
        </a>
      </div>
    </div>
    <img class="header-image" src="/img/borreze-header-cropped.jpg" alt="Image de fond de Borrèze">
    <!-- <div v-if="mobile"> -->
      



    <div class="menu-list">
      <router-link v-for="item in menu" :key="item.slug" :to="item.path"
        :class="route.name === item.slug ? 'selected' : ''">
        <component class="icon-offset" :is="getComponent(item.icon)" />
        {{ item.name }}
      </router-link>
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
import IconTelephone from './icons/IconTelephone.vue'
import IconFacebook from './icons/IconFacebook.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
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

/* DESKTOP */
@media (min-width: 767px) {
  h1.main-title {
    font-size: 80px;
  }

  h1.main-title:after {
  transform: translate(0, -30px);
}
}

/* MOBILE */
@media (max-width: 767px) {
  h1.main-title {
    font-size: 60px;
  }

  h1.main-title:after {
    transform: translate(0, -20px);
  }

  .quick-access {
    display: none;
  }

  .menu-list {
    flex-direction: column;
    align-items: center;
  }

  .menu-list>* {
    /* padding: 0.5rem 0; */
    width: 100%;
  }
  .menu-list>*:last-child {
border-bottom: solid 2px var(--primary);
  }
}

h1.main-title {
  color: var(--light);
  position: absolute;
  top: 40px;
  left: 10%;
  font-family: 'Rethink Sans', 'Roboto';
  z-index: 1;
  text-shadow: 1px 1px 2px black;
}

h1.main-title:after {
  content: "";
  display: block;
  width: 120px;
  height: 5px;
  background-color: var(--primary);
  margin: 0.5rem auto;
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

.quick-access-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px;
}

.quick-access-list>* {
  color: var(--light);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.25rem;
}

.quick-access-list>*:hover {
  scale: 1.1;
  transition: all 0.2s ease-in-out;
}

.quick-acces-icon {
  margin: 0 auto;
}

img.header-image {
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
  padding: 0.5rem 5%;
}

.menu-list>*:hover,
.menu-list>*.selected {
  background-color: var(--light);
  color: var(--primary);
  transition: all 0.2s ease-in-out;
}

.icon-offset {
  position: relative;
  top: 2px;
  right: 5px;
}
</style>
