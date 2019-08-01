class DoctorVisit {
    constructor(visitAim,dataVisit,name ){
        this.visitAim = visitAim;
        this.dataVisit = dataVisit;
        this.name = name;
    }
}
class Cardio extends DoctorVisit{
    constructor(visitAim,dataVisit,name,pressure,illnesses,age ){
        super(visitAim,dataVisit,name);
        this.pressure = pressure;
        this.illnesses = illnesses;
        this.age = age;
    }
    showInputFields(){
        const cardLink = document.getElementById("doctor-option");
        const doc =  cardLink.value;
        console.log(doc);
        if (doc === "card"){
            console.log("anus");
        }
            }
        showConsole(){
        console.log("Denis Alkash))))))")
        }
}
class Dantist extends DoctorVisit{
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
const doctorCardio = new Cardio();
doctorCardio.showInputFields();
 doctorCardio.showConsole();



const buttonLink = document.getElementById("modal-button");
const containerLink = document.getElementById("modal-window");
const closeBtn = document.getElementById('close-modal-btn');

buttonLink.addEventListener("click", function () {
 containerLink.style.display = 'flex';
 });
 closeBtn.addEventListener('click', function() {
    containerLink.style.display = 'none';
    console.log (closeBtn);
});
const createCartLink = document.getElementById('create-cart');
createCartLink.addEventListener("click", function () {
    const cartField = document.getElementById('card-field');
    let cart = document.createElement("div");
    cart.className = "cart";
    cart.innerHTML = "anus";
    cartField.appendChild(cart);
});





