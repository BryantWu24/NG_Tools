import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbCardModule, NbRouteTabsetModule, NbTabsetModule, NbListModule, NbUserModule, NbIconModule, NbChatModule, NbChatMessageComponent, NbInputModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChatRoutingModule, routedComponents } from './chat-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
const components = [
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
        NbButtonModule,
        FormsModule
    ],
    declarations: [...routedComponents, ...components],
    providers: [ChatService]
})
export class ChatModule { }
