import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

    loggedIn: boolean = true;
    obv: Observable<any>;
    visitors: string[] =  [
        "Namita",
        "Amit",
        "Rohit",
        "Neetika"
       ];

    private subject = new Subject<any>();



    constructor() {
        this.sendMessage('hey there');
        //this.subject.next({ visitors: this.visitors })this.

    //    this.visitors =  [
    //     "Namita",
    //     "Amit",
    //     "Rohit",
    //     "Neetika"
    //    ];

 

     }

     sendMessage(message: string) {

        this.visitors.push(message);

        this.subject.next({ visitors: this.visitors })
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    isAuthenticated(){
    const promise = new Promise(
        (resolve, reject) => {
            setTimeout(()=> {
                resolve(this.loggedIn);
                reject("not resolved");
            }, 800)
        }
    )
      return promise;
    }

    logIn(){

        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }

    getObv():Observable<any>{
        
        return Observable.of(1,2,3,4,5,2,8).map(x=>{
            return (x + 25) + "hey there";
        });
    }

    getVisitors(){
       
       return  Observable.from(this.visitors)

    }

    addVisitor(visitor: string):void{

        this.visitors.push(visitor);  
        console.log(this.visitors);
    }


}