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
}

startWorker().catch(console.error);
