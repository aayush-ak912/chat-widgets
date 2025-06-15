import { Component, Input, ViewChild, ElementRef, AfterViewChecked, HostListener } from '@angular/core';
import { botForm, BotConfig, Message } from '../../Interface/interface';

@Component({
  selector: 'app-bubblepop',
  templateUrl: './bubblepop.component.html',
  styleUrls: ['./bubblepop.component.css']
})
export class BubblepopComponent implements AfterViewChecked {
  @Input() botConfig!: BotConfig;
  @Input() bForm!: botForm;

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  startChat = false;
  showOptions = false;
  Messages: Message[] = [];
  inputMessage = '';
  botAlertSound = new Audio('assets/sounds/incoming.mp3');

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  toggleChat() {
    this.startChat = !this.startChat;
    this.showOptions = false;
  }

  toggleOptions(event: MouseEvent) {
    event.stopPropagation();
    this.showOptions = !this.showOptions;
  }

  @HostListener('document:click')
  closeOptions() {
    this.showOptions = false;
  }

  sendUserMessage() {
    if (this.inputMessage.trim()) {
      this.Messages.push({ sender: 'user', message: this.inputMessage });
      this.inputMessage = '';

      // Simulate bot reply
      setTimeout(() => {
        const botReply = { sender: 'bot', message: 'Thanks for your message!' };
        this.Messages.push(botReply);
        this.playBotSound();
      }, 600);
    }
  }

  playBotSound() {
    this.botAlertSound.currentTime = 0;
    this.botAlertSound.play().catch(err => {
      console.warn('Audio playback failed:', err);
    });
  }

  openPopup() {
    console.log('Open in Popup clicked');
  }

  sendFeedback() {
    console.log('Feedback clicked');
  }

  endChat() {
    this.Messages = [];
    this.startChat = false;
  }
}
