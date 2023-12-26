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
const currency = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currency_data = yield fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const response = yield currency_data.json();
        console.table(response.rates);
    }
    catch (error) {
        console.log(error);
    }
});
currency();
