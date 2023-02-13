import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {

    const position = [23.772723525552248, 90.3724520803533]

    return (
        <div>
            <MapContainer center={position} zoom={10} scrollWheelZoom={true}
                style={{ width: "300px", height: "550px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
        </div>
    );
};

export default Map;