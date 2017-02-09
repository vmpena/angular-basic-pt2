import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Facet } from '../facets/facet'

@Injectable()
export class FacetService {

  private dataSource = './app/api/facets/facetData.json';

  constructor(private http: Http) { }

  getFacets(): Observable<Facet[]> {

    console.log("Getting facets from facet.service...");

    return this.http.get(this.dataSource)
      .map((response: Response) => <Facet[]> response.json())
      .catch(this.handleError);

  }

  getFacet(name: string): Observable<Facet> {
    return this.getFacets()
      .map((facets: Facet[]) => facets.find(f => f.facetName === name));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error getting facets');
  }

}
