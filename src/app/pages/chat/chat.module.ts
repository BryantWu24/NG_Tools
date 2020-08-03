import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbCardModule, NbRouteTabsetModule, NbTabsetModule, NbListModule, NbUserModule, NbIconModule, NbChatModule, NbChatMessageComponent, NbInputModule, NbButtonModule, NbDialogModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChatRoutingModule, routedComponents } from './chat-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatMsgBoxComponent } from './msgBox/chat-msgBox.component';
import { ChatMessageComponent } from './msg/chat-msg.component';
const components = [
    ChatMsgBoxComponent,
    ChatMessageComponent
];

@NgModule({
    imports: [
        ThemeModule,
        ChatRoutingModule,
        NbCardModule,
        NbTabsetModule,
        NbRouteTabsetModule,
        NbListModule,
        NbIconModule,
        NbEvaIconsModule,
        NbChatModule,
        NbUserModule,
        NbInputModule,
        NbDialogModule.forChild(),
        NbButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [...routedComponents, ...components],
    providers: [ChatService]
})
export class ChatModule { }
