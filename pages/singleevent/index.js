import dynamic from 'next/dynamic';

const Map = dynamic(()=> import("./[eventId].js"),{
    ssr: false
});

export default Map;