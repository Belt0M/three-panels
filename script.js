const toggleBtns = document.querySelectorAll('.toggle-btns button'),
	toggleText = document.querySelectorAll('.toggle-text')
toggleBtns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		removeACtive()
		btn.classList.add('active')
		toggleText[index].classList.add('active')
	})
})

function removeACtive() {
	toggleBtns.forEach(btn => btn.classList.remove('active'))
	toggleText.forEach(text => text.classList.remove('active'))
}
