import { defineStore } from 'pinia'

export const useThemes = defineStore('themes', {
  state: () => {
    return {
      currentTheme: 'base',
    }
  }
})