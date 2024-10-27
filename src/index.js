
import _ from 'lodash';
import './style.css';
import imageSrc from './image1.png';
import data from './data.xml';
import notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml,':toml');
console.log(yaml,':yaml');
console.log(json,':json');


function component() {
  const element = document.createElement('div');
  // Lodash, is now improted by the script
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.classList.add('hello');

  // add the image to our html
  const image1 = new Image();
  image1.src = imageSrc;

  element.appendChild(image1);
  console.log(data, ':data');
  console.log(notes, ':notes');

  return element;
}

document.body.appendChild(component());