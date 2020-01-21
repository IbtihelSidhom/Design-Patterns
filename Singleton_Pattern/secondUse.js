import logger from './fancyLogger.js'

export default function logSecondImplementation() {
    logger.printLogCount()
    logger.log('2nd file')
    logger.printLogCount()
}