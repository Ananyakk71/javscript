export function loadNewsContent(data){
    const smallHeads = document.querySelectorAll("#small-head")
    smallHeads.forEach((item)=>{
        const top = document.createElement("div");
        top.className = "top";
        const line = document.createElement("hr");
        line.className = "line1";
        item.appendChild(top);
        top.appendChild(line);

        const title = document.createElement("div");
        title.className = "section-title-wrapper";
        const titleCard = document.createElement("a");
        titleCard.className = "inner-card";
        titleCard.addEventListener("click",()=>{
            window.location.href = "https://www.bbc.com/news/us-canada";
        })
        item.appendChild(title);
        title.appendChild(titleCard);
        titleCard.innerHTML = `
            <h2 class="section-title"> US & Canada news
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-right" data-testid="section-title-chevron"><path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"></path></svg>
             </h2>
             `;
    })

    const smallCards = document.querySelectorAll(".small-card");
    const world = data.mainSection.world;
    world.forEach((item, index)=>{
        const smallCard = smallCards[index];
        const innerCard = document.createElement("a");
        innerCard.className = "inner-card";
        innerCard.addEventListener("click",()=>{
            window.location.href = item.link;
        })
        smallCard.appendChild(innerCard);
        const cardHeadline = document.createElement("h2");
        cardHeadline.className = "card-headline";
        cardHeadline.textContent = item.headline;

        const cardTime = document.createElement("div");
        cardTime.className = "card-time";
        const time = document.createElement("span");
        time.textContent = item.time;
        const separator = document.createElement("div");
        separator.className = "card-media-seperator";
        const catagory = document.createElement("span");
        catagory.textContent = item.category;
        
        if(item.image){
             const articleImg = document.createElement("div");
             articleImg.className = "article-img bottom";
             innerCard.appendChild(articleImg);
             const cardMedia = document.createElement("div");
             cardMedia.className = "card-media-wrapper";
             articleImg.appendChild(cardMedia);
             const image = document.createElement("img");
             image.src = item.image;
             cardMedia.appendChild(image);
             const cardText = document.createElement("div");
             cardText.className = "card-text-wrapper";
             articleImg.appendChild(cardText);
             
             cardText.appendChild(cardHeadline);
             const cardDescription = document.createElement("p");
             cardDescription.className = "card-description";
             cardDescription.textContent = item.description;
             cardText.appendChild(cardDescription);
             cardText.appendChild(cardTime);
        } else {
             const moreArticle = document.createElement("div");
             moreArticle.className = "more-article bottom";
             innerCard.appendChild(moreArticle);
             moreArticle.appendChild(cardHeadline);
             moreArticle.appendChild(cardTime);
        }
        cardTime.appendChild(time);
        cardTime.appendChild(separator);
        cardTime.appendChild(catagory);
    })


    

}