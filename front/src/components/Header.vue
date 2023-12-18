<template>
  <header>
  header
  </header>

</template>

<script setup>
import { ref } from 'vue'

defineProps({
  alerteMessage: {
    type: String,
    required: false
  }
})

const sidePanelOpened = ref(false)
// const mainMenu = ref([
//   {
//     name: 'Accueil',
//     slug: 'accueil',
//     // icon: 'list-check.svg',
//     path: '/'
//   },
// ])

// function toggleSidePanel() {
//   sidePanelOpened.value = !sidePanelOpened.value;
// }

// function closeSidePanel() {
//   sidePanelOpened.value = false;
// }

</script>

<style scoped>
header {
  background-color: var(--primary);
  color: var(--vt-c-white);
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.header-burger-menu {
  width: 40px;
  height: 40px;
  left: 0%;
  border-radius: 0.5rem;
  background-color: var(--primary);
}

.header-content {
  width: 100%;
  display: flex;
}

.header-title {
  font-size: 1em;
  font-weight: 500;
  margin: auto;
  padding: 0;
  line-height: 10px;
  text-decoration: none;
  color: var(--vt-c-white);
  display: flex;
  animation-name: title-anim;
  animation-duration: 0.5s;
}

.header-title-first {
  padding-top: 0;
  padding-bottom: 0;
  animation-name: title-anim;
  animation-duration: 0.4s;
}

.header-title-second {
  padding: 0;
  animation-name: title-anim;
  animation-duration: 0.7s;
}

@keyframes title-anim {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.side-panel {
  position: fixed;
  top: 0;
  left: -400px;
  width: 300px;
  height: 100%;
  background-color: var(--vt-c-white);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  transition: left 0.2s ease-in-out;
  z-index: 15;
  padding: 1rem;
  pointer-events: auto;
}

.side-panel.open {
  left: 0;
}

.side-panel-close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.side-panel-item {
  font-size: 1.2em;
  font-weight: 500;
  margin: 2rem;
  padding: 5px 3px 5px 3px;
  text-decoration: none;
  display: flex;
  border-radius: 0.5rem;
}

.side-panel-item.selected {
  background-color: var(--primary);
  color: var(--vt-c-white);
}

.side-panel-item-icon {
  width: 30px;
  height: 30px;
  padding: 5px;
  /* SAME AS PRIMARY - Got with: https://change-svg-color.vercel.app/ */
  filter: invert(35%) sepia(42%) saturate(2798%) hue-rotate(218deg) brightness(104%) contrast(99%);
}

.side-panel-item-icon.selected {
  /* WHITE - Got with: https://change-svg-color.vercel.app/ */
  filter: invert(100%) sepia(3%) saturate(7%) hue-rotate(352deg) brightness(105%) contrast(101%);
}

.side-panel-item-name {
  margin: auto;
  padding: 2px;
}
</style>
