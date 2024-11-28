/*iframe1.onload = function() {
  iframe1.onload = function() {
    iframe1.contentDocument.body.prepend("Hello, world!");
  };
}

let oldDoc = iframe.contentDocument;

let timer = setInterval(() => {
  let newDoc = iframe.contentDocument;
  if (newDoc == oldDoc) return;

  alert("New document is here!");

  clearInterval(timer);
}, 100);

if (window == top) {
  alert('The script is in the topmost window, not in a frame');
} else {
  alert('The script runs in a freme');
}

let buffer = new ArrayBuffer(16)

let view = new Uint32Array(buffer);

alert(Uint32Array.BYTES_PER_ELEMENT)

alert(view.length);
alert(view.byteLength);

view[0] = 123456

for(let num of view) {
  alert(num);
}*/

let uint8array = new Uint8Array(16);

let num = 256;
alert(num.toString(2));

uint8array[0] = 256;
uint8array[1] = 257;

alert(uint8array[0]);
alert(uint8array[1]);

let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(buffer);

alert( dataView.getUint8(0) );
alert( dataView.getUint16(0) );
alert( dataView.getUint32(0) );

dataView.setUint32(0, 0);

let uint8Array = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
alert( new TextDecoder().decode(uint8Array) );

let blob = new Blob(["Hello, world"], {type: 'text/plain'});
link.href = URL.createObjectURL(blob);

function showFile(input) {
  let file = input.files[0];

  alert(`File name: ${file.name}`);
  alert(`Last modified: ${file.lastModified}`)
}

formElem.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('/article/formdata/post/user', {
    method: 'POST',
    body: new FormData(formElem)
  });

  let result = await response.json();

  alert(result.message);
};

let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

const contentLength = +response.headers.get('Content-Length');

let receivedLength = 0;
let chunks = [];
while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Received ${receivedLength} of ${contentLength}`)
}

let chunksAll = new Uint8Array(receivedLength);
let position = 0;
for(let chunk of chunks) {
  chunksAll.set(chunk, position);
  position += chunk.length;
}

let result = new TextDecoder("utf-8").decode(chunksAll);

let commits = JSON.parse(result);
alert(commits[0].author.login);

