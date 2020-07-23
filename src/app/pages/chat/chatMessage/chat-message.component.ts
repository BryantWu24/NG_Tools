import { Component, Input, OnInit, OnChanges } from "@angular/core";

@Component({
    selector: 'jb-chatMessage',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, OnChanges {
    @Input() messageData;

    public message = {};
    ngOnInit(): void {
        this.message = this.messageData;
    }

    ngOnChanges(): void {
        this.message = this.messageData;
    }    
}
