/**
 * Created by Administrator on 2016/4/25.
 */


const expect = require("expect.js");
const ObjectUtils = require("../../src/index").objectUtils;
const pruneObject = ObjectUtils.pruneObject;


describe("TEST ObjectUtils", function() {
    it("[Test PruneObject 1]", function(done) {
        var o = {
            name: 'xc',
            age: 33,
            id: 1,
            gender: "male"
        };
        pruneObject(o, ["name", "id"]);
        expect(o).to.have.property("name");
        expect(o.name).to.eql("xc");
        expect(o).to.have.property("id");
        expect(o.id).to.eql(1);
        expect(o).to.only.have.keys(["name", "id"]);
        done();
    });

    it("[Test PruneObject 2]", function(done) {
        var o = {
            name: 'xc',
            age: 33,
            id: 1,
            gender: "male"
        };
        pruneObject(o, {
            preserve: true,
            keys: ["name"
                , "id"]
        });
        expect(o).to.have.property("name");
        expect(o.name).to.eql("xc");
        expect(o).to.have.property("id");
        expect(o.id).to.eql(1);
        expect(o).to.only.have.keys(["name", "id"]);
        expect(o).not.to.have.property("gender");
        done();
    });

    it("[Test PruneObject 3]", function(done) {
        var o = {
            name: 'xc',
            age: 33,
            id: 1,
            gender: "male"
        };
        pruneObject(o, {
            preserve: false,
            keys: ["name"
                , "id"]
        });
        expect(o).to.have.property("age");
        expect(o.age).to.eql(33);
        expect(o).to.have.property("gender");
        expect(o.gender).to.eql("male");
        expect(o).to.only.have.keys(["age", "gender"]);
        expect(o).not.to.have.property("sex");
        done();
    });
});


// 213151165611