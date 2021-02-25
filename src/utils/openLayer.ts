import 'ol/ol.css'
import {
    Map, View
} from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

function generateNewMap (targetDom: string) {
    const map = new Map({
        target: targetDom,
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: new View({
            projection: 'EPSG:4326',
            center: [114.064839, 22.548857],
            zoom: 12
        })
    })
    return map
}

export { generateNewMap }
