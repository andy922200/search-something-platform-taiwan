import 'ol/ol.css'
import {
    Map, View, Feature
} from 'ol'
import {
    Icon, Style
} from 'ol/style'
import OSM from 'ol/source/OSM'
import Point from 'ol/geom/Point'
import Overlay from 'ol/Overlay'
import VectorSource from 'ol/source/Vector'
import {
    Tile as TileLayer, Vector as VectorLayer
} from 'ol/layer'

import {
    MotelModule
} from '../store/declarations/motel'

function generateNewMap (targetDom: string, motel: MotelModule.OneMotelData) {
    let { longitude, latitude, name, tel, addressFull } = motel

    longitude = longitude || 0
    latitude = latitude || 0

    const icon = new Feature({
        geometry: new Point([longitude, latitude]),
        name
    })

    const popup = new Overlay({
        element: document.querySelector('.motelMap__popup') as HTMLElement,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    })

    const iconLayer = new VectorLayer({
        source: new VectorSource({
            features: [icon]
        }),
        style: new Style({
            image: new Icon({
                anchor: [0.5, 0.5],
                src: require('../assets/location.png')
            })
        })
    })

    const map = new Map({
        target: targetDom,
        overlays: [popup],
        layers: [
            new TileLayer({
                opacity: 0.7,
                source: new OSM()
            }),
            iconLayer
        ],
        view: new View({
            projection: 'EPSG:4326',
            center: [longitude, latitude],
            zoom: 16,
            minZoom: 16,
            maxZoom: 19
        })
    })

    map.on('singleclick', function (event) {
        const targetObject = map.forEachFeatureAtPixel(event.pixel, (e) => e)
        if (targetObject) {
            const coordinate = event.coordinate
            const target = document.querySelector('.motelMap__popupContent') as HTMLElement
            target.innerHTML = `<p>${name}</p><p>${tel}</p><p>${addressFull}</p>`
            popup.setPosition(coordinate)
        } else {
            popup.setPosition(undefined)
        }
    })
    return map
}

export { generateNewMap }
