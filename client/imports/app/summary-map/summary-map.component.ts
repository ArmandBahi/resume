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
            // style: 'Mapbox/styles/custom_style.json', // fond de plan
            center: [-1.68, 48.12], // lat/long
            zoom: 15, // zoom
            pitch: 50, // Inclinaison
            bearing: -10 // Rotation
        });

        // Ajout des couches
        map.on('load', function () {

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
                'minzoom': 10,
                'paint': {'fill-extrusion-color': '#555555', 'fill-extrusion-height':
                {
                    'type': 'identity','property': 'height'},
                    'fill-extrusion-base': {'type': 'identity','property': 'min_height'},
                    'fill-extrusion-opacity': 1
                }
            });
        });

        /*********************************
        ------- Outils navigation --------
        *********************************/

        // Ajout boutons navigation a la fin du script
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');

        // Ajout Echelle cartographique a la fin du script
        map.addControl(new mapboxgl.ScaleControl({
            maxWidth: 120,
            unit: 'metric'})
        );

    }
}
