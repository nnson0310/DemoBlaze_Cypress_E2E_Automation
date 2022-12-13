import { faker } from '@faker-js/faker';
import MethodHelper from './MethodHelper';

class DataFaker {
    static getRandomUserName() {
        return faker.internet.userName().concat('', MethodHelper.getRandomNumberFromRange(0, 100));
    }
}

export default DataFaker;