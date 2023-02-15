
const carouselEl = document.getElementsByClassName('carousel')
// console.log(carouselEl)

const btnRightEl = document.getElementById('btn_r')
// console.log(btnRightEl)

const btnLeftEl = document.getElementById('btn_l')
// console.log(btnLeftEl)





// ***********************************
// **********ARRAY DI OGGETTI*********
// ***********************************



 

const caroselliIm = {
    image: './immagini/imm1.png',
    title: 'Marvel\\s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}


let carouselCard = [ 
    caroselliIm, {
        image: './immagini/imm2.png',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './immagini/imm 3.png',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './immagini/imm4.png',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './immagini/imm5.png',
        title: "Marvel's Avengers",
        text: 'Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
    {
        image: './immagini/imm6.png',
        title: "Marvel's Avengers",
        text: 'Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]


for (let key in carouselCard){
    console.log(carouselCard[key])
}



for (let i = 0; i < carouselCard.length; i++){
   
    const carouseApp = carouselCard[i]
    console.log(carouseApp)


    const imagine = carouseApp.image
    const titolo = carouseApp.title
    const testo = carouseApp.text

   
console.log(imagine, titolo, testo)

}




// console.log()






// ***********************************
// ***************PULSANTI***********
// ***********************************



let functionActiv = 0


btnRightEl.addEventListener('click', function () {
    console.log('next right')

    const lastIndex = carouselEl.length - 1

    if (functionActiv < lastIndex) {


        let firstSlide = carouselEl[functionActiv]
        // console.log(firstSlide)
        firstSlide.classList.toggle('mk_display_active')

        functionActiv += 1


        let secondSlide = carouselEl[functionActiv]
        // console.log(secondSlide)
        secondSlide.classList.toggle('mk_display_active')
    }

})


btnLeftEl.addEventListener('click', function () {
    console.log('next right')

    if (functionActiv > 0) {

        let firstSlide = carouselEl[functionActiv]
        // console.log(firstSlide)
        firstSlide.classList.toggle('mk_display_active')

        functionActiv -= 1


        let secondSlide = carouselEl[functionActiv]
        // console.log(secondSlide)
        secondSlide.classList.toggle('mk_display_active')
    }

})