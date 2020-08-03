import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatIndexComponent } from './index/chat-index.component';
import { ChatComponent } from './chat.component';
import { ChatRoomComponent } from './room/chat-room-index.component';
import { ChatCreateComponent } from './create/chat-create-components';

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
    }, {
        path: 'create',
        component: ChatCreateComponent
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
    ChatCreateComponent
];
