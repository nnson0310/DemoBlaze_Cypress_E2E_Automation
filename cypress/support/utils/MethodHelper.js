class MethodHelper {
    static getRandomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default MethodHelper;