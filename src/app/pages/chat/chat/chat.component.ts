import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { formatDate, registerLocaleData } from '@angular/common';
import zhHant from '@angular/common/locales/zh-Hant';
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
    constructor(protected chatService: ChatService, private router: Router) {
        this.chatService.getHistory().subscribe((v) => {
            this.history = v;
        });
    }

    sendMessage(): void {
        let message = {
            type: 'text',
            name: 'USER',
            picUrl: 'assets/images/eva.png',
            message: this.userInput,
            sender: 'myself',
            time: formatDate(new Date(), 'HH:mm:ss', 'zh-tw', '+0800')
        }
        this.chatService.saveHistory(message);
        this.userInput = "";
    }

    onEnter(e) {
        this.sendMessage();
    }


    closeChatMsgBox() {
        this.router.navigate(['/pages/chat/index']);
    }


    ngOnInit(): void {
        window.onbeforeunload = () => { this.ngOnDestroy(); }
    }

    ngOnDestroy(): void {
        sessionStorage.setItem('history', JSON.stringify(this.history));
    }
}
