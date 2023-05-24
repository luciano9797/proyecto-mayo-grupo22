const apiUrl = "https://api.bluelytics.com.ar/v2/latest"

async function obtenerDolar(){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()

        console.log("blue venta:", data.blue.value_avg);
        document.getElementById("venta").innerHTML = data.blue.value_sell
        document.getElementById("compra").innerHTML = data.blue.value_buy
    }
    catch(error) {console.log("Ocurrio un error", error)}
   
}

obtenerDolar()