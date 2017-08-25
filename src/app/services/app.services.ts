import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

    constructor() { }

    GetUsers(){
        return [
            {id:1, name: 'Victor'},
            {id:2, name: 'Lemon'}
        ]
    }
}