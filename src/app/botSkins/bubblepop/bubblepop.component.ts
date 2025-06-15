import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener
} from '@angular/core';
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
  isWithAgent = false;
  collectingForm = false;
  currentFieldIndex = 0;
  formData: { [key: string]: string } = {};

  botAlertSound = new Audio('assets/sounds/incoming.mp3');

  transferTriggers: string[] = [
    'transfer to an agent',
    'i want to talk to an agent',
    'i want to talk with an agent',
    'get me a human',
    'connect to support',
    'human support',
    'talk to a real person',
    'connect me to a human'
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
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
    const trimmedMsg = this.inputMessage.trim();
    if (!trimmedMsg) return;

    this.Messages.push({ sender: 'user', message: trimmedMsg });
    this.inputMessage = '';

    // 1️⃣ Handle form inputs one-by-one
    if (this.collectingForm) {
      const currentField = this.bForm.fields[this.currentFieldIndex];
      this.formData[currentField.name] = trimmedMsg;

      this.currentFieldIndex++;

      if (this.currentFieldIndex < this.bForm.fields.length) {
        const nextField = this.bForm.fields[this.currentFieldIndex];
        this.Messages.push({
          sender: 'bot',
          message: `Please enter your ${nextField.name}:`
        });
        this.playBotSound();
      } else {
        this.collectingForm = false;

        // Optional: Save form data
        localStorage.setItem('collectedFormData', JSON.stringify(this.formData));
        console.log('Collected Form Data:', this.formData);

        // Bot confirms form completion
        this.Messages.push({
          sender: 'bot',
          message: `Thanks! Transferring you to an agent...`
        });
        this.playBotSound();

        setTimeout(() => {
          this.transferToAgent();
        }, 1000);
      }

      return;
    }

    // 2️⃣ Check for trigger to start form or transfer
    const lowered = trimmedMsg.toLowerCase();
    const triggerDetected = this.transferTriggers.some(trigger =>
      lowered.includes(trigger)
    );

    if (!this.isWithAgent && triggerDetected) {
      if (this.botConfig?.formEnable && this.bForm?.fields?.length > 0) {
        this.startFormFlow();
      } else {
        this.transferToAgent();
      }
    } else {
      // 3️⃣ Regular bot or agent response
      setTimeout(() => {
        const reply = this.isWithAgent
          ? { sender: 'agent', message: 'Agent response: I’m here to help you!' }
          : { sender: 'bot', message: 'Bot response: Thanks for your message!' };

        this.Messages.push(reply);
        this.playBotSound();
      }, 600);
    }
  }

  startFormFlow() {
    this.collectingForm = true;
    this.currentFieldIndex = 0;
    this.formData = {};

    const firstField = this.bForm.fields[0];
    this.Messages.push({
      sender: 'bot',
      message: `Before I transfer you, I need some info. Please enter your ${firstField.name}:`
    });
    this.playBotSound();
  }

  transferToAgent() {
    this.isWithAgent = true;
    this.Messages.push({
      sender: 'agent',
      message: 'Agent has joined the chat. How can I assist you today?'
    });
    this.playBotSound();
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
    this.isWithAgent = false;
    this.collectingForm = false;
    this.formData = {};
    this.currentFieldIndex = 0;
    console.log(this.formData)

  }
}
