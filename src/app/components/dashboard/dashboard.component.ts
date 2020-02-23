import { Component, OnInit } from '@angular/core';
import { tableau } from "tableau-api";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initViz();
  }

  initViz() {
    var divElement = document.getElementById('viz1582439630437'); 
    var vizElement = divElement.getElementsByTagName('object')[0]; 
    if (divElement.offsetWidth > 800) { 
        vizElement.style.width = '1024px'; 
        vizElement.style.height = '1627px'; 
    } else if (divElement.offsetWidth > 500) { 
        vizElement.style.width = '1024px'; 
        vizElement.style.height = '1627px'; 
    } else { 
        vizElement.style.width = '100%'; 
        vizElement.style.height = '1677px'; 
    } 
    var scriptElement = document.createElement('script'); 
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
