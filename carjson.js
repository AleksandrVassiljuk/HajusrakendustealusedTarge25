
const minuJson = [
    {
        Car: {
            Colour: "Roosi roosa",
            "Tinted Windows": false,
            istekohti: 5,
            rattaid: 4,
            Fuel: 60,
            lisandvarustused: {
                konditsioneer: true,
                parkimisandurid: true,
                istmesoojendus: false
            },
            mark: "BMW"
        }
    }
]

document.getElementById("app").innerHTML = `
<div id="json">
    <h1> Auto omadused NYOMMMM </h1>
    <p>Värv: ${minuJson[0].Car.Colour}</p>
    <p>Tumendatud aknad: ${minuJson[0].Car["Tinted Windows"]}</p>
    <p>Istekohti: ${minuJson[0].Car.istekohti}</p>
    <p>Rattaid: ${minuJson[0].Car.rattaid}</p>
    <p>Küts: ${minuJson[0].Car.Fuel} L</p>
    <p>Mark: ${minuJson[0].Car.mark}</p>
    <p>Konditsioneer: ${minuJson[0].Car.lisandvarustused.konditsioneer}</p>
    <p>Parkimisandurid: ${minuJson[0].Car.lisandvarustused.parkimisandurid}</p>
    <p>Istmesoojendus: ${minuJson[0].Car.lisandvarustused.istmesoojendus}</p>
</div>
`


function loadDoc() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        document.getElementById("bacon").innerHTML = this.responseText;
    };

    xhttp.open("GET", "https://baconipsum.com/api/?type=all-meat");
    xhttp.send();
}
