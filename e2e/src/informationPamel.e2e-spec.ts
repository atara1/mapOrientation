import { TestBed, getTestBed } from '@angular/core/testing';
import { MapService } from './../../src/app/service/map.service';
import { AppPage } from './app.po';
import { LocationData } from 'src/assets/locationData';
import { Injector } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('information panel test', () => {
    let page: AppPage;
    let mapService: MapService;
    let injector: Injector;
    let httpMock: HttpTestingController; // HttpClientTestingModule;

    beforeEach(() => {
        page = new AppPage();

        // TestBed.configureTestingModule({
        //     imports: [HttpClientTestingModule],
        //     providers: [MapService]
        // });

        // injector = getTestBed();
        // httpMock = injector.get(HttpTestingController);
        // mapService = injector.get(MapService);

    });

    // afterEach(() => {
    //     httpMock.verify();
    // });



    it('should be a Add annotation button', () => {
        const addBtn = page.getAddAnnotationButton();
        expect(addBtn.all.length == 1).toBeTruthy();
    });

    it('should be a search button', () => {
        const searchBtn = page.getSearchBtn();
        expect(searchBtn.all.length == 1).toBeTruthy();
    });

    it('should be one list', () => {
        const list = page.getList();
        console.log(list.all.length);
        expect(list.all.length == 1).toBeTruthy();
    });

    it('should be one input', () => {
        const input = page.getInput();
        console.log(input.all.length);
        expect(input.all.length == 1).toBeTruthy();
    });


    // it('should present location on map', () => {
    //     const inputSearch = page.setInputText('tel aviv');
    //     mapService.search(inputSearch.toString())
    //         .then(data => {
    //             let lngLatData: LocationData = data;
    //             if (lngLatData) {
    //                 mapService.buildMap(lngLatData.center[0], lngLatData.center[1])
    //             }
    //         });
    // });


});