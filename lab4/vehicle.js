"use strict";
// =============================
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicles = exports.FuelType = void 0;
exports.calculateTravelTime = calculateTravelTime;
var FuelType;
(function (FuelType) {
    FuelType["XANG"] = "X\u0103ng";
    FuelType["DIEN"] = "\u0110i\u1EC7n";
})(FuelType || (exports.FuelType = FuelType = {}));
function calculateTravelTime(vehicle, distance) {
    return distance / vehicle.speed; // giờ
}
exports.vehicles = [
    { name: "Honda Wave", type: "Xe máy", speed: 60, fuelType: FuelType.XANG },
    { name: "VinFast VF8", type: "Ô tô", speed: 100, fuelType: FuelType.DIEN },
    { name: "Toyota Vios", type: "Ô tô", speed: 90, fuelType: FuelType.XANG },
];
exports.vehicles.forEach(function (v) {
    var time = calculateTravelTime(v, 100);
    console.log("".concat(v.name, " (").concat(v.type, ", ").concat(v.fuelType, ") \u0111i 100km m\u1EA5t ").concat(time.toFixed(2), " gi\u1EDD"));
});
