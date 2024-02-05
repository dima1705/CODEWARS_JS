const rentalCarCost = (d) => {
    const rent = 40
    if (d < 3) {
      return d * rent
    } else if (d >= 3 && d < 7) {
      return d * rent - 20
    } else if (d >= 7)
      return d * rent - 50
    

  }


console.log(rentalCarCost(3))