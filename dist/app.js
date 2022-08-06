"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app
    .route("/user")
    .get((req, res) => {
    return res.json({
        name: "Alex",
    });
})
    .post((req, res) => {
    return res.json(Object.assign(Object.assign({}, req === null || req === void 0 ? void 0 : req.body), { workout: {
            pushUps: 30,
        } }));
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`running on port - ${port}`);
});
