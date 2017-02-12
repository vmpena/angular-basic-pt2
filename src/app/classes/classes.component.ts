import { Component, OnInit } from '@angular/core';
import { Greeter, SearchParameter, Facet } from './typescript-classes';

import { FacetService } from '../services/facet.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {

  errorMessage: string;
  facets: Facet[];


  facetHistory: Facet[] = [];
  parameters: SearchParameter[] = [];

  constructor(private facetService:FacetService) { }

  ngOnInit() {

    this.facetService.getFacets()
      .subscribe(facets => this.facets = facets,
        error => this.errorMessage = <any>error);

  }

  addFacet(facet:Facet){
    let idx = this.facetHistory.indexOf(facet);

    if(idx < 0 ){
      console.log("Selected facet: ", facet.facetName, ", being added to history...");
      this.facetHistory.push(facet);

      // add facet query to query string
      let fq = "&fq=";
      let facetValue = facet.category.toLowerCase() + ":" + "\"" +  facet.facetName + "\"";

      this.addParameter(fq, facetValue);
    }

    console.log("Items in facetHistory: ", this.facetHistory.length);
  }

  removeFacet(facet:Facet){

    console.log("Selected facet, ", facet.facetName, ", being removed from history...");
    let idx = this.facetHistory.indexOf(facet);

    if(idx != -1){
      this.facetHistory.splice(idx, 1);
    }

    console.log("Items in facetHistory: ", this.facetHistory.length);
  }

  // Search Parameters

  addParameter(paramName:string, paramValue:string){

    if(paramName != "" && paramValue != ""){

      let param:SearchParameter = new SearchParameter(paramName, paramValue);

      let idx = this.parameters.indexOf(param);

      if(idx < 0 ){
        console.log("Search Parameter: " + param.parameterName + param.parameterValue + " being added to history...");
        this.parameters.push(param);
      }

      console.log("Items in search parameters: ", this.parameters.length);

    }
  }



  removeParameter(param: SearchParameter){

    console.log("Selected parameter being removed from history...");
    let idx = this.parameters.indexOf(param);

    if(idx != -1){
      this.parameters.splice(idx, 1);
    }

    console.log("Items in search parameters: ", this.parameters.length);
  }

}
