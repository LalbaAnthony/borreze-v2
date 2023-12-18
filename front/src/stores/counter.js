import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    loading: true,
  }),

  actions: {
    async loadTasks() {
      this.loading = true

      const gottenTasks = [
        {
          id: 101,
          assignedDate: '2023-07-30',
          libelle: "Learn HTML",
          positionInDay: 1,
          createdDate: '2023-08-01',
          done: true,
        },
        {
          id: 102,
          assignedDate: '2023-06-30',
          positionInDay: 2,
          libelle: "Learn CSS",
          createdDate: '2023-07-11',
          done: false,
        },
        {
          id: 103,
          assignedDate: '2023-07-30',
          positionInDay: 3,
          libelle: "Learn JS",
          createdDate: '2023-07-12',
          done: false,
        }
      ]


      // Sort
      this.tasks = gottenTasks.slice().sort((a, b) => {
        return new Date(a.assignedDate) - new Date(b.assignedDate);
      });


      // try {
      //   // ...
      // }
      // catch (error) {
      //   console.log('error', error)
      // }
      this.loading = false
    },

    toggleCheckTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId)
      task.done = !task.done
    },

    // async updateTask(id, params) {
    //   let response = null
    //   try {
    //     this.loading = true
    //     // ...
    //   }
    //   catch (error) {
    //     // console.log('error', error)
    //   }
    //   this.loading = false
    //   return response ? response : null
    // },

    // async deleteTask(id, params) {
    //   let response = null
    //   try {
    //     this.loading = true
    //     // ...
    //   }
    //   catch (error) {
    //     // console.log('error', error)
    //   }
    //   this.loading = false
    //   return response ? response : null
    // },

  },
})
