function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

function sequentialExecution() {
    const startTime = new Date();

    delay(1000)
        .then(() => delay(2000))
        .then(() => delay(3000))
        .then(() => {
            const endTime = new Date();
            const duration = endTime - startTime;
            console.log(`Sequential execution completed in ${duration} milliseconds`);
        });
}

// Usage
sequentialExecution();
