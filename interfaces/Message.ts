interface Message {
    id: string;
    text: string;
    isSender: boolean;
    createAt: Date;
    userSend: User
  }
  