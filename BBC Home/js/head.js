export function loadHeadContent(data) {
    const wrappers = document.querySelectorAll(".wrapper");
    const button = data.head.button;
    button.forEach((item, index) => {
        const wrapper = wrappers[index];
        const buttonClick = document.createElement("button");
        buttonClick.className = `${item.class} btn dec`;
        const span = document.createElement("span");
        span.textContent = item.text;
        wrapper.appendChild(buttonClick);
        buttonClick.appendChild(span)
        buttonClick.addEventListener("click",()=>{
            window.open("https://account.bbc.com/auth/register/email?ab=o13&action=register&clientId=Account&context=international&isCasso=false&nonce=5EhE1Iyd-2hZUXq-BZxjGOLDFJxP3jcisGzw&ptrt=https%3A%2F%2Fwww.bbc.com%2Fnews&realm=%2F&redirectUri=https%3A%2F%2Fsession.bbc.com%2Fsession%2Fcallback%3Frealm%3D%2F&sequenceId=d870a50b-4fb1-4f87-99de-706f138577e7&service=IdRegisterService&userOrigin=BBCS_BBC")
        })

    })
    const body = document.querySelector("body");
    const menuSearch = document.getElementById("menu");
    const menuBg = document.createElement("div");
    menuBg.className = "menu-bg";
    menuBg.style.display = "none";
    body.appendChild(menuBg);

    const drawMenu = document.createElement("div");
    drawMenu.className = "draw-menu";
    drawMenu.style.display = "none";
    body.appendChild(drawMenu);

    const menuSvg = menuSearch.querySelector("svg");
    menuSvg.style.display = "block";

    menuSearch.addEventListener("click", function () {
        const menuSearch = document.getElementById("menu");


        if (menuSvg.style.display === "block") {
            menuSearch.innerHTML = `
         <button class="menu search" id="close">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" category="actions" icon="close" aria-hidden="true"><path d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8L30 4.6zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9L4.8 1.8z"/></svg>
         </button>
     `;
            menuSvg.style.display === "none"
        } else {
            menuSvg.style.display === "block";
        }

        if (menuBg.style.display === "none") {
            menuBg.style.display = "block";
        } else {
            menuBg.style.display = "none";
        }

        if (drawMenu.style.display === "none") {
            drawMenu.style.display = "block";

        } else {
            drawMenu.style.display = "none";
        }

         const drawMenuInside = document.createElement("div");
         drawMenuInside.className = "draw-menuInside";
         const drawMenuSearch = document.createElement("div");
         drawMenuSearch.className = "draw-menuSearch";

         drawMenu.appendChild(drawMenuInside);
         drawMenuInside.appendChild(drawMenuSearch);

         const searchInputWrapper = document.createElement("div");
         searchInputWrapper.className = "search-input-wrapper";
         const input = document.createElement("input");
         input.type = "text";
         input.className = "input-text";
         input.placeholder = "Search news, topics and more";
         drawMenuSearch.appendChild(searchInputWrapper);
         searchInputWrapper.appendChild(input);

         const searchInputButton = document.createElement("button");
         searchInputButton.className = "search-input-button btn";
         searchInputButton.innerHTML = `
                         <span class="button-icon-wrapper">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="actions" icon="search" aria-hidden="true"><path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"/></svg>
                         </span>
                         `;
         searchInputWrapper.appendChild(searchInputButton);

         const header3Inside = document.createElement("div");
         header3Inside.className = "header-3-inside";
         drawMenuSearch.appendChild(header3Inside);

         const headButtonsInside = document.createElement("div");
         headButtonsInside.className = "head-buttons btninside";
         header3Inside.appendChild(headButtonsInside);

         button.forEach((item, index) => { 
            const insideWrapper = document.createElement("div");
            insideWrapper.className = `${item.class}inside btnIn`;
            const a = document.createElement("a");
            a.textContent = item.text;
            headButtonsInside.appendChild(insideWrapper);
            insideWrapper.appendChild(a)
            insideWrapper.addEventListener("click",()=>{
                window.open("https://account.bbc.com/auth/register/email?ab=o13&action=register&clientId=Account&context=international&isCasso=false&nonce=5EhE1Iyd-2hZUXq-BZxjGOLDFJxP3jcisGzw&ptrt=https%3A%2F%2Fwww.bbc.com%2Fnews&realm=%2F&redirectUri=https%3A%2F%2Fsession.bbc.com%2Fsession%2Fcallback%3Frealm%3D%2F&sequenceId=d870a50b-4fb1-4f87-99de-706f138577e7&service=IdRegisterService&userOrigin=BBCS_BBC")
            })
        })

         const group = document.createElement("div");
         drawMenuSearch.appendChild(group);

         group.innerHTML = `
                 <div class="nav-item">
                     <a class="inner-link">
                         <button class="home-button innerBtn" id="innerbutton">
                            <span class="text">Home</span> 
                         </button>
                     </a>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">News</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <a class="inner-link">
                         <button class="option-button innerBtn" id="innerbutton">
                             <span>Sport</span>
                         </button>
                     </a>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Business</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Innovation</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Culture</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Arts</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Travel</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Earth</span> 
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <a class="inner-link">
                         <button class="option-button innerBtn" id="innerbutton">
                             <span>Video</span>
                         </button>
                     </a>
                 </div>
                 <div class="nav-item">
                     <div>
                         <button class="option-button innerBtn" id="innerbutton">
                             <span class="text">Live</span>
                             <div class="menu-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-down" data-testid="menuItem-ChevronIcon-/news"><path d="M17.7 22.6.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4zm0 0L.9 4.2v6.7L16 27.8 31.1 11V4.3L14.3 22.6h3.4z"/></svg>
                             </div>
                         </button>
                     </div>
                 </div>
                 <div class="nav-item">
                     <a class="inner-link">
                         <button class="option-button innerBtn" id="innerbutton">
                             <span>Audio</span>
                         </button>
                     </a>
                 </div>
                 <div class="nav-item">
                     <a class="inner-link">
                         <button class="option-button innerBtn" id="innerbutton">
                             <span>Weather</span>
                         </button>
                     </a>
                 </div>
                 <div class="nav-item">
                     <a class="inner-link">
                         <button class="option-button innerBtn" id="innerbutton">
                             <span>Newsletters</span>
                         </button>
                     </a>
                 </div>
                
                 `
    });
    
};



