//template_hb9vdtf
// service_75hbdx7
// abn_Yb9GTeK-lhioj

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
let isModalOpen = false
function toggleModal() {

    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    // toggle module
    document.body.classList += " modal--open"
}