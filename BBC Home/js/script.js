import { loadHeadContent } from './head.js';
import { loadNavContent } from './nav.js';
fetch("data.json")
   .then(function (response) {
    return response.json();
   })
   .then(function (data) {
    loadHeadContent(data);
    loadNavContent(data);
   })
      
   
   .catch(error => console.error("Error loading data:", error));