// 1. Hitta element

let ball = document.getElementById('ball');

let description = document.getElementsByClassName('description');

let firstDescription = description[0];

let h1 = document.getElementsByTagName('h1');

let firstH1 = h1[0];

let articleTitles = document.querySelectorAll('#news>article>h2');

let newsSection = document.querySelector('#news');

let newsParent = newsSection.parentElement;

let newsChildren = newsSection.children;

// 2. Hantera ett elements innehåll

console.log(firstDescription.innerText);
console.log(firstDescription.innerHTML);
console.log(firstDescription.outerText);
console.log(firstDescription.outerHTML);

// firstDescription.innerHTML = 'Hej jag har <strong>uppdaterats</strong>';
firstDescription.innerText = 'Hej jag har <strong>uppdaterats</strong>';

function addArticle() {
	newsSection.innerHTML += `
		<article>
			<h2>Genererat element</h2>
			<p>Genererad beskrivning</p>
		</article>
		`;
}

addArticle();