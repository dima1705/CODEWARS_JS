const isPangram = (str) => {
    str = str.toLowerCase()
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]]) {
            count[str[i]]++
        } else {
            count[str[i]] = 1
        }
    }
    for (let i = 97; i < 123; i++) {
        if (!count[String.fromCharCode(i)]) {
            return false
        }
    }
    return true
}


console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))