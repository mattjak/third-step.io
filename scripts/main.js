const buttonLink = document.getElementById("modal-button");
const containerLink = document.getElementById("modal-window");
const closeBtn = document.getElementById('close-modal-btn');
const createCart = document.getElementById('create-cart');
const cartLink = document.getElementById('cart');
const cartFieldLink = document.getElementById('card-field');

class DoctorVisit {
    constructor(visitAim, name, type) {
        this.visitAim = visitAim;
        this.name = name;
        this.type = type;
        this.html = `
<span>${this.visitAim}</span>
`;
    }

    render() {
        containerLink.style.display = 'none';

        const cart = document.createElement('div');
        cart.className += 'cart';
        const cartFieldLink = document.getElementById('card-field');
        cart.innerHTML = `
            <span>${this.name}</span>
            <span>${this.type}</span>
        `;
        cartFieldLink.appendChild(cart);


        const showMoreButton = document.createElement("button");
        const deleteButton = document.createElement('button');
        showMoreButton.className = 'show-del-button';
        showMoreButton.innerHTML = 'Show More';
        deleteButton.className = 'show-del-button';
        deleteButton.innerHTML = 'Delete';

        const self = this;

        showMoreButton.addEventListener("click", function () {
            self.showMore(cart);
        });

        deleteButton.addEventListener("click", function () {
            cart.remove();
        });

        cart.appendChild(deleteButton);
        cart.appendChild(showMoreButton);

    }

    showMore(elem) {
        const span = document.createElement("span");
        span.innerHTML = this.html;
        elem.appendChild(span);
    }
}

class Cardio extends DoctorVisit {
    constructor(visitAim, name, pressure, illnesses, age) {
        super(visitAim, name, "Кардиолог");
        this.pressure = pressure;
        this.illnesses = illnesses;
        this.age = age;
        this.html += `
<span>${this.pressure}</span>
<span>${this.illnesses}</span>
<span>${this.age}</span>
        `;
        this.render();
    }
}

class Dentist extends DoctorVisit {
    constructor(visitAim, name, lastVisit) {
        super(visitAim, name, "Стоматолог");
        this.lastVisit = lastVisit;
        this.html += `
        <span>${this.lastVisit}</span>
        `;
        this.render();
    }
}

class Therapist extends DoctorVisit {
    constructor(visitAim, name, age) {
        super(visitAim, name, "Терапевт");
        this.age = age;
        this.html += `
        <span>${this.age}</span>

        `;
        this.render();
    }
}

function docVisit() {
    const inputs = [...document.getElementsByClassName('input-style')];
    inputs.filter(function (item) {
        return item.style.display !== "none"
    }).forEach(function (item) {
       item.value = "";
    });

    let docList = document.getElementById('doctor-option');
    let userChoose = docList.options[docList.selectedIndex].value;
    if (userChoose === 'dentist') {
        visit.style.display = 'block';
        lastVisit.style.display = 'block';
        fullName.style.display = 'block';
        pressure.style.display = 'none';
        bodyIndex.style.display = 'none';
        heart.style.display = 'none';
        age.style.display = 'none';
    }
    if (userChoose === 'therapist') {
        age.style.display = 'block';
        visit.style.display = 'block';
        fullName.style.display = 'block';
        lastVisit.style.display = 'none';
        pressure.style.display = 'none';
        bodyIndex.style.display = 'none';
        heart.style.display = 'none';
    }
    if (userChoose === 'cardiology') {
        visit.style.display = 'block';
        lastVisit.style.display = 'none';
        pressure.style.display = 'block';
        bodyIndex.style.display = 'block';
        heart.style.display = 'block';
        age.style.display = 'block';
        fullName.style.display = 'block';
    }
}

let visit = document.getElementById('visit-aim');
let pressure = document.getElementById('pressure');
let bodyIndex = document.getElementById('bodyIndex');
let heart = document.getElementById('heart-illnesses');
let age = document.getElementById('age');
let fullName = document.getElementById('name');
let lastVisit = document.getElementById('last-visit-date');
buttonLink.addEventListener("click", function () {
    containerLink.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
    containerLink.style.display = 'none';
});
// createCart.addEventListener('click', function () {
//     const newCard = document.createElement('div');
//     const newCardLink = document.getElementsByClassName('cart');
//     const showMoreButton = document.createElement("button");
//     const deleteButton = document.createElement('button');
//     newCard.className += 'cart';
//     newCard.innerHTML = 'Создалась новая карточка';
//     cartFieldLink.appendChild(newCard);
//     containerLink.style.display = 'none';
//     showMoreButton.className += 'show-del-button';
//     showMoreButton.innerHTML = 'Show More';
//     deleteButton.className += 'show-del-button';
//     deleteButton.innerHTML = 'Delete';
//     for (let i = 0; i < newCardLink.length; i++) {
//         newCardLink[i].appendChild(deleteButton);
//         newCardLink[i].appendChild(showMoreButton);
//     }
// });
createCart.addEventListener("click", function () {
    let value = {};
    let docList = document.getElementById('doctor-option');
    let userChoose = docList.options[docList.selectedIndex].value;
    const inputs = [...document.getElementsByClassName('input-style')];

    inputs.filter(function (item) {
       return item.style.display !== "none"
    }).forEach(function (item) {
       value[item.id] = item.value;
    });

    if (userChoose === 'dentist') {
        const dentistVisit = new Dentist(value["visit-aim"], value.name, value["last-visit-date"]);
    } else if (userChoose === 'therapist') {
        const therapistVisit = new Therapist(value["visit-aim"], value.name, value.age);
    } else if (userChoose === 'cardiology') {
        const cardiologyVisit = new Cardio(value["visit-aim"], value.name, value.pressure, value["heart-illnesses"], value.age);
    }
});
createCart.addEventListener("click", function () {

});