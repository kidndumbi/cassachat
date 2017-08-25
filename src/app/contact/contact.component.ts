import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService  } from '../services/app.services';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';



@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html',
    providers: []
})

export class contactComponent implements OnInit, OnDestroy {

    contacts:any[];
    changesSaved:boolean = false;
    visitors: string[] = [];
    message: any[];
    messages: Observable<any[]>;
    subscription: Subscription;

    constructor(private services: MainService, private route: Router,private auth: AuthService ) { 

        this.auth.getObv().subscribe(data=>{

            console.log(data);

        });

        // this.auth.getVisitors().subscribe(v=>{
        //     //this.visitors.push(v);

        //     console.log(v);
        //     console.log(this.visitors);
        //     this.visitors.push(v);

            
        // })

        this.subscription = this.auth.getMessage().subscribe(message => {
             this.message = message.visitors; 
             console.log(this.message);
            });

        this.messages = this.auth.getMessage();

    }

    ngOnInit() {

         this.contacts = this.services.GetUsers();
         console.log(this.contacts)

     }

     addVisitor(v:string){

       console.log(v);

        this.auth.addVisitor(v);
     }

     submit(){
         this.changesSaved = true;
         this.route.navigate(['../']);
     }

     sendMessage(): void {
        // send message to subscribers via observable subject
        this.auth.sendMessage('Message from Home Component to App Component!');
    }
 
    clearMessage(): void {
        // clear message
        this.auth.clearMessage();
    }

     ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}