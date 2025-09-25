
export interface Vehicle {
    name: string;
    type: string;   
    speed: number;  
}

export enum FuelType {
    XANG = "Xăng",
    DIEN = "Điện"
}

export interface MotorizedVehicle extends Vehicle {
    fuelType: FuelType;
}

export function calculateTravelTime(vehicle: Vehicle, distance: number): number {
    return distance / vehicle.speed; // giờ
}

export let vehicles: MotorizedVehicle[] = [
    { name: "Honda Wave", type: "Xe máy", speed: 60, fuelType: FuelType.XANG },
    { name: "VinFast VF8", type: "Ô tô", speed: 100, fuelType: FuelType.DIEN },
    { name: "Toyota Vios", type: "Ô tô", speed: 90, fuelType: FuelType.XANG },
];

vehicles.forEach(v => {
    let time = calculateTravelTime(v, 100);
    console.log(`${v.name} (${v.type}, ${v.fuelType}) đi 100km mất ${time.toFixed(2)} giờ`);
});
