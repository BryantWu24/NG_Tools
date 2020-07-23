import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
    selector: 'jb-chat-index',
    templateUrl: './chat-index.component.html',
})
export class ChatIndexComponent {

    constructor(private router: Router, private chatService: ChatService) {
        this.chatService.getRoomList().subscribe((list) => {
            this.roomList = list;
        });

    }
    private users = {
        nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
        eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
        jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
        lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
        alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
        kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
    };

    private types = {
        family: '家人',
        friends: '朋友',
        black: '拒絕往來戶',
    };

    private time: Date = new Date;
    public recent = [
        { user: this.users.alan, type: this.types.friends, time: '2020-07-20 12:20:13' },
        { user: this.users.eva, type: this.types.friends, time: '2020-07-20 12:10:13' },
        { user: this.users.nick, type: this.types.black, time: '2020-07-20 12:05:13' },
        { user: this.users.lee, type: this.types.family, time: '2020-07-19 12:20:13' },
        { user: this.users.jack, type: this.types.black, time: '2020-07-19 12:15:13' },
        { user: this.users.kate, type: this.types.family, time: '2020-07-19 12:10:13' },
        { user: this.users.kate, type: this.types.friends, time: '2020-07-10 12:20:13' },
        { user: this.users.jack, type: this.types.black, time: '2020-07-09 12:20:13' },
    ];

    public contact = [
        { user: this.users.alan, type: this.types.family, time: '2020-07-20 12:20:13' },
        { user: this.users.eva, type: this.types.family, time: '2020-07-20 12:10:13' },
        { user: this.users.nick, type: this.types.friends, time: '2020-07-20 12:05:13' },
        { user: this.users.lee, type: this.types.black, time: '2020-07-19 12:20:13' },
        { user: this.users.jack, type: this.types.friends, time: '2020-07-19 12:15:13' },
        { user: this.users.kate, type: this.types.family, time: '2020-07-19 12:10:13' },
        { user: this.users.kate, type: this.types.friends, time: '2020-07-10 12:20:13' },
        { user: this.users.jack, type: this.types.black, time: '2020-07-09 12:20:13' },
    ];

    public roomList;

    enterRoom(info?): void {
        if (info) {
            this.chatService.setRoomInfo(info);
            this.router.navigate(['pages/chat/room']);
        }
        else {
            this.router.navigate(['pages/chat/room']);
        }
    }

}
