//Menghitung BMI
let berat = prompt("Masukan Berat : ");


let tinggi = prompt("Masukan Tinggi : ");

function BMI() {
    let bmi = berat / (tinggi*tinggi);
    console.log("BMI = "+bmi);

    if (bmi < 18) {
        console.log("Underwight");
    }
    else if (bmi >=18 && bmi <25) {
        console.log("Normal Range");
    }
    else if (bmi >=25 && bmi <30) {
        console.log("Overweight");
    }
    else if (bmi >=30) {
        console.log("Obese");
    }
};

console.log("Berat anda adalah" + berat);
console.log("Tinggi anda adalah "+ tinggi);
BMI();