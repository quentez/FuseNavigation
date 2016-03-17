/// <reference path="./Fuse/Index.ts" />

/*
 * App entry point.
 */

namespace FuseNavigation {

  export class App {
    constructor() {
      this.name = new Fuse.Observable("EMAIL4");
      this.currentPage = new Fuse.Observable("LoginPage");
    }

    name: Fuse.Observable<string>;
    currentPage: Fuse.Observable<string>;
  }
}
