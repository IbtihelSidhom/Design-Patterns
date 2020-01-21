class FancyLogger {
    constructor() {
        if (FancyLogger.instance == null) {
            this.Logs = []
            FancyLogger.instance = this
        }
        return FancyLogger.instance
    }

    log(msg) {
        this.Logs.push(msg)
        console.log(`FANCY: ${msg}`)
    }

    printLogCount() {
        console.log(`${this.Logs.length} Logs`)
    }
}

const logger = new FancyLogger()
/*
    We use Object.freeze to prevent the object from being changed.
    The logger class cannot have any new methods or variables added to it 
    or removed from it.
*/
Object.freeze(logger)

/*
    We export an instance of our logger instead of a class
*/
export default logger