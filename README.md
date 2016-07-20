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

## Propiedades

| Propiedad                               | Descripción    |
| ----------------------------------------|----------------|
| **NinjaRut.protoRut**                   | El RUT ingresado sin filtros |
| **NinjaRut.cleanRut**                   | El RUT ingresado limpio, sin puntos, guiones o caracteres inválidos |
| **NinjaRut.number**                     | El número del RUT sin digito verificador |
| **NinjaRut.digit**                      | El dígito verificador |
| **NinjaRut.isValid**                    | Boolean que contiene la validez del RUT. `true`: el RUT es válido |


## Métodos

| Método                                  | Descripción    |
| ----------------------------------------|----------------|
| **NinjaRut.format( dots )**             | Formatea el RUT. `dots = true`: Formatea el RUT con puntos y guión. `dots = false`: Formatea el RUT sin puntos y con guión.  |





