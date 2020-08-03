import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Config } from '../../../@core/utils/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
    selector: 'chat-create',
    templateUrl: './chat-create-components.html'
})

export class ChatCreateComponent implements OnInit {
    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private chatService: ChatService) { }
    public createForm: FormGroup;
    public errorMessage: string;

    ngOnInit() {
        this.createForm = this.fb.group({
            roomName: ['', Validators.required],
            youtubeUrl: ['', Validators.required]
        });
    }
    linkYoutube(): void {
        window.open('http://www.youtube.com.tw', '_blank');
    }

    closeChatCreate():void{
        this.router.navigate(['pages/chat/index']);
    }

    submit(): void {
        for (const i in this.createForm.controls) {
            this.createForm.controls[i].markAsDirty();
            this.createForm.controls[i].updateValueAndValidity();
        }
        console.log('form', this.createForm);
        // {status: 1, data: "402828827381c83c0173ae7301200000"}

        if (this.createForm.status == "VALID") {
            const body = {
                "name": this.createForm.value.roomName,
                "masterVideo": this.createForm.value.youtubeUrl
            };

            this.http.post<any>(Config.API_Root + Config.API_CreateRoom, body).subscribe((res) => {
                if (res.status == 1) {
                    this.errorMessage = res.data;
                    sessionStorage.setItem('createRoomData', res.data);
                    this.errorMessage = null;

                    let mockInfo = {
                        avatarPicUrl: "assets/images/eva.png",
                        coverPicUrl: "assets/images/image.jpg",
                        createTime: "2020-04-12 12:12:43",
                        id: "001",
                        memberCount: 6,
                        name: this.createForm.value.roomName,
                        owner: "Jimmy",
                        youtubeUrl: this.createForm.value.youtubeUrl
                    }
                    this.chatService.setRoomInfo(mockInfo);
                    this.router.navigate(['pages/chat/room']);
                }
                else {
                    this.errorMessage = "建立失敗";
                }
            });
        } else {

            this.errorMessage = "請檢查欄位是否輸入完整";
        }
    }
}
