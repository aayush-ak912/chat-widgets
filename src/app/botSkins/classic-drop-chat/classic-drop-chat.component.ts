import { Component, Input, Output, EventEmitter, ViewChild, SimpleChanges, ElementRef } from '@angular/core';
import { BotConfig, LayoutSettings} from '../../Interface/interface'; 

@Component({
  selector: 'app-classic-drop-chat',
  templateUrl: './classic-drop-chat.component.html',
  styleUrls: ['./classic-drop-chat.component.css']
})
export class ClassicDropChatComponent {
// Text input for new messages
  userMessage: string = '';
  isChatOpen: boolean = false;
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
  @Input() chatBot: BotConfig = null as any;
  @Input() botWidget!: LayoutSettings;

  // Scroll reference
  @ViewChild('chatContent') private chatContent!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    // this.botWidget.Iconurl=this.botIcon;
  }

  // ✅ Inputs to match your existing chat system
  @Input() messages: {
    id: number;
    content: string;
    sentDate: string;
    sentByClient: boolean;
    senderId: string | null;
    receiverClientId: string | null;
  }[] = [];
  @Input() activeUser: { name?: string; image?: string; status?: string } | null = null;
  @Input() connectionStatus: string = 'Offline';

  // ✅ Outputs to handle UI events (optional)
  @Output() sendMessageEvent = new EventEmitter<string>();
  @Output() userDetailsClicked = new EventEmitter<void>();
  @Output() bringBotOnline = new EventEmitter<void>();

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  isUser(msg: { sentByClient: boolean }): boolean {
    return msg.sentByClient;
  }



  private scrollToBottom(): void {
    try {
      this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Auto-scroll error:', err);
    }
  }

  isFullScreen: boolean = false;
  showDropdown = false;

  toggleFullScreen() {
    this.isFullScreen=!this.isFullScreen;
    // this.isChatOpen=!this.isChatOpen;
    // const baseUrl = window.location.origin;
    // const botName = this.botWidget.botName || 'default';
    // const width   = this.botWidget.iconWidth || 600;
    // const height  = this.botWidget.iconHeight || 600;

    // const url = `${baseUrl}/chat/${botName}`;

    // window.open(
    //   url,
    //   'chatbot',
    //   `width=${width},height=${height},resizable=yes,scrollbars=yes`
    // );

  }


  toggleDropdown(): void {
    this.isChatOpen = false;
    this.showDropdown = !this.showDropdown;
  }

  closeDropdown(): void {
    this.showDropdown = false;
  }



  // Called when user presses Enter or clicks Send
  sendMessage(): void {
    const trimmed = this.userMessage.trim();
    if (!trimmed) return;
    this.sendMessageEvent.emit(trimmed);
    this.userMessage = '';
    if (this.connectionStatus === 'Offline') {
      this.bringBotOnline.emit()
    }
  }

  onEnterPressed(event: any): void {
    event.preventDefault();
    this.sendMessage();
  }

  onUserDetailsClick(): void {
    // this.userDetailsClicked.emit();
    console.log(this.messages)
  }

  getTranscript(): void {
    console.log('Fetching chat transcript...');
    // Your logic here
  }

  onRating(): void {
    console.log('Opening rating dialog...');
    // Your logic here
  }

  openPopup(): void {
    console.log('Opening popup...');
    // Your logic here
  }

  end(): void {
    console.log('Ending chat session...');
    // Your logic here
  }

}
