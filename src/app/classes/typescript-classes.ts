  export class Greeter {
    greeting: string;

    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      return "Hello, " + this.greeting;
    }

  }

  export class SearchParameter{
    parameterName: string;
    parameterValue: string;

    queryParameter: string;

    constructor(paramName:string, paramValue:string){
      this.parameterName = paramName;
      this.parameterValue = paramValue;

      this.queryParameter = paramName + paramValue;
    }

  }

  export class Facet {
    category: string;
    facetName: string;
    total: number;
    strings: string;
  }



