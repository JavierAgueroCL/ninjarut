# ninjarut
Validador de RUT chileno en VanillaJS.
Además de hacer la comprobación matemática del RUT se preocupa de validar el largo y la "calidad" de este previniendo problemas con RUTs tipo "11.111.111-1"

## Uso

```
var rut_ejemplo = '5932544-2'
var Rut = new NinjaRut( rut_ejemplo );
```
