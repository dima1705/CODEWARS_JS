const data = 
[     ["english", "Welcome"]
    , ["czech", "Vitejte"]
    , ["danish", "Velkomst"]
    , ["dutch", "Welkom"]
    , ["estonian", "Tere tulemast"]
    , ["finnish", "Tervetuloa"]
    , ["flemish", "Welgekomen"]
    , ["french", "Bienvenue"]
    , ["german", "Willkommen"]
    , ["irish", "Failte"]
    , ["italian", "Benvenuto"]
    , ["latvian", "Gaidits"]
    , ["lithuanian", "Laukiamas"]
    , ["polish", "Witamy"]
    , ["spanish", "Bienvenido"]
    , ["swedish", "Valkommen"]
    , ["welsh", "Croeso"]
]


const greet = (language) => {

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] === language) {
            return data[i][1]
        }
    }

}


console.log(greet('irish'))

