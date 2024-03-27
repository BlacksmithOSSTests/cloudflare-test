const { unstable_dev } = require("wrangler");

async function startWorker() {
    const worker = await unstable_dev('src/index.ts', {
        experimental: { disableExperimentalWarning: true },
        persist: true,
        port: 8767,
        compatibilityFlags: ['nodejs_compat'],
    });
    console.log("Worker started");
    // Optionally, keep the process running or perform additional checks here

    // Make a fetch request to the worker
    try {
        const response = await fetch('http://localhost:8767');
        const body = await response.text();
        console.log('Response from worker:', body);
    } catch (error) {
        console.error('Failed to fetch from the worker:', error);
    }
}

startWorker().catch(console.error);
