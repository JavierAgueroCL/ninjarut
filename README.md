# ninjarut
Validador de RUT chileno en VanillaJS.
Además de hacer la comprobación matemática del RUT se preocupa de validar el largo y la "calidad" de este previniendo problemas con RUTs tipo "11.111.111-1"

## Uso

```
var rut_ejemplo = '5932544-2'; // acepta múltiples formatos: '59325442', '5932544-2', '5.932.544-2'
var Rut = new NinjaRut( rut_ejemplo );

// revisa si el RUT es valido
console.log( Rut.isValid ); // true

// formatea el RUT sin puntos, con guión
console.log( Rut.format() ); // '5932544-2'

// formatea el RUT con puntos, con guión
console.log( Rut.format(true) ); // '5.932.544-2'
```
