// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const MAPBOX_TOKEN: string = 'pk.eyJ1IjoiYXRhcmExIiwiYSI6ImNraWVkeWRidzFzY3cycnJzOXk4OGRyZ2QifQ.Dn6wtd-UP386Qo8aC6-YDQ';
const STYLE_MAPBOX: string ='mapbox://styles/mapbox/streets-v11';
export const environment = {
  production: false,
  mapbox: {
    accessToken: MAPBOX_TOKEN,
    style: STYLE_MAPBOX
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
