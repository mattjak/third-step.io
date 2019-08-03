const buttonLink = document.getElementById("modal-button");
const containerLink = document.getElementById("modal-window");
const closeBtn = document.getElementById('close-modal-btn');
const createCart = document.getElementById('create-cart');
const cartLink = document.getElementById('cart');
const cartFieldLink = document.getElementById('card-field');
class DoctorVisit {
    constructor(visitAim, dataVisit, name) {
        this.visitAim = visitAim;
        this.dataVisit = dataVisit;
        this.name = name;
        this.html = `
<span>${this.name}</span>
<span>${this.visitAim}</span>
<span>${this.dataVisit}</span>
`;
    }
    render() {
        const cart = document.createElement('div');
        cart.className += 'cart';
        const cartFieldLink = document.getElementById('card-field');
        cartFieldLink.appendChild(cart);
        cart.innerHTML = this.html;
    }
}
class Cardio extends DoctorVisit {
    constructor(visitAim, dataVisit, name, pressure, illnesses, age) {
        super(visitAim, dataVisit, name);
        this.pressure = pressure;
        this.illnesses = illnesses;
        this.age = age;
        this.html +=`
<span>${this.pressure}</span>
<span>${this.illnesses}</span>
<span>${this.age}</span>
        `;
        this.render();


    }
}
class Dentist extends DoctorVisit {
    constructor(visitAim, dataVisit,name,lastVisit) {
        super(visitAim, dataVisit,name);
        this.lastVisit = lastVisit;
        this.html += `
        <span>${this.lastVisit}</span>
        ` ;
        this.render();


    }
}
class Therapist extends DoctorVisit {
    constructor(visitAim, dataVisit, name, age) {
        super(visitAim, dataVisit, name);
        this.age = age;
        this.html += `
                <span>${this.age}</span>

        `;
        this.render();


    }
}
function docVisit() {
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
    let value = [];
    let docList = document.getElementById('doctor-option');
    let userChoose = docList.options[docList.selectedIndex].value;
    const inputs = document.getElementsByClassName('input-style');

    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].style.display !== "none"){
            value.push(inputs[i].value)
        }
    }
    const doctorVisit = new DoctorVisit(value[0], value[1], value[2],);
    if (userChoose === 'dentist') {

        const dentistVisit = new Dentist(value[0], value[1], value[2]);
    }
    else if (userChoose === 'therapist') {
        const therapistVisit = new Therapist(value[0], value[1], value[2]);
    }
    else if (userChoose === 'cardiology') {
        const cardiologyVisit = new Cardio(value[0], value[1], value[2], value[3], value[4], value[5]);
    }
});


