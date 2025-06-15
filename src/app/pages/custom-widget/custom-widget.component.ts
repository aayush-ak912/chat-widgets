import { Component } from '@angular/core';
import { BotConfig, Widget, botForm } from '../../Interface/interface'

@Component({
  selector: 'app-custom-widget',
  templateUrl: './custom-widget.component.html',
  styleUrls: ['./custom-widget.component.css']
})
export class CustomWidgetComponent {
  layout: number = 0;



  bForm: botForm = {
    inputfields:17,
    fields: [{ name: '', type: 'text' }]
  };

  BotConfig: BotConfig = {
    id: 'bot-123',
    entityId: 'entity-456',
    botName: `Vokal's Bot`,
    formEnable: true,
    wmsg:'Hey There! How Can i Help You',
    enableVoiceChat: false,
    assemblyAI: { apiKey: 'dummy-assembly-key' },
    openAI: { apiKey: 'dummy-openai-key' },
    elevenLabs: { apiKey: 'dummy-elevenlabs-key' },
    qdrant: { url: 'https://dummy-qdrant.io', collectionName: 'dummy-collection' },
    awsLogin: { accessKeyId: 'dummy-access-key', secretAccessKey: 'dummy-secret' },
    azureLogin: { tenantId: 'dummy-tenant', clientId: 'dummy-client' },
    brightPattern: { enable: true, integrationId: 'bp-1234' },
    prepaidBalanceUSD: 100.0,
    totalTokensUsed: 5000,
    totalCost: 0.25,
    billingRatePer2000: 0.01,
    tokensBilled: 4000,
    allowOverage: false
  };

  onInputFieldsChange(count: number): void {
  this.bForm.inputfields = count;
  const currentLength = this.bForm.fields.length;
  if (count > currentLength) {
    for (let i = currentLength; i < count; i++) {
      this.bForm.fields.push({ name: '', type: 'text' });
    }
  } else if (count < currentLength) {
    this.bForm.fields.splice(count);
  }
}

}
