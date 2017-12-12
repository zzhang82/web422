import { Component, OnInit } from '@angular/core';

export class Driver{
    name: string; 
    description: string; 
    ownedTransportation: string[]; 
    favouriteTransportation: string; 
    driverLicence: boolean; 
    vehicleUse: string; 
}

export class option{
  value: string;
  text: string;
}

@Component({
  selector: 'app-eagle',
  templateUrl: './eagle.component.html',
  styleUrls: ['./eagle.component.css']
})
export class EagleComponent implements OnInit {

  constructor() { }
 
  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: option[] = [
    {value: "C", text: "Car"},
    {value: "B", text: "Bus"},
    {value: "M", text: "Motorcycle"},
    {value: "H", text: "Helicopter"}
  ];

  ngOnInit() {

    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: "Richard Hammond",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C","M" ], 
      favouriteTransportation: "M",
      driverLicence: true, 
      vehicleUse: "pleasure"
    }
  }
}
