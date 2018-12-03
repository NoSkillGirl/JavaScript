let textArea = document.getElementById('text-area')
let okButton = document.getElementById('ok-button')

okButton.addEventListener('click', function(){
	textArea.innerText = 'Button clicked!';
})