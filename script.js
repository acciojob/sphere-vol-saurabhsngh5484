function volume_sphere() {
    //Write your code here
  let radius = document.getElementById("radius").value;

    //V = 4⁄3πr³

    let volume = (4/3)*Math.PI*Math.pow(Number(radius), 3);
    document.getElementById("volume").value=volume.toFixed(4);
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;