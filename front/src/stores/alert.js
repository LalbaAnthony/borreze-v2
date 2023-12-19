import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    loading: true,
    alert: {
      id: 1,
      title: 'Le haut débis est là ! 🎉',
      content: 'Dès le 1er juin, contactez  votre fournisseur d\'accès à internet pour en bénéficier.',
      ctaLink: '',
    },
    isOpen: false,
    seen: true,
  }),

  actions: {
    closeAlert() {
      this.isOpen = false
      this.seen = true
      localStorage.setItem(`alertBorrezeSeen${this.alert.id}`, true)
    },

    async fetchAlert() {
      this.loading = true
      // const response = await fetch('http://localhost:3000/alert')
      // this.alert = await response.json()
      this.loading = false
    },
  },
})
