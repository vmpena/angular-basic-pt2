import { Component, OnInit } from '@angular/core';

import {Facet, SearchParameter } from './facet';
import { FacetService } from '../services/facet.service';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.css']
})

export class FacetsComponent implements OnInit {

  errorMessage: string;
  facets: Facet[];

  // array to hold history of each selected facet
  facetHistory: Facet[] = [];

  // array to hold each search parameter
  parameters: SearchParameter[] = [];

  constructor(private facetService:FacetService) { }

  ngOnInit() {
    // call facet service to populate facet array
    console.log("facets.component being initialized...")

    this.facetService.getFacets()
      .subscribe(facets => this.facets = facets,
        error => this.errorMessage = <any>error);

  }

  // every time a facet is clicked: add it to facet history and search parameter history
  addFacet(facet:Facet){

    let idx = this.facetHistory.indexOf(facet);

    // Check if facet already exists in history before adding it.
    // If it's already there, don't add it.
    if(idx < 0 ){

      console.log("Selected facet, ", facet.facetName, ", being added to history...");
      this.facetHistory.push(facet);

      // let p:SearchParameter;
      // p.parameterName = "&fq=";
      // p.parameterValue = facet.category + ":" + "\"" + facet.facetName + "\"";

      // console.log("Adding facet to parameters: ", p.parameterName + p.parameterValue);
      // this.addParameter(p);
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

  // create SearchParameter object to include in array of Search Parameters
  createSearchParameter(paramName:string, paramValue:string): SearchParameter{
    let searchParam:SearchParameter;

    if(!paramName || !paramValue){
        searchParam.parameterName = paramName;
        searchParam.parameterValue = paramValue;
    }

    return searchParam;
  }

  addParameter(param: SearchParameter){
    console.log("Search Parameter being added to history...");
    let idx = this.parameters.indexOf(param);

    if(idx < 0 ){
      this.parameters.push(param);
    }

    console.log("Items in search parameters: ", this.parameters.length);
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
