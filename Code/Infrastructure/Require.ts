var require = <(name: string) => any>require;

module FuseNavigation.Infrastructure {
  export function Require<T>(name: string): T {
    return <T>require(name);
  }
}
