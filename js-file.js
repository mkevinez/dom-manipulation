const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey, I'm red!"

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blue-header');
blueHeader.textContent = "I'm a blue h3!"

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(blueHeader);

const ownContainer = document.createElement('div');
ownContainer.classList.add('own-container');

const ownH1 = document.createElement('h1');
ownH1.textContent = "I'm in a div";
const ownP = document.createElement('p');
ownP.textContent = "ME TOO!";


ownContainer.appendChild(ownH1);
ownContainer.appendChild(ownP);

container.appendChild(ownContainer);

