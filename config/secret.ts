import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    dotenv.config({ path : '.env' });
}

export const TASK_QUEUE_SQS_URL = process.env.TASK_QUEUE_SQS_URL as string;
export const TASL_QUEUE_WORKER_ARN = process.env.TASL_QUEUE_WORKER_ARN as string;
