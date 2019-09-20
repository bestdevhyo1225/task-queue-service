import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    dotenv.config({ path : '.env' });
}

export const secret = () => ({
    TASK_QUEUE_ROLE : process.env.TASK_QUEUE_ROLE,
    REGION : process.env.REGION
});
