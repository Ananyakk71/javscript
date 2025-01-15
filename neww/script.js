const listEl = document.querySelector('ul');

fetch('data.json')
.then(res => res.json())
.then(data => {
    data.forEach(post => {
        listEl.insertAdjacentHTML('beforeend', `<li>${post.title}</l`);
    });
})
