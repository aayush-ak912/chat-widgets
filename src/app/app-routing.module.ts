import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { MediaComponent } from './pages/media/media.component';
import { ServerComponent } from './pages/server/server.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TerminalComponent } from './pages/terminal/terminal.component';
import { RecycleBinComponent } from './pages/recycle-bin/recycle-bin.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChatbotComponent} from './pages/chatbot/chatbot.component';
import { CustomWidgetComponent} from './pages/custom-widget/custom-widget.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/medias', component: MediaComponent },
  { path: 'admin/contacts', component: ContactComponent },
  { path: 'admin/terminal', component: TerminalComponent },
  { path: 'admin/recycle-bin', component: RecycleBinComponent },
  { path: 'admin/servers', component: ServerComponent },
  { path: 'admin/settings', component: SettingsComponent },
  { path: 'admin/documentation', component: DocumentationComponent },
  { path: 'chatwidget', component: ChatbotComponent},
  { path: 'admin/chatBot', component: CustomWidgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
