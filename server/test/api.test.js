const Axios = require('axios');
var assert = require('assert');
Axios.defaults.baseURL = 'http://localhost:3001';

describe("API cars add y remove", () => {

    describe("Success", () => {

        it("POST car", async () => {
            let car = {
                brand: "Renault",
                model: "Clio2",
                category: "A",
                price: 1000000,
                numDoors: 3
            }
            let r = await Axios.post("/api/cars/", car)
            assert.equal(r.status, 201);
        });

    })

    // describe("Fail", () => {

    //     it("POST car - without brand", async done => {
    //         let car = {
    //             model: "Clio2",
    //             category: "A",
    //             price: 1000000,
    //             numDoors: 3
    //         }
    //         let r = await Axios.post("/api/cars/", car)
    //         assert.equals(r.status, 500);
    //         done();
    //     });
    // })


})