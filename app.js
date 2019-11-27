const FoodDB = [
    {
        nama: 'Soto Ayam',
        info: {
            budget: 'murah',
            jenis: 'tradisional',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Nasi Goreng',
        info: {
            budget: 'murah',
            jenis: 'tradisional',
            tipe: 'kering'
        }
    },
    {
        nama: 'Tengkleng',
        info: {
            budget: 'medium',
            jenis: 'tradisional',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Ikan Cakalang',
        info: {
            budget: 'medium',
            jenis: 'tradisional',
            tipe: 'kering'
        }
    },
    {
        nama: 'Sop Buntut',
        info: {
            budget: 'mahal',
            jenis: 'tradisional',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Ingkung',
        info: {
            budget: 'mahal',
            jenis: 'tradisional',
            tipe: 'kering'
        }
    },
    {
        nama: 'Salad',
        info: {
            budget: 'murah',
            jenis: 'western',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Fried Chicken',
        info: {
            budget: 'murah',
            jenis: 'western',
            tipe: 'kering'
        }
    },
    {
        nama: 'Pot Roast',
        info: {
            budget: 'medium',
            jenis: 'western',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Burger',
        info: {
            budget: 'medium',
            jenis: 'western',
            tipe: 'kering'
        }
    },
    {
        nama: 'Bouillabaisse',
        info: {
            budget: 'mahal',
            jenis: 'western',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Pizza',
        info: {
            budget: 'mahal',
            jenis: 'western',
            tipe: 'kering'
        }
    },
    {
        nama: 'Capcay',
        info: {
            budget: 'murah',
            jenis: 'asian',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Sushi',
        info: {
            budget: 'murah',
            jenis: 'asian',
            tipe: 'kering'
        }
    },
    {
        nama: 'Mie Ramen',
        info: {
            budget: 'medium',
            jenis: 'asian',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Yakiniku',
        info: {
            budget: 'medium',
            jenis: 'asian',
            tipe: 'kering'
        }
    },
    {
        nama: 'Tomyam',
        info: {
            budget: 'mahal',
            jenis: 'asian',
            tipe: 'kuah'
        }
    },
    {
        nama: 'Beef Bulgogi',
        info: {
            budget: 'mahal',
            jenis: 'asian',
            tipe: 'kering'
        }
    },
    
]

var input = {}
var result = []

function setBudget(budget) {
    input['budget'] = budget
    showJenisQuestion()
}

function setJenis(jenis) {
    input['jenis'] = jenis
    showTipeQuestion()
}

function setTipe(tipe) {
    input['tipe'] = tipe
    getResult()
}

function showBudgetQuestion() {
    document.getElementById("question").innerHTML = 'Harga?'
    document.getElementById("option-container").innerHTML =
        `<div onclick="setBudget('murah');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/makan-apa-hari-ini/assets/img/cheap.png')">
        <h2 class="option-text">Murah</h2>
    </div>
    <div onclick="setBudget('medium');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/makan-apa-hari-ini/assets/img/medium.jpg')">
        <h2 class="option-text">Medium</h2>
    </div>
    <div onclick="setBudget('mahal');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/makan-apa-hari-ini/assets/img/expensive.jpg')">
        <h2 class="option-text">Mahal</h2>
    </div>`
}

function showJenisQuestion() {
    document.getElementById("question").innerHTML = 'Jenis Makanan?'
    document.getElementById("option-container").innerHTML =
        `<div onclick="setJenis('tradisional');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/makan-apa-hari-ini/assets/img/traditional.jpg')">
        <h2 class="option-text">Tradisional</h2>
    </div>
    <div onclick="setJenis('asian');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/makan-apa-hari-ini/assets/img/asian.jpeg')">
        <h2 class="option-text">Asian</h2>
    </div>
    <div onclick="setJenis('western');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/makan-apa-hari-ini/assets/img/western.jpeg')">
        <h2 class="option-text">Western</h2>
    </div>`
}

function showTipeQuestion() {
    document.getElementById("question").innerHTML = 'Kuah atau Kering?'
    document.getElementById("option-container").innerHTML =
        `<div onclick="setTipe('kuah');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/makan-apa-hari-ini/assets/img/wetfood.jpeg')">
        <h2 class="option-text">Kuah</h2>
    </div>
    <div onclick="setTipe('kering');" class="option" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/makan-apa-hari-ini/assets/img/dryfood.jpeg')">
        <h2 class="option-text">Kering</h2>
    </div>`
}

function getResult() {
    result = FoodDB.filter(food => {
        return food.info.budget == input.budget &&
            food.info.jenis == input.jenis &&
            food.info.tipe == input.tipe
    }).map(x => x.nama)

    if (result.length == 0) {
        document.getElementById("question").innerHTML = 'Sayang sekali kami tidak dapat menemukan makananmu :('
    } else {
        document.getElementById("question").innerHTML = `Makananmu hari ini adalah: </br>${result}`
    }
    document.getElementById("option-container").innerHTML = ''
}

