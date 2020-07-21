import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of } from 'rxjs';

@Injectable()
export class ChatService {
    constructor() {

    }

    public history;

    getHistory(): Observable<any> {
        this.history = [{
            type:'text',
            name:'AVA',
            picUrl:'assets/images/eva.png',
            message:'This is a Message.',
            sender:'other',
            time:'16:10:21'
        },{
            type:'text',
            name:'AVA',
            picUrl:'assets/images/eva.png',
            message:'This is a Message.',
            sender:'other',
            time:'16:11:21'
        },{
            type:'text',
            name:'EVA',
            picUrl:'assets/images/eva.png',
            message:'This is a MyMessage.',
            sender:'myself',
            time:'16:12:21'
        },,{
            type:'text',
            name:'AVA',
            picUrl:'assets/images/eva.png',
            message:'This is a Message.',
            sender:'other',
            time:'16:12:25'
        },{
            type:'text',
            name:'AVA',
            picUrl:'assets/images/eva.png',
            message:'This is a Message.',
            sender:'other',
            time:'16:13:21'
        }];
        return of(this.history)
    }
}
