// first task↓
// const input = document.querySelector('.input')
// const btn = document.querySelector('.button')
// const text = document.querySelector('.text')

// const check = () => {
// 	if (input.value > 0) {
// 		text.textContent = 'dodatnia'
// 	} else if (input.value === '0') {
// 		text.textContent = 'zero'
// 	} else if (input.value < 0) {
// 		text.textContent = 'ujemna'
// 	} else {
//         text.textContent = 'podaj jakąś liczbę'
//     }

// }

// btn.addEventListener('click', check)

// second task↓
// const input1 = document.querySelector('.input1')
// const input2 = document.querySelector('.input2')
// const btn = document.querySelector('.button')
// const text = document.querySelector('.text')

// let arr = []
// // let ourNumbers = ''

// const showNumbers = () => {
// 	if (input1.value < input2.value) {
// 		for (let i = input1.value; i <= input2.value; i++) {
// 			arr.push(i)
//             text.textContent = arr.join(' ')
//             // ourNumbers = ourNumbers + i + ' '
//             // text.textContent = ourNumbers
//             // console.log(ourNumbers);
//             // ↑ 'pushowanie' każdej iteracji do stringa
// 		}
// 	} else {
//         text.textContent = 'pierwsza cyfra musi być mniejsza od drugiej'
//     }
// }

// btn.addEventListener('click', showNumbers)

// third task↓

const slider = document.querySelector('.slider')

let number = Math.floor(Math.random() * 5) + 1
let interval

const changeSlide = () => {
	slider.setAttribute('src', `slajd${number}.png`)
	if (number < 5) {
		number++
	} else {
		number = 1
	}
	console.log(slider)
}

const startInt = () => {
	interval = setInterval(changeSlide, 4000)
}

const clearInt = () => {
	clearInterval(interval)
}

const clickers = document.querySelectorAll('span')

function changeSlideOnClick() {
	clearInt()
	const num = this.textContent.slice(2, -2)
	// console.log(num)
	slider.setAttribute('src', `slajd${num}.png`)
	startInt()
}

clickers.forEach(clicker => {
	clicker.addEventListener('click', changeSlideOnClick)
})

document.addEventListener('DOMContentLoaded', startInt)


const box = document.querySelector('.box')
box.addEventListener('click', function() {
    alert('foo')
}, false)