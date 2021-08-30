let map = L.map('map', {
  center: [33, 76.2209443],
  zoom: 6
});

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map)


let from = L.marker([28.6446656, 77.2209443]).addTo(map);
from.bindPopup("Starting Position", {closeOnClick : false, autoClose: false}).openPopup()

let to = L.marker([26.9035745, 70.8597107]).addTo(map);
to.bindPopup("Final Position", {closeOnClick : false, autoClose: false}).openPopup()

let center = L.marker([28.0214035,73.284521]).addTo(map)
center.bindPopup("Center Position (Currently Here)", {closeOnClick : false, autoClose: false}).openPopup()

let polyline = L.polyline([[26.9035745, 70.8597107], [28.0214035,73.284521]], {color: 'red'}).addTo(map);

let poly = L.polyline([[28.6446656, 77.2209443], [28.0214035,73.284521]], {color: 'red'}).addTo(map);

