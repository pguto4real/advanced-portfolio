//template_hb9vdtf
// service_75hbdx7
// abn_Yb9GTeK-lhioj

let isModalOpen = false
let contrastToggle = false

const scaleFactor = 1 / 20;

function moveBackground(event){
const shapes = document.querySelectorAll('.shape')
const x = event.clientX * scaleFactor
const y = event.clientY * scaleFactor


for(let i = 0;i< shapes.length; i++)
{
    const isOdd = i%2 !== 0;
    const booleanInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * booleanInt}px,${y * booleanInt}px)`
}
console.log(x,y)
}

function toggleContrast() {
   contrastToggle = !contrastToggle
   if(contrastToggle){
    document.body.classList += " dark-theme"
   }
   else
   {
    document.body.classList.remove("dark-theme")
   }
    }
function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading')
    const succces = document.querySelector('.modal__overlay--succces')
    loading.classList += ' modal__overlay--visible';
    emailjs.sendForm(
        'service_75hbdx7',
        'template_hb9vdtf',
        event.target,
        'abn_Yb9GTeK-lhioj'
    ).then(() => {
        // console.log("it worked")
        // throw new Error('error')
        loading.classList.remove('modal__overlay--visible')
        succces.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')

        succces.innerHTML = "The Email Service is temporarily unavailable. Please contact me directly on oluwamuibiigbokwe@gmail.com"
        succces.style.fontSize = '30px';
        succces.classList += ' modal__overlay--visible'
        // console.log('it does not work')
    })
}

function toggleModal() {
// alert(123)
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    // toggle module
    document.body.classList += " modal--open"
}