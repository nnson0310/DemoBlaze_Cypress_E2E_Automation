import { faker } from '@faker-js/faker';

class DataFaker {
    static getRandomUserName() {
        return faker.internet.userName();
    }
}

export default DataFaker;