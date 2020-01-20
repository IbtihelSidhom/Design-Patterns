import FancyLogger from './fancyLogger.js'
const logger = new FancyLogger()

export default function logFirstImplementation() {
    logger.printLogCount()
    logger.log('1st file')
    logger.printLogCount()
}