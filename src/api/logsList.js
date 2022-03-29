let logs = {
  1: [
    {
      price: 100,
      date: "May"
    },

    {
      price: 200,
      date: "Jun"
    },

    {
      price: 500,
      date: "rerwe"
    },
    
    {
      price: 100,
      date: "rerwe"
    },

    {
      price: 50,
      date: "rerwe"
    },

    {
      price: 400,
      date: "ьу"
    },
  ],

  2: [
    {
      price: 43243,
      date: "rerwe"
    },

    {
      price: 43243,
      date: "rerwe"
    },

    {
      price: 43243,
      date: "rerwe"
    }
  ],
}

export function getLogs(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(logs[id])
    }, 100)
  })
}