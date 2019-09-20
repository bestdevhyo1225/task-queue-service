export interface Event {
    QueueUrl : string;
    Message  : { ReceiptHandle : string };
}

export interface CallbackFunc {
    (error?: Error, response?: any): void;
}

export interface MessageAttributes {
    [key: string] : {
        StringValue      : string;
        BinaryValue      : any;
        StringListValues : Array<string>;
        BinaryListValues : Array<any>;
        DataType         : string;
    };
}

export interface Message {
    MessageId?              : string;
    ReceiptHandle?          : string;
    MD5OfBody?              : string;
    Body?                   : string;
    MD5OfMessageAttributes? : string;
    Attributes?             : any;
    MessageAttributes?      : MessageAttributes;
}

export interface ReceiveData {
    Messages : Array<Message>;
}
