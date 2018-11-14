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

        it("POST car - with out price", async () => {
            let car = {
                brand: "Renault",
                model: "Clio2",
                category: "A",
                numDoors: 3
            }
            let r = await Axios.post("/api/cars/", car)
            assert.equal(r.status, 201);
        });
    })

    describe("Fail", () => {

        describe("POST car", () => {
            it("bad category", async () => {
                let car = {
                    model: "Clio2",
                    category: "W",
                    price: 1000000,
                    numDoors: 3
                }
                try {
                    await Axios.post("/api/cars/", car)
                } catch (error) {
                    assert.equal(error.response.status, 400);
                    assert.equal(error.response.data[0], "category")
                }
            })
            it("without brand", async () => {
                let car = {
                    model: "Clio2",
                    category: "A",
                    price: 1000000,
                    numDoors: 3
                }
                try {
                    await Axios.post("/api/cars/", car)
                } catch (error) {
                    assert.equal(error.response.status, 500);
                }
            })

            it("without model", async () => {
                let car = {
                    brand: "Mercedez-Benz",
                    category: "A",
                    price: 1000000,
                    numDoors: 3
                }
                try {
                    await Axios.post("/api/cars/", car)
                } catch (error) {
                    assert.equal(error.response.status, 500);
                }
            });
            it("without numDoors", async () => {
                let car = {
                    brand: "Mercedez-Benz",
                    category: "A",
                    model: "Cuchuflin",
                    price: 1000000
                }
                try {
                    await Axios.post("/api/cars/", car)
                } catch (error) {
                    assert.equal(error.response.status, 500);
                }
            });
        })
    })
})