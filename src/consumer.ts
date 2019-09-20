import { TASK_QUEUE_SQS_URL, TASL_QUEUE_WORKER_ARN } from '../config/secret';
import { CallbackFunc, Message, ReceiveData } from './type-definition';
import AWS from 'aws-sdk';

const sqs: any = new AWS.SQS();
const lambda: any = new AWS.Lambda();

export const handler = async (event: any, context: any, callback: CallbackFunc) => {
    const params = {
        QueueUrl: TASK_QUEUE_SQS_URL,
        MessageAttributeNames: [ 'All' ],
        MaxNumberOfMessages: 10
    };

    try {
        const data: ReceiveData = await sqs.receiveMessage(params).promise();
        if (data.Messages && data.Messages.length > 0) {
            //  Invoke Lambda
            const jobs: Array<any> = data.Messages.map((message: Message) => {
                const payload = {
                    QueueUrl: params.QueueUrl,
                    Message: message
                };
                const lambdaInvokeParams = {
                    FunctionName: TASL_QUEUE_WORKER_ARN,
                    InvocationType: 'Event',
                    Payload: JSON.stringify(payload)
                };
                return lambda.invoke(lambdaInvokeParams).promise();
            });
            return Promise.all(jobs);
        }
    } catch (error) {
        console.error(error);
        return callback(error);
    }
};
