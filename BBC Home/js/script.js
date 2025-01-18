import { loadHeadContent } from './head.js';
import { loadNavContent } from './nav.js';
import { loadMainContent } from './main.js';
import { loadNewsContent } from './news.js';
import { loadFootContent } from './foot.js';
fetch("data.json")
   .then(function (response) {
    return response.json();
   })
   .then(function (data) {
    loadHeadContent(data);
    loadNavContent(data);
    loadMainContent(data);
    loadNewsContent(data);
    loadFootContent(data);
   })
      
   
   .catch(error => console.error("Error loading data:", error));