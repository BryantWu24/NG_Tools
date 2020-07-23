import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
    selector: 'jb-chat-room',
    templateUrl: './chat-room.component.html',
    styleUrls:['./chat-room.scss']
})
export class ChatRoomComponent {
    public roomInfo;
    constructor(private chatService: ChatService) {
         this.chatService.getRoomInfo().subscribe((info)=>{
            this.roomInfo =info;
        });
    }
}
