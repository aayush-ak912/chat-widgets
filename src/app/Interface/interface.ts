
export interface currentConfigSource {
  user_id: number;
  email: string;
  username: string;
  configapiUrl: string;
  entityId: string;
  userHeaders: UserHeaders;
  warnings: string[];
}

export interface Entity {
  id: string;
  name: string;
  email: string;
  phone: string;
  disabled: boolean;
  contractEndDate: Date;
}

export interface UserHeaders {
  Authorization: string;
}

export interface User {
  user_id: string;
  userName: string;
  token: string;
  email: string;
  roles: string[];
  disabled: boolean;
  entityId: string;
  warnings: string[];
}

export interface NewUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  entityId: string;
  email: string;
  phoneNumber: string;
  disabled: boolean
}

export interface editUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  entityId: string;
  email: string;
  phoneNumber: string;
  disabled: boolean
}

export interface BrightPattern {
  id: number;
  userName: string;
  clientSecret: string;
  tenantUrl: string;
  apiUrl: string;
  botConfigId: string;
  isEnabled: boolean;
  appId:string;
}

export interface LayoutSettings {
  selectedLayout: number;
  Iconurl: string;
  IconBG: string;
  iconWidth: number;
  iconHeight: number;
  botName:string;
}




export interface BotConfig {
  id: string;
  entityId: string;
  botName: string;
  formEnable:boolean;
  enableVoiceChat: boolean;
  assemblyAI: any | null;
  openAI: any | null;
  elevenLabs: any | null;
  qdrant: any | null;
  awsLogin: any | null;
  azureLogin: any | null;
  brightPattern: any | null;
  // Billing fields
  prepaidBalanceUSD: number;
  totalTokensUsed: number;
  totalCost: number;
  billingRatePer2000: number;
  tokensBilled: number;
  allowOverage: boolean;
  //layout related 
  // layoutId:number;
}

export interface Widget {
  id: string;                  
  botName: string;             
  botIconUrl?: string;         
  width?: string;              
  height?: string;            
  welcomeMessage?: string;     
  isActive: boolean;          
  createdAt: Date;            
  updatedAt: Date;            
}

export interface botForm {
  inputfields: number;
  fields: { name: string; type: string }[];
}


export interface ReleaseNote {
  /**
   * Max length: 10
   * Pattern: Only numbers and the dot (.) character are allowed.
   */
  id: string;
  remove?: boolean;
  createnew?: boolean;
  created_by_id?: number;
  creation_date?: string;
  modified_by_id?: number;
  modified_date?: string;
  /**
   * Max HTML content length: 10000 characters
   */
  message: string;
}

export interface EntityWithBotConfigs {
  id: string;
  name: string;
  disabled: boolean;
  botConfigs: BotConfig[];
}


export interface knowledgeCardSettings {
  image?: string;
  routerLink?: string;
  altText?: string;
  readMoreLink?: string;
  avatarClass?: string;
  authorImage?: string;
  link?: string;
  imageClass?: string;
  imageClass1?: string;
  imageBottom?: boolean;
  imageTop?: boolean;
};

interface GroupData {
  name?: string;
  image?: string;
  time?: string;
  status?: string;
  class?: string;
  class1?: string;
  class2?: string;
  message?: string;
  name1?: string;
  badge?: number;
}

