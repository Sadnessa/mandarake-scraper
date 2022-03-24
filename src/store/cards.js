import { defineStore } from 'pinia'
import { addItem, deleteItem, itemList } from '../api'

export const useCards = defineStore('cards', {
  state: () => {
    return { 
      cards: [],
    }
  },

  actions: {
    loadCards() {
      itemList().then((value) => {
        this.cards = value;
      });
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