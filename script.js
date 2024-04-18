const input = document.querySelector('.input')
const btn = document.querySelector('.button')
const text = document.querySelector('.text')

const check = () => {
	if (input.value > 0) {
		text.textContent = 'dodatnia'
	} else if (input.value === '0') {
		text.textContent = 'zero'
	} else if (input.value < 0) {
		text.textContent = 'ujemna'
	} else {
        text.textContent = 'podaj jakąś liczbę'
    }
    
}

btn.addEventListener('click', check)
