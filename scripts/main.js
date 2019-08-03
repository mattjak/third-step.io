class DoctorVisit {
    constructor(visitAim,dataVisit,name ){
        this._visitAim = visitAim;
        this._dataVisit = dataVisit;
        this._name = name;
    }
    get visitAim() {
        return this._visitAim;
    }
    get dataVisit () {
        return  this._dataVisit;
    }
    get name() {
        return this._name;
    }
    set visitAim(value) {
        this._visitAim = value;
    }
}
class Cardio extends DoctorVisit{
    constructor(visitAim,dataVisit,name,pressure,illnesses,age ){
        super(visitAim,dataVisit,name);
        this.pressure = pressure;
        this.illnesses = illnesses;
        this.age = age;
    }
}
class Dentist extends DoctorVisit{
    constructor(visitAim,dataVisit,name,lastVisit ){
        super(visitAim,dataVisit,name );
        this.lastVisit = lastVisit;
    }
}
class Therapist extends DoctorVisit{
    constructor(visitAim,dataVisit,name,age ){
        super(visitAim,dataVisit,name);
        this.age = age;
    }
}


const doctorCardio = new Cardio('cardiology');
const doctorDentist = new Dentist('dentist');
const doctorTherapist = new Therapist('therapist');
const buttonLink = document.getElementById("modal-button");
const containerLink = document.getElementById("modal-window");
const closeBtn = document.getElementById('close-modal-btn');
const createCart = document.getElementById('create-cart');
const cartLink = document.getElementById('cart');
const cartFieldLink = document.getElementById('card-field');
function docVisit() {
    let docList = document.getElementById('doctor-option');
    let userChoose = docList.options[docList.selectedIndex].value;
    if(userChoose === 'dentist') {
        visit.style.display = 'block';
        lastVisit.style.display = 'block';
        fullName.style.display = 'block';
        pressure.style.display = 'none';
        bodyIndex.style.display = 'none';
        heart.style.display = 'none';
        age.style.display = 'none';
    }
    if(userChoose === 'therapist') {
        visit.style.display = 'block';
        age.style.display = 'block';
        fullName.style.display = 'block';
        lastVisit.style.display = 'none';
        pressure.style.display = 'none';
        bodyIndex.style.display = 'none';
        heart.style.display = 'none';
    }
    if(userChoose === 'cardiology') {
        visit.style.display = 'block';
        lastVisit.style.display = 'none';
        pressure.style.display = 'block';
        bodyIndex.style.display = 'block';
        heart.style.display = 'block';
        age.style.display = 'block';
        fullName.style.display = 'block';
    }
}
let visit= document.getElementById('visit-aim');
let pressure = document.getElementById('pressure');
let bodyIndex = document.getElementById('bodyIndex');
let heart = document.getElementById('heart-illnesses');
let age = document.getElementById('age');
let fullName = document.getElementById('name');
let lastVisit= document.getElementById('last-visit-date');
buttonLink.addEventListener("click", function () {
    containerLink.style.display = 'flex';
});
closeBtn.addEventListener('click', function() {
    containerLink.style.display = 'none';
});
createCart.addEventListener('click', function() {
     const newCard = document.createElement('div');
    const  newCardLink = document.getElementsByClassName('cart');
    const showMoreButton = document.createElement("button");
    const deleteButton = document.createElement('button');
    newCard.className += 'cart';
     newCard.innerHTML = 'Создалась новая карточка';
     cartFieldLink.appendChild(newCard);
     containerLink.style.display = 'none';
    showMoreButton.className += 'show-del-button';
    showMoreButton.innerHTML = 'Show More';
    deleteButton.className += 'show-del-button';
    deleteButton.innerHTML = 'Delete';
    for(let i = 0; i < newCardLink.length; i++) {
        newCardLink[i].appendChild(deleteButton);
        newCardLink[i].appendChild(showMoreButton);
    }

});



