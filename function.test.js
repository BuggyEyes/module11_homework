import {getPercents} from './function.js';
//проверка стандартных значений
describe('test for function.js', () =>
        it('get 30% from 200 to equal 60', () => {
            const result = getPercents(30, 200);
            expect(result).toBe(60);
        }),
    it('get 20% from 200 to equal 50', () => {
        const result = getPercents(20, 200);
        expect(result).toBe(40);
    }),


    // Тест неверного результата
    it('get 0% from 100 to equal 60', () => {
        const result = getPercents(0, 100);
        expect(result).toBe(60);

    }),
    // Corner-case, значение превышающее 100%
    it('get 130% from 100 to equal 130', () => {
        const result = getPercents(130, 100);
        expect(result).toBe(130);

    }),
// Не целое число.
    it('get 32% from 237 greater or equal 75', () => {
        const result = getPercents(32, 237);
        expect(result).toBeGreaterThanOrEqual(75);

    })
);