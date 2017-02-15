import { Component, OnInit } from '@angular/core';
import { SearchParameter, Facet } from './typescript-classes';

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
  facetQuery: string[] = [];

  sortSelection:string;

  sortOptions = [
    {
      displayName: "Relevance",
      displayValue: "score"
    },
    {
      displayName:  "Amount",
      displayValue:  "amount_l"
    },
    {
      displayName: "Date Issued",
      displayValue: "date_issued_dt"
    }
  ];

  constructor(private facetService:FacetService) { }

  ngOnInit() {

    this.facetService.getFacets()
      .subscribe(facets => this.facets = facets,
        error => this.errorMessage = <any>error);

  }

  changeMessage(itemName: string, itemValue: string){
     this.setSortOrder(itemValue);
  }

  // Facet Parameters
  addFacet(facet:Facet){
    let idx = this.facetHistory.indexOf(facet);

    if(idx < 0 ){
      console.log("Selected facet: ", facet.facetName, ", being added to history...");
      this.facetHistory.push(facet);

      // add facet query to query string array
      let fq = "&fq=";
      let facetValue = facet.category.toLowerCase() + ":" + "\"" +  facet.facetName.toLowerCase() + "\"";

      this.facetQuery.push(fq + facetValue);
    }

    console.log("Items in facetHistory: ", this.facetHistory.length);
  }

  removeFacet(facet:Facet){
    let idx = this.facetHistory.indexOf(facet);

    if(idx != -1){
      console.log("Selected facet, ", facet.facetName, ", being removed from facet history...");
      this.facetHistory.splice(idx, 1);

      // add facet query syntax to query string
      let fq = "&fq=";
      let facetValue = facet.category.toLowerCase() + ":" + "\"" +  facet.facetName.toLowerCase() + "\"";
      let combined = fq + facetValue;

      console.log("Values to send to removeFacetQuery:", combined);
      this.removeFacetQuery(combined);
    }

    console.log("Items in facetHistory[]: ", this.facetHistory.length);
  }

  removeFacetQuery(param:string){
    console.log("Received inside remove FacetQuery: ", param);

    let idx = this.facetQuery.indexOf(param);

    if(idx != -1){
      console.log("FacetQuery: " + param + " being REMOVED from history...");
      this.facetQuery.splice(idx, 1);
    }

    console.log("Items in facetQuery[]: ", this.facetQuery.length);
  }

  setSortOrder(sortOption:string){
    console.log("Inside setSortOrder(), sorting by: &sort=", sortOption);

    // add code to add sort query string to parameters array
    let sort = "&sort=";
    let sortValue =  sortOption + " DESC";

    this.sortSelection = sort + sortValue;

    console.log("Added search parameter: ", this.sortSelection );

  }

}
