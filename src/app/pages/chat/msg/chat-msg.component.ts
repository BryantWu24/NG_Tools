import { Component, Input, OnInit, OnChanges } from "@angular/core";

@Component({
    selector: 'chat-msg',
    templateUrl: './chat-msg.component.html',
    styleUrls: ['./chat-msg.component.scss']
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
