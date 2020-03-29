"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const typedarray_to_buffer_1 = __importDefault(require("typedarray-to-buffer"));
/**
 * Given an HTML5 File object (from e.g. HTML5 drag and drops), turn it into a pull stream source.
 */
function pullFileReader(file, opts) {
    let offset = (opts === null || opts === void 0 ? void 0 : opts.offset) || 0;
    const chunkSize = (opts === null || opts === void 0 ? void 0 : opts.chunkSize) || 1024 * 1024;
    return function (end, cb) {
        if (end)
            return cb(end);
        // If finished reading then stop
        if (offset >= file.size)
            return cb(true);
        // @ts-ignore
        const fileReader = new FileReader(file);
        fileReader.onloadend = function loaded(event) {
            let data = event.target.result;
            if (data instanceof ArrayBuffer) {
                data = typedarray_to_buffer_1.default(new Uint8Array(event.target.result));
            }
            cb(null, data);
        };
        fileReader.onerror = function (err) {
            cb(err);
        };
        const endIndex = offset + chunkSize;
        const slice = file.slice(offset, endIndex);
        fileReader.readAsArrayBuffer(slice);
        offset = endIndex;
    };
}
module.exports = pullFileReader;
//# sourceMappingURL=index.js.map