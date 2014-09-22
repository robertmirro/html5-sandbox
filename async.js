function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

console.log('sleep external - before: %s', new Date());
sleep(4000);  // sleep for 4 seconds
console.log('sleep external - after: %s', new Date());
