const map = L.map('map').setView([40.7128, -74.0060], 12); // Brooklyn coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load your JSON data here
const locationsData = './data/BK_Library.json'; // Replace with your JSON data

locationsData.locations.forEach(location => {
    const position = location.data.position.split(', ');
    const name = location.data.title;
    const address = location.data.address;
    const description = location.data.tags;
    const hours = location.data.hours;
    const contact = location.data.phone;

    L.marker([parseFloat(position[0]), parseFloat(position[1])]).addTo(map)
        .bindPopup(`<b>${name}</b><br>${address}<br>${description}<br>${hours}<br>${contact}`);
});
