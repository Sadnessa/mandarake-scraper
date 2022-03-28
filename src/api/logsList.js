let logs = {
  1: [
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
    },
    
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
    },
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
    },
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