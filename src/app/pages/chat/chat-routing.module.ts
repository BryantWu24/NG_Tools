import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatIndexComponent } from './index/chat-index.component';
import { ChatComponent } from './chat.component';
import { ChatRoomComponent } from './room/chat-room-index.component';
import { ChatMsgBoxComponent } from './chat/chat.component';
import { NbChatMessageFileComponent, NbChatMessageComponent, NbChatMessageMapComponent, NbChatMessageQuoteComponent, NbChatMessageTextComponent } from '@nebular/theme';
import { ChatMessageComponent } from './chatMessage/chat-message.component';

const routes: Routes = [{
    path: '',
    component: ChatComponent,
    children: [{
        path: 'index',
        component: ChatIndexComponent,
    },
    {
        path: 'room',
        component: ChatRoomComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatRoutingModule { }

export const routedComponents = [
    ChatComponent,
    ChatIndexComponent,
    ChatRoomComponent,
    ChatMsgBoxComponent,
    ChatMessageComponent
];
