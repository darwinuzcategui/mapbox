import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements onInit {
  title = 'mapboxapp';
  mapa: Mapboxgl.Map;

  ngOnInit(){

    (Mapboxgl as any).accessToken = environment.mapboxKey;
    // var map = new mapboxgl.Map({
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-66.9156448,10.4999658], // starting position longitud , latitud
    zoom: 16.7 // starting zoom
    
});
 this.crearMarcador(-66.9156448,10.4999658);

 

  }

  crearMarcador(lng: number,lat: number){
    
    const marker = new Mapboxgl.Marker({
      draggable: true,
      name: 'aaaaa'
      
      
      })
      
      .setLngLat([lng, lat])
      .addTo(this.mapa);
      
      marker.on('drag',() => {
        console.log( marker.getLngLat());

      });
      console.log(marker);

  }
}
