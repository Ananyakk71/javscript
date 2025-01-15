export function loadNavContent(data) {
    const navContainer = document.querySelector("ul");

    const navText = data.head.innerText;
    const navlinks = data.head.link;

    navText.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "catagories";  

        const innerWrapper = document.createElement("div");
        innerWrapper.className = "inner-wrapper";  

        const link = document.createElement("a");
        link.className = "link";  
        link.textContent = item;  

        innerWrapper.appendChild(link);
        li.appendChild(innerWrapper);

        link.href = navlinks[index];

        
        li.addEventListener("click", () => {
            const allLi = document.querySelectorAll(".catagories");
            allLi.forEach(item => item.classList.remove("active"));

            li.classList.add("active");
            window.location.href = link.href;
        });

        navContainer.appendChild(li);

        if (index === 0) {
            li.classList.add("active");  
            
        }
    });
}

