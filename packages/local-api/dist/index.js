"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const serve = (port, filename, dir) => {
    const app = (0, express_1.Express)();
    app.listen(port, () => {
        console.log('Listening on port', port);
    });
};
exports.serve = serve;
