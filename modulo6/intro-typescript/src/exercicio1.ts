function checaTriangulo(a:number, b:number, c:number): String{
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

 
//start: "tsc ./src/index.ts && node ./build/index.js