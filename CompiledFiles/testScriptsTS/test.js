"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testFile_json_1 = __importDefault(require("../ConfigFiles/testFile.json"));
console.log(Number(testFile_json_1.default.params.number2) + 2);
let check = true;
console.log(check);
let number = 10;
console.log(number);
let array = [1, 2, 3, 4, 5, 6];
console.log(array[1]);
let list = ["A", "B", "C"];
console.log(list[1]);
let tuple = [1, "A"];
console.log(tuple[1]);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c;
console.log(Color.green);
function firstFunction() {
    console.log("First function");
}
firstFunction();
function nonVoidFunction() {
    let a = 5;
    return a;
}
console.log(nonVoidFunction());
//never use
function neverType(message) {
    throw new Error(message);
}
function fail() {
    return infiniteLoop();
}
function infiniteLoop() {
    while (true) {
    }
}
//type conversion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTY3JpcHRzVFMvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlGQUFvRDtBQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUU5QyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUE7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNsQixJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUE7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNuQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyQixJQUFJLElBQUksR0FBZSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwQixJQUFJLEtBQUssR0FBa0IsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyQixJQUFLLEtBQXdCO0FBQTdCLFdBQUssS0FBSztJQUFFLCtCQUFHLENBQUE7SUFBRSxtQ0FBSyxDQUFBO0lBQUUsaUNBQUksQ0FBQTtBQUFBLENBQUMsRUFBeEIsS0FBSyxLQUFMLEtBQUssUUFBbUI7QUFDN0IsSUFBSSxDQUFTLENBQUE7QUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUV4QixTQUFTLGFBQWE7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pDLENBQUM7QUFDRCxhQUFhLEVBQUUsQ0FBQTtBQUVmLFNBQVMsZUFBZTtJQUNwQixJQUFJLENBQUMsR0FBVSxDQUFDLENBQUE7SUFDaEIsT0FBTyxDQUFDLENBQUE7QUFDWixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO0FBRTlCLFdBQVc7QUFFWCxTQUFTLFNBQVMsQ0FBQyxPQUFjO0lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDNUIsQ0FBQztBQUVELFNBQVMsSUFBSTtJQUNULE9BQU8sWUFBWSxFQUFFLENBQUE7QUFDekIsQ0FBQztBQUVELFNBQVMsWUFBWTtJQUNqQixPQUFPLElBQUksRUFBRTtLQUNaO0FBQ0wsQ0FBQztBQUVELGlCQUFpQiJ9