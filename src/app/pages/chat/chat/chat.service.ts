import { Injectable } from '@angular/core';

import { messages } from './messages';
import { botReplies, gifsLinks, imageLinks } from './bot-replies';
import { Observable, of } from 'rxjs';

@Injectable()
export class ChatService {


    loadMessages() {
        return messages;
    }

    loadBotReplies() {
        return botReplies;
    }

    public history;

    saveHistory(message) {
        this.history.push(message);
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



    reply(message: string) {
        const botReply: any = this.loadBotReplies()
            .find((reply: any) => message.search(reply.regExp) !== -1);

        if (botReply.reply.type === 'quote') {
            botReply.reply.quote = message;
        }

        if (botReply.type === 'gif') {
            botReply.reply.files[0].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
        }

        if (botReply.type === 'pic') {
            botReply.reply.files[0].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        }

        if (botReply.type === 'group') {
            botReply.reply.files[1].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
            botReply.reply.files[2].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        }

        botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
        return { ...botReply.reply };
    }
}
