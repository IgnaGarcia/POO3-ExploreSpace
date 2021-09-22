// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  production: false,
  spaceX_url: "https://api.spacexdata.com/v4",
  apod_url: "https://api.nasa.gov/planetary/apod?api_key=n9uJb7isj4D4O6DhxlW0ehCQYvJuLyNS8x9GleAH",
  launches: "/launches",
  latestLaunches: "/launches/latest",
  upcomingLaunches: "/launches/upcoming",
  rockets: "/rockets",
  crew: "/crew",
  dragons: "/dragons",
  company: "/company",
  launchpads: "/launchpads",
  landpads: "/landpads",
  starlink: "/starlink/query"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
