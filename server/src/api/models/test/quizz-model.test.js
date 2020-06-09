var mongoose = require("mongoose");
var mongoDB = "mongodb://localhost:27017/mydb_test";
mongoose.connect(mongoDB);
const Quizz = require("../../models/quizz.js");

describe("Quizz model test", () => {
    beforeAll(async () => {
        await Quizz.remove({});
    });

    afterEach(async () => {
        await Quizz.remove({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("has a module", () => {
        expect(Quizz).toBeDefined();
    });

    describe("get Quizz", () => {
        it("gets a Quizz"), async() => {
            const aQuizz1 = new ({ name: "Quizz 1"});
            const aQuizz2 = new ({ name: "Quizz 2"});
            const aQuizz3 = new ({ name: "Quizz 3"});
            await aQuizz1.save();
            await aQuizz2.save();
            await aQuizz3.save();

            const foundQuizz1 = await Quizz.findOne({name: "Quizz 1"});
            const foundQuizz2 = await Quizz.findOne({name: "Quizz 2"});
            const foundQuizz3 = await Quizz.findOne({name: "Quizz 3"});

            const expected1 = "Quizz 1";
            const expected2 = "Quizz 2";
            const expected3 = "Quizz 3";
            
            const actual1 = foundQuizz1.name;
            const actual2 = foundQuizz2.name;
            const actual3 = foundQuizz3.name;

            expect(actual1).toEqual(expected1);
            expect(actual2).toEqual(expected2);
            expect(actual3).toEqual(expected3);
        }
    });
})