import { Event, CallbackFunc } from './type-definition';
import AWS from 'aws-sdk';

const sqs: any = new AWS.SQS();

export const handler = async (event: Event, context: any, callback: CallbackFunc) => {
    const { QueueUrl, Message } = event;
    const params = {
        QueueUrl: QueueUrl,
        ReceiptHandle: Message.ReceiptHandle
    };

    try {
        await sqs.deleteMessage(params).promise();
        return callback(null);
    } catch (error) {
        console.error(error);
        return callback(error);
    }
};
