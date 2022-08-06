"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const url = ((_a = process.env) === null || _a === void 0 ? void 0 : _a.MONGO_DB_URI) || ''; // prettier-ignore
        yield mongoose_1.default.connect(url);
        console.log("DB connected!");
    }
    catch (error) {
        console.log("DB connect failure!", error);
    }
});
connectDB();
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
