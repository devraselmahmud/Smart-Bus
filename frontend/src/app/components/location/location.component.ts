import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import * as L from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  private firebaseConfig = {
    apiKey: "AIzaSyBvq_7iYKJjjU2DC4zsldKaHgpn82AK_H8",
    authDomain: "arduino-gps-tracker-3b47b.firebaseapp.com",
    databaseURL: "https://arduino-gps-tracker-3b47b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "arduino-gps-tracker-3b47b",
    storageBucket: "arduino-gps-tracker-3b47b.firebasestorage.app",
    messagingSenderId: "1037089914294",
    appId: "1:1037089914294:web:bb648a1a3a0c50df739517",
    measurementId: "G-W9J227E2G1"
  };
  private app: any;
  private db: any;
  private map!: L.Map;
  private currentMarker: L.Marker | null = null;

  ngOnInit(): void {
    this.app = initializeApp(this.firebaseConfig);
    this.db = getDatabase(this.app);

    this.map = L.map('map').setView([23.808098, 90.360420], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    const markersRef = ref(this.db, '/');
    onValue(markersRef, (snapshot: any) => {
      const data = snapshot.val();
      if (!data) return;

      const keys = Object.keys(data);
      const latestData = data[keys[keys.length - 1]];
      const lat = parseFloat(latestData.Lat);
      const lng = parseFloat(latestData.Lng);

      if (this.currentMarker) {
        this.map!.removeLayer(this.currentMarker!); // Non-null assertion
      }

      this.currentMarker = L.marker([lat, lng])
        .addTo(this.map!)
        .bindPopup(`Lat: ${lat}, Lng: ${lng}`)
        .openPopup();

      this.map!.setView([lat, lng], 15); // Non-null assertion
    });
  }
}
