"use strict";
/**
 * Created by user on 2020/3/29.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSource = void 0;
/**
 * https://github.com/dominictarr/is-pull-stream/blob/c3c2676522e38617ce4f3e12af3e7bd6221beff6/index.js#L10
 * return true if stream is a source.
 */
function isSource(s) {
    return typeof s === 'function' && s.length === 2;
}
exports.isSource = isSource;
//# sourceMappingURL=isSource.js.map