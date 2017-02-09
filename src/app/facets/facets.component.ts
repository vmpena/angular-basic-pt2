import { Component, OnInit } from '@angular/core';

import { Facet } from './facet';
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

  constructor(private facetService:FacetService) { }

  ngOnInit() {
    // call facet service to populate facet array
    console.log("facets.component being initialized...")

    this.facetService.getFacets()
      .subscribe(facets => this.facets = facets,
        error => this.errorMessage = <any>error);
  }

  // every time a facet is clicked, add it to history
  addFacet(facet:Facet){

    console.log("Selected facet, ", facet.facetName, ", being added to history...");
    let idx = this.facetHistory.indexOf(facet);

    // Check if facet already exists in history before adding it.
    // If it's already there, don't add it.
    if(idx < 0 ){
      this.facetHistory.push(facet);
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

  // getFacet(searchTerm: string, terms: string){
  //   let slash = terms.indexOf("/");
  //   let facetName = terms.slice(0, slash);
  //   let term = terms.substring(slash + 1);
  //   let facetQuery = "&fq=" + facetName + ":" + "\"" + term + "\"";
  //
  //   console.log("Inside getFacet(): ", " Facet: ", facetName, " | Term: ", term);
  //   console.log("- add fq to original query: ", "fq=" + facetName + ":" + "\"" + term + "\"");
  //   console.log("- facetQuery variable:", facetQuery);
  //   console.log("- searchTerm variable:", searchTerm);
  //   console.log("Sent to web api:", searchTerm + facetQuery);
  //
  //   // call mock search api
  //   this.getData(facetQuery);
  // }


}
