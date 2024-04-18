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

const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const btn = document.querySelector('.button')
const text = document.querySelector('.text')

let arr = []
// let ourNumbers = ''

const showNumbers = () => {
	if (input1.value < input2.value) {
		for (let i = input1.value; i <= input2.value; i++) {
			arr.push(i)
            text.textContent = arr.join(' ')
            // ourNumbers = ourNumbers + i + ' '
            // text.textContent = ourNumbers
            // console.log(ourNumbers);
            // ↑ 'pushowanie' każdej iteracji do stringa
		}
	}
}

btn.addEventListener('click', showNumbers)
