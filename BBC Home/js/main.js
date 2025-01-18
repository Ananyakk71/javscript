export function loadMainContent(data) {
    const firstgridLeft = document.querySelector(".first-grid-left");
    const firstGrid1 = data.mainSection.firstGrid1;
    firstGrid1.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.addEventListener("click",()=>{ 
            window.location.href = item.link;  
        })

        const innerCard = document.createElement("a");
        innerCard.className = "inner-card";

        const innerArticle = document.createElement("div");
        innerArticle.className = "inner-article";
        innerArticle.id = "inner-article"

        const cardMediaWrapper = document.createElement("div");
        cardMediaWrapper.className = "card-media-wrapper";

        const img = document.createElement("img");
        img.src = item.image ;
        cardMediaWrapper.appendChild(img);

        const cardTextWrapper = document.createElement("div");
        cardTextWrapper.className = "card-text-wrapper";

        const headline = document.createElement("h2");
        headline.className = "card-headline";
        headline.textContent = item.headline;

        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = item.description;

        const cardTime = document.createElement("div");
        cardTime.className = "card-time";

        const timeSpan = document.createElement("span");
        timeSpan.textContent = item.time;

        cardTime.appendChild(timeSpan);

        if (item.category) {
            const separator = document.createElement("div");
            separator.className = "card-media-seperator";

            const categorySpan = document.createElement("span");
            categorySpan.textContent = item.category;

            cardTime.appendChild(separator);
            cardTime.appendChild(categorySpan);
        }
        cardTextWrapper.appendChild(headline);
        cardTextWrapper.appendChild(description);
        cardTextWrapper.appendChild(cardTime);

        innerArticle.appendChild(cardMediaWrapper);
        innerArticle.appendChild(cardTextWrapper);
        innerCard.appendChild(innerArticle);
        card.appendChild(innerCard);

        firstgridLeft.appendChild(card);
    });
    const firstgridright = document.querySelector(".first-grid-right");
    const firstGrid2 = data.mainSection.firstGrid2;

    const mainArticle = document.createElement("div");
    mainArticle.className = "main-article";
    mainArticle.addEventListener("click",()=>{ 
        window.location.href = firstGrid2.link;  
    })
    const innerCard = document.createElement("a");
    innerCard.className = "inner-card";

    const ministerNews = document.createElement("div");
    ministerNews.className = "minister-news";

    const cardMediaWrapper = document.createElement("div");
    cardMediaWrapper.className = "card-media-wrapper";
    
    const img = document.createElement("img");
    img.src = firstGrid2.image;
    firstgridright.appendChild(mainArticle);
     mainArticle.appendChild(innerCard)
     innerCard.appendChild(ministerNews);
     ministerNews.appendChild(cardMediaWrapper);
     cardMediaWrapper.appendChild(img);
    

     const cardTextWrapper = document.createElement("div");
     cardTextWrapper.className = "card-text-wrapper";

     ministerNews.appendChild(cardTextWrapper);

     const headline = document.createElement("h2");
     headline.className = "card-headline main-head";
     headline.textContent = firstGrid2.headline;
    cardTextWrapper.appendChild(headline);

    const description = document.createElement("p");
    description.className = "card-description main-para";
    description.textContent = firstGrid2.description;

    cardTextWrapper.appendChild(description);

    const cardTime = document.createElement("div");
    cardTime.className = "card-time";

    const timeSpan = document.createElement("span");
    timeSpan.textContent = firstGrid2.time;

    cardTextWrapper.appendChild(cardTime);
    cardTime.appendChild(timeSpan);

    const separator = document.createElement("div");
    separator.className = "card-media-seperator";

    const categorySpan = document.createElement("span");
    categorySpan.textContent = firstGrid2.category;

    cardTime.appendChild(separator);
    cardTime.appendChild(categorySpan);

    const secondGrid = document.querySelector(".second-grid");
    const grid2 = data.mainSection.secondGrid;
    grid2.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.id = "manchester-card";
        card.addEventListener("click",()=>{ 
            window.location.href = item.link;  
        })

        const innerCard = document.createElement("a");
        innerCard.className = "inner-card";

        const manchesterArticle = document.createElement("div");
        manchesterArticle.className = "manchester-article";

        const cardTextWrapper = document.createElement("div");
        cardTextWrapper.className = "card-text-wrapper";

        const headline = document.createElement("h2");
        headline.className = "card-headline";
        headline.textContent = item.headline;
        cardTextWrapper.appendChild(headline);

        const description = document.createElement("p");
        description.className = "card-description main-para";
        description.textContent = item.description;
        cardTextWrapper.appendChild(description);

        const cardTime = document.createElement("div");
        cardTime.className = "card-time";
        cardTextWrapper.appendChild(cardTime);

        const timeSpan = document.createElement("span");
        timeSpan.textContent = item.time;
        cardTime.appendChild(timeSpan);

        const separator = document.createElement("div");
        separator.className = "card-media-seperator";

        const categorySpan = document.createElement("span");
        categorySpan.textContent = item.category;

        cardTime.appendChild(separator);
        cardTime.appendChild(categorySpan);

        card.appendChild(innerCard);
        innerCard.appendChild(manchesterArticle);
        manchesterArticle.appendChild(cardTextWrapper);

        secondGrid.appendChild(card);
        
    });

    const firstHeading = document.querySelector("#indian-head");
    const top = document.createElement("div");
    top.className = "top";
    const line1 = document.createElement("hr");
    line1.className = "line1";
    firstHeading.appendChild(top);
    top.appendChild(line1);

    const title = document.createElement("div");
    title.className = "section-title-wrapper";
    const h2 = document.createElement("h2");
    h2.className = "section-title";
    h2.textContent = data.mainSection.BBC.heading;
    firstHeading.appendChild(title);
    title.appendChild(h2);

    const indianaGrid = document.querySelector(".indiana-grid");
    const indianaCard = data.mainSection.BBC.card;
    indianaCard.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.addEventListener("click",()=>{ 
            window.location.href = item.link;  
        })
        const innerCard = document.createElement("a");
        innerCard.className = "inner-card";

        const innerArticle = document.createElement("div");
        innerArticle.className = "inner-article";
        innerArticle.id = "indiana-article";

        const cardMediaWrapper = document.createElement("div");
        cardMediaWrapper.className = "card-media-wrapper";

        const img = document.createElement("img");
        img.src = item.image ;
        innerArticle.appendChild(cardMediaWrapper);
        cardMediaWrapper.appendChild(img);

        const cardTextWrapper = document.createElement("div");
        cardTextWrapper.className = "card-text-wrapper";

        const headline = document.createElement("h2");
        headline.className = "card-headline";
        headline.textContent = item.headline;
        innerArticle.appendChild(cardTextWrapper);
        cardTextWrapper.appendChild(headline);

        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = item.description;

        const cardTime = document.createElement("div");
        cardTime.className = "card-time";
        cardTextWrapper.appendChild(description);
        cardTextWrapper.appendChild(cardTime);
        const timeSpan = document.createElement("span");
        timeSpan.textContent = item.time;

        cardTime.appendChild(timeSpan);
        const separator = document.createElement("div");
        separator.className = "card-media-seperator";

        const categorySpan = document.createElement("span");
        categorySpan.textContent = item.category;

        cardTime.appendChild(separator);
        cardTime.appendChild(categorySpan);

        indianaGrid.appendChild(card)
        card.appendChild(innerCard);
        innerCard.appendChild(innerArticle);
        
    });
    const moreHead = document.querySelector("#more-head");
    const top2 = document.createElement("div");
    top2.className = "top";
    const line2 = document.createElement("hr");
    line2.className = "line1";
    moreHead.appendChild(top2);
    top2.appendChild(line2);
    const title2 = document.createElement("div");
    title2.className = "section-title-wrapper";
    const innerCardMore = document.createElement("a");
    innerCardMore.className = "inner-card";
    moreHead.appendChild(title2);
    title2.appendChild(innerCardMore);
    innerCardMore.innerHTML = `
         <h2 class="section-title"> More news
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-right" data-testid="section-title-chevron"><path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"/></svg>
          </h2>
          `;
    innerCardMore.addEventListener("click",()=>{
        window.location.href = data.head.link[1];  
    })
    const grid5 = document.querySelector(".grid-5");
    const grid5Items = data.mainSection.news;
    grid5Items.forEach((item)=>{
        const card = document.createElement("div");
        card.className = "card";
        card.addEventListener("click",()=>{ 
            window.location.href = item.link;  
        })
        const innerCard = document.createElement("a");
        innerCard.className = "inner-card";

        const moreArticle = document.createElement("div");
        moreArticle.className = "more-article";

        grid5.appendChild(card);
        card.appendChild(innerCard);
        innerCard.appendChild(moreArticle);

        const headline = document.createElement("h2");
        headline.className = "card-headline";
        headline.textContent = item.headline;
        moreArticle.appendChild(headline);
        const cardTime = document.createElement("div");
        cardTime.className = "card-time";
        moreArticle.appendChild(cardTime);
        const timeSpan = document.createElement("span");
        timeSpan.textContent = item.time;
        cardTime.appendChild(timeSpan);
        const separator = document.createElement("div");
        separator.className = "card-media-seperator";

        const categorySpan = document.createElement("span");
        categorySpan.textContent = item.category;

        cardTime.appendChild(separator);
        cardTime.appendChild(categorySpan);
        
    });
    const darkContainer = document.getElementById("dark-container");
    const top3 = document.createElement("div");
    top3.className = "top";
    const line3 = document.createElement("hr");
    line3.className = "line1 light";
    
    darkContainer.appendChild(top3);
    top3.appendChild(line3);

    const title3 = document.createElement("div");
    title3.className = "section-title-wrapper";
    const innerCardDark = document.createElement("a");
    innerCardDark.className = "inner-card";
    darkContainer.appendChild(title3);
    title3.appendChild(innerCardDark);
    innerCardDark.innerHTML = `
        <h2 class="section-title lightclr"> Must watch
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-right" data-testid="section-title-chevron"><path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"></path></svg>
         </h2>
         `;
         innerCardDark.addEventListener("click",()=>{
            window.location.href = data.head.link[9]; 
         })
    const arrowCard = document.createElement("div");
    arrowCard.className = "arrow-card"
    title3.appendChild(arrowCard);
    arrowCard.innerHTML = `
        <button class="left-arrow arrow-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-left"><path d="M10.4 14.3 26.5 31h-6.4L5.5 16 20.1 1h6.4L10.4 17.7v-3.4z"/></svg>
        </button>
        <button class="right-arrow arrow-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-right"><path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"/></svg>
        </button>
        `;

    const texasContainer = document.querySelector(".texas-container");
    const watchItems = data.mainSection.watch;
    watchItems.forEach((item)=>{
        const texasCard = document.createElement("div");
        texasCard.className = "texas-card";
        texasCard.addEventListener("click",()=>{ 
            window.location.href = item.link;  
        })
        const innerCard = document.createElement("a");
        innerCard.className = "inner-card";

        const innerArticle = document.createElement("div");
        innerArticle.className = "inner-article";

        const cardMediaWrapper = document.createElement("div");
        cardMediaWrapper.className = "card-media-wrapper";

        const img = document.createElement("img");
        img.src = item.image ;
        innerArticle.appendChild(cardMediaWrapper);
        cardMediaWrapper.appendChild(img);

        const contentType = document.createElement("div");
        contentType.className = "content-type";
        cardMediaWrapper.appendChild(contentType);
        contentType.innerHTML = `
                <div class="icon1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" category="playback-avkx" icon="play" type="playback-avkx:play"><path d="M29 16 5.8 1v30L29 16z"/></svg>
                </div>`;

        

        texasContainer.appendChild(texasCard);
        texasCard.appendChild(innerCard);
        innerCard.appendChild(innerArticle);
        innerArticle.appendChild(cardMediaWrapper);
        const cardTextWrapper = document.createElement("div");
        cardTextWrapper.className = "card-text-wrapper bgcl";
        innerArticle.appendChild(cardTextWrapper);

        const headline = document.createElement("h2");
        headline.className = "card-headline lightclr";
        headline.textContent = item.headline;
        cardTextWrapper.appendChild(headline);

        const description = document.createElement("p");
        description.className = "card-description lightclr";
        description.textContent = item.description;
        cardTextWrapper.appendChild(description);

        const cardTime = document.createElement("div");
        cardTime.className = "card-time";  
        cardTextWrapper.appendChild(cardTime);
        const timeSpan = document.createElement("span");
        timeSpan.textContent = item.time;

        cardTime.appendChild(timeSpan);
        const separator = document.createElement("div");
        separator.className = "card-media-seperator";

        const categorySpan = document.createElement("span");
        categorySpan.textContent = item.category;
        
    });
    const montanahead = document.getElementById("montana-head");
    const top4 = document.createElement("div");
    top4.className = "top";
    const line4 = document.createElement("hr");
    line4.className = "line1";
    montanahead.appendChild(top4);
    top4.appendChild(line4);

    const title4 = document.createElement("div");
    title4.className = "section-title-wrapper";
    const innerCardsee = document.createElement("a");
    innerCardsee.className = "inner-card";
    montanahead.appendChild(title4);
    title4.appendChild(innerCardsee);
    innerCardsee.innerHTML = `
        <h2 class="section-title"> Innovation
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-right" data-testid="section-title-chevron"><path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"></path></svg>
             </h2>`;
    innerCardsee.addEventListener("click",()=>{
        window.location.href = data.head.link[4];
    })

     const montanaGrid = document.querySelector(".grid-2");
     const innerCard2 = document.createElement("div");
     innerCard2.className = "inner-card";
     const montanaArticle = document.createElement("a");
     montanaArticle.className = "montana-article";
     montanaGrid.appendChild(innerCard2);
     innerCard2.appendChild(montanaArticle);
     const montanaImg = document.createElement("div");
     montanaImg.className = "card-media-wrapper";
     montanaImg.id = "montana-img";
     const img2 = document.createElement("img"); 
     img2.src = data.mainSection.innovation.image;
     montanaArticle.appendChild(montanaImg);
     montanaImg.appendChild(img2)
     montanaArticle.addEventListener("click",()=>{
        window.location.href = data.mainSection.innovation.link
     })
     const montanaText = document.createElement("div");
     montanaText.className = "card-text-wrapper";
     montanaText.id = "montana-text";
     const cardHead = document.createElement("h2");
     cardHead.className = "card-headline main-head";
     cardHead.textContent = data.mainSection.innovation.headline;
     montanaArticle.appendChild(montanaText);
     montanaText.appendChild(cardHead);

     const cardDescription = document.createElement("div");
     cardDescription.className = "card-description";
     cardDescription.id = "cardDescription";
     cardDescription.textContent = data.mainSection.innovation.description;
     montanaText.appendChild(cardDescription);

     const cardBtn = document.createElement("div");
     cardBtn.className = "card-button";
     const seeBtn = document.createElement("button");
     seeBtn.className = "seemore btn";
     const span = document.createElement("span");
     span.textContent = data.mainSection.innovation.button;
     montanaText.appendChild(cardBtn);
     cardBtn.appendChild(seeBtn);
     seeBtn.appendChild(span);

    const healthhead = document.getElementById("health-head");
    const top5 = document.createElement("div");
    top5.className = "top";
    const line5 = document.createElement("hr");
    line5.className = "line1";
    healthhead.appendChild(top5);
    top5.appendChild(line5);
    const title5 = document.createElement("div");
    title5.className = "section-title-wrapper";
    const head2 = document.createElement("h2");
    head2.className = "section-title";
    head2.textContent = data.mainSection.health.heading;
    healthhead.appendChild(title5);
    title5.appendChild(head2);
    head2.addEventListener("click",()=>{
        window.location.href = data.mainSection.health.link;
    })

    const healthGrid = document.querySelector("#grid-2");
    const innerCard3 = document.createElement("a");
    innerCard3.className = "inner-card";
    const healthArticle = document.createElement("div");
    healthArticle.className = "health-article";
    healthGrid.appendChild(innerCard3);
    innerCard3.appendChild(healthArticle);
    const healthImg = document.createElement("div");
    healthImg.className = "card-media-wrapper ";
    healthImg.id = "health-img";
    const img3 = document.createElement("img"); 
    img3.src = data.mainSection.health.image;
    healthArticle.appendChild(healthImg);
    healthImg.appendChild(img3)
    healthArticle.addEventListener("click",()=>{
       window.location.href = data.mainSection.health.link
    })

    const healthText = document.createElement("div");
     healthText.className = "card-text-wrapper";
     healthText.id = "health-text";
     const cardHead2 = document.createElement("h2");
     cardHead2.className = "card-headline main-head";
     cardHead2.textContent = data.mainSection.health.headline;
     healthArticle.appendChild(healthText);
     healthText.appendChild(cardHead2);

     const cardDescription2 = document.createElement("div");
     cardDescription2.className = "card-description";
     cardDescription2.id = "cardDescription";
     cardDescription2.textContent = data.mainSection.health.description;
     healthText.appendChild(cardDescription2);

     const cardBtn2 = document.createElement("div");
     cardBtn2.className = "card-button";
     const seeBtn2 = document.createElement("button");
     seeBtn2.className = "seemore btn";
     const span2 = document.createElement("span");
     span2.textContent = data.mainSection.health.button;
     healthText.appendChild(cardBtn2);
     cardBtn2.appendChild(seeBtn2);
     seeBtn2.appendChild(span2);

}
