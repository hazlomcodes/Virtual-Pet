const Pet = require("../src/pet")

describe ('constructor', () => {
    it ('returns an object', () => {
        expect (new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('returns an object with a name property' () => {
        expect (new Pet("Gizmo").name).toBe("Gizmo");
    });
});