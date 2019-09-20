import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    dotenv.config({ path : '.env' });
}

export const TASK_QUEUE_SQS_URL = process.env.TASK_QUEUE_SQS_URL as string;

export const secret = () => ({
    TASK_QUEUE_ROLE : process.env.TASK_QUEUE_ROLE as string,
    REGION : process.env.REGION as string
});
