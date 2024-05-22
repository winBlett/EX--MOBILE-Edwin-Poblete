package com.bdd.mobile.stepdefinition;

import com.bdd.mobile.step.OperacionStep;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;
import cucumber.api.java.es.Y;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;

public class OperacionStepDefinition {

    private Scenario scenario;
    @Steps

    OperacionStep OperacionStep;


    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
        Serenity.setSessionVariable("Scenario").to(this.scenario);
    }




    @Entonces("^verifico que accedo al login$")
    public void verifico_que_accedo_al_login() {
        OperacionStep.cargoLogin();
    }

    @Entonces(("^accedo al aplicativo"))
    public void accedo_al_aplicativo(){
        OperacionStep.accedoAlAplicativo();
    }



    @Y("^selecciono standar_user$")
    public void seleccionoStandar_user() {
        OperacionStep.clicbotonStandar_user();


    }

    @Cuando("^selecciono boton Login$")
    public void seleccionoBotonLogin() {
        OperacionStep.seleccionoBotonLogin();

    }

    @Entonces("^verifico que me muestra la pantalla Productos$")
    public void verificoQueMeMuestraLaPantallaProductos() {
        OperacionStep.verificarPantallaProductos();
    }
    

    @Cuando("^selecciono  Item$")
    public void seleccionoItem() {
        OperacionStep.seleccionoItem();
        
        
    }

    @Y("^selecciono boton agregar$")
    public void seleccionoBotonAgregar() {
        OperacionStep.seleccionoBotonAgregar();
        
    }

    @Y("^selecciono carrito de compras$")
    public void seleccionoCarritoDeCompras() {
        OperacionStep.seleccionoCarritoDeCompras();
        
    }

    @Y("^Selecciono boton CHECKOUT$")
    public void seleccionoBotonCHECKOUT() {
        OperacionStep.seleccionoBotonCHECKOUT();
        
    }

    @Y("^Ingreso Nombre \"([^\"]*)\"$")
    public void ingresoNombre(String texto) {
        OperacionStep.ingresarNombre(texto);

    }

    @Y("^Ingreso Apellido \"([^\"]*)\"$")
    public void ingresoApellido(String texto    ) {
        OperacionStep.ingresarApellido(texto);
    }

    @Y("^hago clic en boton Continuar$")
    public void doyClicEnBotonContinuar() {
        OperacionStep.ClicEnBotonContinuar();
        
    }

    @Y("^hago clic en boton Terminar$")
    public void docClicEnBotonTerminar() {
        OperacionStep.ClicEnBotonContinuar();
        
    }

    @Entonces("^verifico que se muestra la pantalla CHECKOUT:COMPLETADO$")
    public void verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO() {
        OperacionStep.verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO();
    }

    @Dado("^que inicio la aplicacion$")
    public void queInicioLaAplicacion() {
    }

    @Y("^Ingreso Codigo Postal \"([^\"]*)\"$")
    public void ingresoCodigoPostal(String texto) throws Throwable {
        OperacionStep.ingresarCodigoPostal(texto);
    }
}
