/*import { map, catchError, throwError } from 'rxjs/operators';
import { observable } from 'rxjs';
 
observable.pipe(
    map(value=> value * 2),
    catchError(error => {
      //... aqui pode tratar ou relançar com throwError
      throwError(error)
    })
  ).subscribe(value=> ...)*/