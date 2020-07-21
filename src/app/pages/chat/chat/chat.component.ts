import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
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
    sendMessage2(): void {
        let message = {
            type: 'text',
            name: 'USER',
            picUrl: 'assets/images/eva.png',
            message: this.userInput,
            sender: 'myself',
            time: formatDate(new Date(), 'HH:mm:ss', 'zh-tw', '+0800')
        }
        this.chatService.saveHistory(message);
        this.userInput ="";
    }
    onEnter(e){
        this.sendMessage2();
    }

    
    ngOnInit(): void {
        window.onbeforeunload = () => { this.ngOnDestroy(); }
    }

    ngOnDestroy(): void {
        sessionStorage.setItem('history', JSON.stringify(this.history));
    }


    messages: any[];




    constructor(protected chatService: ChatService, private router: Router) {
        this.messages = this.chatService.loadMessages();
        this.chatService.getHistory().subscribe((v) => {
            this.history = v;
        });
        console.log('hidsoty', this.history);
    }


    closeChatMsgBox() {
        this.router.navigate(['/pages/chat/index']);
    }

    sendMessage(event: any) {
        const files = !event.files ? [] : event.files.map((file) => {
            return {
                url: file.src,
                type: file.type,
                icon: 'nb-compose',
            };
        });

        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
        const botReply = this.chatService.reply(event.message);
        if (botReply) {
            setTimeout(() => { this.messages.push(botReply); }, 500);
        }
    }
}
