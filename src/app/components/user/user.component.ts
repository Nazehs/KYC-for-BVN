import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Http} from '@angular/http';
//import{Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
 /*VARIABLES DECLARATIONS */
    
    bvn:Number;
    DOB:String;
    branch: string;
    fname: string;
    lname:string;
    middlName:string;
    mobile: string;
    regData:string;
    enrolCode:number;
    status:string;
    
   
    
    
  constructor(private http: Http) 
    { 
        /* INITIALIZING */
        console.log('constructor initialized');
         
//       
//      document.addEventListener('DOMContentLoaded', function(){
//          var loads = document.getElementById('preloader');
//          loads.style.display='none';
//          console.log(loads);
//      });
//        angular.element(window).bind('load', function(){
//          var loads = document.getElementById('preloader');
//          loads.style.display='none';
//          console.log(loads);})
//      
     }

  ngOnInit() {      
     
      //logging constructor
     console.log('ng started');
     
      
  }
    converttoarray(data){
        console.log(data);
        console.log("..............");
        
        //variables declarations 
        
         var elems = document.getElementById('lister');
         var error = document.getElementById('error-wp');
        
        //methods for display and hide components
        
        var hide = (elem) => elem.style.display='none';        
        
        var show = (elem) => elem.classList.add('Hidder');
        
        //        this.bvn = data.data.bvn;
        this.DOB = data.data.date_of_birth;
        this.branch = data.data.enrollment_branch;
        this.fname = data.data.first_name;
        this.lname = data.data.last_name;
        this.middlName = data.data.middle_name;
        this.mobile = data.data.phone_number;
        this.regData = data.data.registration_date;
        this.enrolCode = data.data.enrollment_bank;
        this.bvn = data.data.bvn;

        if(data.status == 'success') {
            return show(elems);
        }
        else {
            return show(error);
        }
        

    
    }
    
    //taken BVN as input from user
    addBvn(bvnumber){
            
        this.http.get('https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/'+bvnumber+'?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X')
        .map((res) => res.json()).subscribe((posts) => this.converttoarray(posts));
        return false;
    }

}