import { defineStore } from 'pinia'
import { addItem, deleteItem, itemList } from '../api'

export const useCards = defineStore('cards', {
  state: () => {
    return {
      cards: [],
      isLoading: false,
    }
  },

  actions: {
    loadCards() {
      this.isLoading = true
      itemList().then((value) => {
        this.cards = value;
      }).then(() => this.isLoading = false);
    },

    deleteItem(deletedID) {
      deleteItem(deletedID).then((value) => {
        this.cards = value;
      });
    },

    addItem(link) {
      addItem(link).then((value) => {
        this.cards = value;
      });
    },
  }
})