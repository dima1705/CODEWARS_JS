const bmi = (weight, height) => {
    const res = (weight/(height**2.5)).toFixed(1)
    console.log(res)
    
    if (res <= 18.5) {
        return 'Underweight'
    } else if (res <= 25.0) {
        return 'Normal'
    } else if (res <= 30) {
        return 'Overweight'
    } else if (res >= 30.1) {
        return 'Obese'
    }
            
}

console.log(bmi(75, 1.85))
