const {DefaultHandler} = require('./default');
const {Brie} = require('./brie');
const {BackstagePasses} = require('./backstage_passes');
const {Conjured} = require('./conjured');
const {Sulfuras} = require('./sulfuras');

class HandlerFactory {
    constructor() {
        this.handlers = [
            new Sulfuras,
            new Brie,
            new BackstagePasses,
            new Conjured,
            new DefaultHandler
        ];
    }

    getHandler(item) {
        for (let i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i].canHandle(item)) {
                return this.handlers[i];
            }
        }
    }
}

module.exports = {
    HandlerFactory
}
