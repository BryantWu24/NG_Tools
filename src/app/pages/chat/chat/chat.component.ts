import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { formatDate, registerLocaleData } from '@angular/common';
import zhHant from '@angular/common/locales/zh-Hant';
import { Subscription } from 'rxjs';
registerLocaleData(zhHant, 'zh-tw');
@Component({
    selector: 'jb-chat-msgbox',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [ChatService],
})
export class ChatMsgBoxComponent implements OnDestroy, OnInit {

    public history;
    public userInput;
    public roomId;
    public roomInfo;
    public leaveReason: string = '';
    constructor(protected chatService: ChatService, private router: Router) {

    }

    sendMessage(): void {
        let message = {
            type: 'text',
            name: 'USER',
            avatarPicUrl: 'assets/images/eva.png',
            message: this.userInput,
            sender: 'myself',
            time: formatDate(new Date(), 'HH:mm:ss', 'zh-tw', '+0800')
        }
        this.chatService.setHistory(message);
        this.userInput = "";
    }

    onEnter(e) {
        this.sendMessage();
    }

    closeChatMsgBox() {
        this.chatService.clearChatSessionStorage();
        this.leaveReason = 'User leave the room';
        this.router.navigate(['/pages/chat/index']);
    }


    ngOnInit(): void {
        this.chatService.getHistory().subscribe((data) => {
            this.history = data;
        });
        this.chatService.getRoomInfo().subscribe((info) => {
            console.log('roomInfo', info);
            this.roomInfo = info;
        });
        window.onbeforeunload = () => { this.ngOnDestroy(); }
    }

    ngOnDestroy(): void {
        if (this.leaveReason == 'User leave the room') {

        } else {
            this.chatService.saveHistory();
        }
    }
}
