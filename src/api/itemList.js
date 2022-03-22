let items = [
  {
    id: 1,
    title: "Mandarake",
    price: "4000",
    date: "20 JUN 2021",
  },

  {
    id: 2,
    title: "Ыыы",
    price: "4000",
    date: "20 JUN 2021",
  },
  {
    id: 3,
    title: "Mandarake",
    price: "4000",
    date: "20 JUN 2021",
  },

  {
    id: 4,
    title: "Ыыы",
    price: "4000",
    date: "20 JUN 2021",
  },
  {
    id: 5,
    title: "Mandarake",
    price: "4000",
    date: "20 JUN 2021",
  },

  {
    id: 6,
    title: "Ыыы",
    price: "4000",
    date: "20 JUN 2021",
  },
]

export function itemList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items)
    }, 100)
  })

}

export function addItem(link) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items = [...items]
      items.push({
        id: items.length+1,
        title: link,
        price: "4000",
        date: "20 JUN 2021",
      })
      resolve(items)
    }, 100)
  })
}

export function deleteItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items = items.filter((i) => {
        return id !== i.id
      })
      resolve(items)
    }, 100)
  })
}