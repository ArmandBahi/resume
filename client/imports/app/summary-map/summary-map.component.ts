import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'summary-map',
  templateUrl: 'summary-map.html',
  styleUrls: ['summary-map.scss']
})
export class SummaryMapComponent implements OnInit {

    ngOnInit() {
        this.buildMap();
    }

    buildMap() {

        // AccesToken
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXJtYW5kYmFoaSIsImEiOiJjamg3bjBtaWMwZGJwMzNzYWJnZmF0NWdyIn0.OVLG_DZBAqCUQ1-dNK4HSg';

        // Configuration de la carte
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/armandbahi/cjh7nohxf67zx2qm9bu87hyd4', // fond de carte
            center: [-1.68, 48.12], // lat/long
            zoom: 15, // zoom
            pitch: 50, // Inclinaison
            bearing: -10 // Rotation
        });

        // Ajout des couches
        map.on('load', function () {

            /*********************************
            ---------- COUCHES OSM -----------
            *********************************/

            // Source OSN
            map.addSource('mapbox-streets-v7', {
                type: 'vector',
                url: 'mapbox://mapbox.mapbox-streets-v7'
            });

            // Couche routes
            map.addLayer({
                "id": "Routes",
                "type": "line",
                "source": "mapbox-streets-v7",
                "filter": ["all", ["in", "class", "motorway", "trunk", "primary"]],
                "layout": {'visibility': 'visible'},
                "source-layer": "road",
                "paint": {"line-color": "#FF7F50", "line-width": 4}
            });

            // Hydro
            map.addLayer({
                "id": "hydrologie",
                "type": "line",
                "source": "mapbox-streets-v7",
                "source-layer": "waterway",
                "paint": {
                    "line-color": "#4dd2ff",
                    "line-width": 3
                }
            });

            // Batiments
            map.addLayer({
                "id": "batiments",
                "type": "fill",
                "source": "mapbox-streets-v7",
                "source-layer": "building",
                "paint": {
                    "fill-color": "#FFFFFF",
                    "fill-opacity": 0.8
                }
            });


            /*********************************
            ---------- COUCHES Bus -----------
            *********************************/

            // Source bus
            map.addSource('Arrets', {
                type: 'vector',
                url: 'mapbox://armandbahi.2cxlkh44'
            });

            // Couches arrêts de bus
            map.addLayer({
                'id': 'Arrets',
                'type': 'circle',
                'source': 'Arrets',
                'source-layer': 'bus-dtal4j',
                'layout': {'visibility': 'visible'},
                'paint': {'circle-radius': {'base': 1.5,'stops': [[13, 2], [22, 60]]}, 'circle-color': '#000000',},
                'minzoom':10
            });


            /*********************************
            ------- COUCHES Propriétés- ------
            *********************************/

            //Proprietes
            map.addSource('Proprietes', {
                type: 'vector',
                url: 'mapbox://ninanoun.a4kdgiot'
            });
            map.addLayer({
                'id': 'Proprietes',
                'type': 'line',
                'source': 'Proprietes',
                'source-layer': 'limites_proprietes',
                'layout': {'visibility': 'visible',
                'line-join': 'round','line-cap': 'round'},
                'paint': {'line-color': '#000', 'line-width': 1.5}
            });


            /*********************************
            ------- COUCHE Bâtiment 3D -------
            *********************************/

            // Ajout batiments 3D
            map.addLayer({
                'id': 'Batiments_3D',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {'fill-extrusion-color': '#555555', 'fill-extrusion-height':
                {
                    'type': 'identity','property': 'height'},
                    'fill-extrusion-base': {'type': 'identity','property': 'min_height'},
                    'fill-extrusion-opacity': 0.8
                }
            });


            /*********************************
            ------- COUCHES Equipements ------
            *********************************/

            // Source equipements
            map.addSource('Equipements', {
                type: 'vector',
                url: 'mapbox://armandbahi.37xfrl8y'
            });

            // Couche équipements
            map.addLayer({
                'id': 'Equipements',
                'type': 'circle',
                'source': 'Equipements',
                'source-layer': 'base-orga-var-6udr9q',
                'layout': {'visibility': 'visible'},
                'paint': {'circle-radius': {'base': 1.5,'stops': [[13, 2], [22, 60]]}, 'circle-color': '#3399ff'},
                'minzoom':14
            });
        });
    }
}


// console.log("mapboxgl: ", mapboxgl);

// L.mapbox.accessToken = 'pk.eyJ1IjoiYXJtYW5kYmFoaSIsImEiOiJjamg3bjBtaWMwZGJwMzNzYWJnZmF0NWdyIn0.OVLG_DZBAqCUQ1-dNK4HSg';
//   var map = L.mapbox.map('map', 'examples.map-i86nkdio')
//   			.setView([40, -74.50], 9);

// // AccesToken
// mapboxgl.accessToken = 'pk.eyJ1IjoiYXJtYW5kYmFoaSIsImEiOiJjamg3bjBtaWMwZGJwMzNzYWJnZmF0NWdyIn0.OVLG_DZBAqCUQ1-dNK4HSg';
//
// // Configuration de la carte
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/armandbahi/cjh7nohxf67zx2qm9bu87hyd4', // fond de carte
//     center: [-1.68, 48.12], // lat/long
//     zoom: 15, // zoom
//     pitch: 50, // Inclinaison
//     bearing: -10 // Rotation
// });
//
