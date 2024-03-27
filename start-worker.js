import { unstable_dev } from 'wrangler'

async function startWorker() {
    const worker = await unstable_dev('src/index.ts', {
        experimental: { disableExperimentalWarning: true },
        persist: true,
        port: 8767,
        compatibilityFlags: ['nodejs_compat', 'streams_enable_constructors'],
    });
    console.log("Worker started");
    // Optionally, keep the process running or perform additional checks here
}

startWorker().catch(console.error);
