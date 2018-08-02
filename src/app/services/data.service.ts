import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
      console.log('dataservices');
  }
    
//    getpost(){
//       return this.http.get('https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/12345678901?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X')
//        .map((res) => res.json());
//    }

//    getCode(){
//        return this.http.get().map((code)=> code.json());
//    }
}
