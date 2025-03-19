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

let img = document.querySelector('img');

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

// 3. Hantera ett elements attribut och egenskaper

console.log(img.getAttribute('src'));
console.log(newsSection.getAttribute('id'));
console.log(firstDescription.getAttribute('class'));

img.setAttribute('src', 'https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
newsSection.setAttribute('id', 'nytt-coolt-id');

console.log(firstDescription.classList);

firstDescription.classList.add('cool-klass');
firstDescription.classList.remove('first-description');

firstDescription.classList.toggle('bold');

ball.style.backgroundColor = 'red';
ball.style.width = '100px';

// 4. Skapa och radera element

img.remove();

let aboutSection = document.createElement('section');
aboutSection.setAttribute('id', 'about');
aboutSection.innerText = 'Här är min nya sektion';
document.body.appendChild(aboutSection);

let newArticle = document.createElement('article');
let newH2 = document.createElement('h2');
let newP = document.createElement('p');
newH2.innerText = 'Ny cool genererad rubrik';
newP.innerText = 'Ny cool genererad beskrivning';
newArticle.appendChild(newH2);
newArticle.appendChild(newP);

newsSection.appendChild(newArticle);
