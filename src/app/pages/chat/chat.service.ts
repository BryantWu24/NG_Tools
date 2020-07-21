import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable()
export class ChatService {

    public history;
    public roomList;

    saveHistory(message) {
        this.history.push(message);
    }

    getRoomList():Observable<any>{
        this.roomList =[{
            id:'001',
            name:'房間1',
            avatarUrl:'assets/images/eva.png',
            coverPicUrl:'assets/images/image.jpg',
            memberCount:6,
            owner:'Jimmy',
            createTime:'2020-04-12 12:12:43'
        },{
            id:'002',
            name:'房間2',
            avatarUrl:'assets/images/eva.png',
            coverPicUrl:'assets/images/image.jpg',
            memberCount:17,
            owner:'Diane',
            createTime:'2020-04-23 12:42:43'
        },{
            id:'003',
            name:'房間3',
            avatarUrl:'assets/images/eva.png',
            coverPicUrl:'assets/images/image.jpg',
            memberCount:116,
            owner:'Bryant',
            createTime:'2020-04-23 12:27:43'
        },{
            id:'004',
            name:'房間4',
            avatarUrl:'assets/images/eva.png',
            coverPicUrl:'assets/images/image.jpg',
            memberCount:2,
            owner:'Alex',
            createTime:'2020-04-23 12:42:54'
        },{
            id:'005',
            name:'房間5',
            avatarUrl:'assets/images/eva.png',
            coverPicUrl:'assets/images/image.jpg',
            memberCount:116,
            owner:'Bryant',
            createTime:'2020-04-23 12:27:43'
        },{
            id:'006',
            name:'房間6',
            avatarUrl:'assets/images/eva.png',
            coverPicUrl:'assets/images/image.jpg',
            memberCount:2,
            owner:'Alex',
            createTime:'2020-04-23 12:42:54'
        }];
        return of(this.roomList);
    }

    getHistory(): Observable<any> {
        if (sessionStorage.getItem('history')) {
            this.history = JSON.parse(sessionStorage.getItem('history'));
        } else {
            this.history = [{
                type: 'text',
                name: 'Guest',
                picUrl: 'assets/images/eva.png',
                message: 'This is a MyMessage.',
                sender: 'myself',
                time: '16:12:21'
            }, {
                type: 'text',
                picUrl: 'assets/images/eva.png',
                message: 'This is a SystemMessage.',
                sender: 'system',
                time: '16:12:21'
            }, {
                type: 'text',
                name: 'Guest',
                picUrl: 'assets/images/eva.png',
                message: 'This is a MyMessage.',
                sender: 'myself',
                time: '16:12:21'
            }, {
                type: 'text',
                name: 'Guest2',
                picUrl: 'assets/images/eva.png',
                message: 'This is a Message.',
                sender: 'other',
                time: '16:12:25'
            }, {
                type: 'text',
                name: 'Guest3',
                picUrl: 'assets/images/eva.png',
                message: 'This is a Message.',
                sender: 'other',
                time: '16:13:21'
            }];
        }
        return of(this.history)
    }
}
