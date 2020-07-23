import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { Console } from 'console';

@Injectable()
export class ChatService {

    public history = [];
    public roomList;
    public roomInfo;

    setHistory(message) {
        this.history.push(message);
    }

    setRoomInfo(info) {
        sessionStorage.setItem('roomInfo', JSON.stringify(info));
        this.roomInfo = info;
    }

    saveHistory() {
        sessionStorage.setItem('history', JSON.stringify(this.history));
    }

    getRoomInfo(): Observable<any> {
        if (sessionStorage.getItem('roomInfo')) {
            this.roomInfo = JSON.parse(sessionStorage.getItem('roomInfo'));
            return of(this.roomInfo);
        } else {
            return of('roomInfo is not exist');
        }
    }

    getRoomList(): Observable<any> {
        this.roomList = [{
            id: '001',
            name: '房間1',
            avatarPicUrl: 'assets/images/eva.png',
            coverPicUrl: 'assets/images/image.jpg',
            memberCount: 6,
            owner: 'Jimmy',
            createTime: '2020-04-12 12:12:43'
        }, {
            id: '002',
            name: '房間2',
            avatarPicUrl: 'assets/images/eva.png',
            coverPicUrl: 'assets/images/image.jpg',
            memberCount: 17,
            owner: 'Diane',
            createTime: '2020-04-23 12:42:43'
        }, {
            id: '003',
            name: '房間3',
            avatarPicUrl: 'assets/images/eva.png',
            coverPicUrl: 'assets/images/image.jpg',
            memberCount: 116,
            owner: 'Bryant',
            createTime: '2020-04-23 12:27:43'
        }, {
            id: '004',
            name: '房間4',
            avatarPicUrl: 'assets/images/eva.png',
            coverPicUrl: 'assets/images/image.jpg',
            memberCount: 2,
            owner: 'Alex',
            createTime: '2020-04-23 12:42:54'
        }, {
            id: '005',
            name: '房間5',
            avatarPicUrl: 'assets/images/eva.png',
            coverPicUrl: 'assets/images/image.jpg',
            memberCount: 116,
            owner: 'Bryant',
            createTime: '2020-04-23 12:27:43'
        }, {
            id: '006',
            name: '房間6',
            avatarPicUrl: 'assets/images/eva.png',
            coverPicUrl: 'assets/images/image.jpg',
            memberCount: 2,
            owner: 'Alex',
            createTime: '2020-04-23 12:42:54'
        }];
        return of(this.roomList);
    }

    getHistory(): Observable<any> {
        if (sessionStorage.getItem('history')) {
            this.history = JSON.parse(sessionStorage.getItem('history'));
        } else {
            for (let i = 0; i < Math.random() * 10; i++) {
                if (i % 2 == 0) {
                    this.history.push({
                        type: 'text',
                        name: 'Guest',
                        avatarPicUrl: 'assets/images/eva.png',
                        message: 'This is a MyMessage.' + i,
                        sender: 'myself',
                        time: '16:12:2' + i
                    })
                } else {
                    this.history.push({
                        type: 'text',
                        name: 'Guest',
                        avatarPicUrl: 'assets/images/eva.png',
                        message: 'This is a MyMessage.' + i,
                        sender: 'other',
                        time: '16:12:2' + i
                    })
                }
            }
        }
        return of(this.history)
    }

    clearChatSessionStorage() {
        sessionStorage.removeItem('history');
        sessionStorage.removeItem('roomInfo');
    }

}
