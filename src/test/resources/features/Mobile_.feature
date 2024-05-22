#language: es

@mobile


Característica: Login


  @LoginCP1
  Escenario: Ingreso exitoso al aplicativo
    Dado que inicio la aplicacion
    Y verifico que accedo al login
    Y selecciono standar_user
    Cuando selecciono boton Login
    Entonces verifico que me muestra la pantalla Productos


  @SeleccionID
  Esquema del escenario: Seleccion de un producto
    Dado que inicio la aplicacion
    Y verifico que accedo al login
    Y selecciono standar_user
    Cuando selecciono  Item
    Y selecciono boton agregar
    Y selecciono carrito de compras
    Y Selecciono boton CHECKOUT
    Y Ingreso Nombre "<Nombre>"
    Y Ingreso Apellido "<Apellido>"
    Y Ingreso Codigo Postal "<Codigo Postal>"
    Y hago clic en boton Continuar
    Y hago clic en boton Terminar
    Entonces verifico que se muestra la pantalla CHECKOUT:COMPLETADO
    Ejemplos:
      | Nombre | Apellido | Codigo Postal |
      | Edwin  | Poblete  | 111111        |


