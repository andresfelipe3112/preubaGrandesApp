export interface MessagesResponse {
  messages: {
    status: string;
    messages: Array<Message>;
    hasMoreBefore: boolean;
    hasMoreAfter: boolean;
  };
}

export interface Message {
  messageId: string;
  timestamp: number;
  deletedTimestamp: number;
  from: {
    sessionId: string;
    screenName: string;
    role: string;
    lastUpdate: number;
  };
  mimeType: string;
  message: string;
  tags: Array<any>;
}

export interface LiveStream {
  name: string;
  creatorId: {
    _id: string;
    name: string;
  };
  active: string;
  products: Array<any>;
  token: string;
  state: string;
  authTokenChanel: string;
  publishTokenChanel: string;
  consumers: Array<any>;
  streamIds: Array<any>;
  timestampStart: number;
  timestampEnd: number;
  duration: number;
  dateOfLivestream: Date;
  _id: string;
  urlImage: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  __v: number;
}
