#language: es

@Pagina_Principal_Pets
Característica:Se requiere realizar lo siguiente :
  1. Listar Pets
  2. Crear Pet
  3. Actualizar Pet
  4. Eliminar Pet
  5. Realizar Flujo de Autorización (API Key) y luego invocar a cualquier operación.

  Antecedentes:
    Dado Que abrimos la pagina Principal

  @Autorizacion_APIKEY
  Esquema del escenario: Flujo Autorizacion
    Dado validar que se ingreso a la pagina
    Cuando doy clic al boton Authorize
#    Y valido  Available authorizations
    Y doy clic en boton Authorize
#    Y doy en cargar loggin
    Y doy clic en boton Alow
    Y cargo la pagina del PetStore
    Cuando doy clic al boton Authorize
    Y ingreso credencial"<vCredencial>"
    Y doy clic en boton Authorize de la credencial
    Y doy clic en cerrar popup de Available authorizations



    Ejemplos:
      | vCredencial |
      | test        |

  @petStore
  Esquema del escenario: Listar,Crear,Actualizar,Eliminar PETS
    Dado validar que se ingreso a la pagina
    Cuando doy clic en el icono de desplegar lista
    Y doy clic en el boton Try it out
    Y doy clic en el boton Execute
    Cuando doy clic en el icono de agregar Pet
    Y doy clic en el boton Try it out
    Y doy clic en el boton Execute
    Cuando doy clic en el icono de actualizar Pet
    Y doy clic en el boton Try it out
    Y ingreso petId"<vpetId>"
    Y ingreso name"<vName>"
    Y ingresamos status"<vStatus>"
    Y doy clic en el boton Execute
    Cuando doy clic en el icono de eliminar Pet
    Y doy clic en el boton Try it out
    Y ingreso api_key"<vapi_key>"
    Y ingreso pet_id"<vpet_id>"
    Y doy clic en el boton Execute



    Ejemplos:
      | vpetId  | vName         | vStatus | vapi_key | vpet_id |
      | 6000600 | Edwin Poblete | 400     | test     | abc123  |

