// import { MapComponent } from './../../src/app/map/map.component';

// import { ComponentFixture, inject, TestBed, getTestBed, async } from '@angular/core/testing';
// import { MapService } from './../../src/app/service/map.service';
// import { AppPage } from './app.po';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import {
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting
// } from '@angular/platform-browser-dynamic/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { Type } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Server } from 'http';


// i

// describe('map test', () => {
   
//     beforeEach(async () => {
//         TestBed.configureTestingModule({
//             imports: [HttpModule],
//             providers: [ 
//                 MapService,
//                 { provide: XHRBackend, useClass: MockBackend },       
//               ]
//         });
       
//     });

//     describe('getLocation()', () => {

//         fit('should return an Observable<Array<Video>>',
//             inject([MapService, XHRBackend], (mapService, mockBackend) => {
    
//             const mockResponse = {
//               data: [ {
//                   id: 5
//               }
           
//               ]
//             };
    
//             mockBackend.connections.subscribe((connection) => {
//               connection.mockRespond(new Response(new ResponseOptions({
//                 body: JSON.stringify(mockResponse)
//               })));
//             });
     
//             mapService.search('tel aviv').subscribe((location) => {
//                 debugger
//                 expect(location).toBeDefined();
//             });
    
//         }));
//       });

// });