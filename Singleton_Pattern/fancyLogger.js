export default class FancyLogger {
    constructor() {
        this.Logs = []
    }

    log(msg) {
        this.Logs.push(msg)
        console.log(`FANCY: ${msg}`)
    }

    printLogCount() {
        console.log(`${this.Logs.length} Logs`)
    }
}