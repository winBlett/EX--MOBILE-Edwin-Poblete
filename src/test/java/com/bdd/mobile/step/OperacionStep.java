package com.bdd.mobile.step;

import com.bdd.mobile.view.OperacionView;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.webdriver.ThucydidesWebDriverSupport;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class OperacionStep {

    private WebDriver driver = ThucydidesWebDriverSupport.getDriver();

    private OperacionView OperacionView() {
        return new OperacionView(driver);
    }


    @Step("Hacer click en el boton Continuar")
    public void clickBotonContinuar() {
        OperacionView().clickBotonContiuar();
    }


    @Step("Validar acceso al login")
    public void cargoLogin() {
        Assert.assertTrue(OperacionView().verificarTituloLogin());
    }



    @Step("Accedo al aplicativo")
    public void accedoAlAplicativo() {
        Assert.assertTrue(OperacionView().cargoPagina());
    }


    @Step("Login_clicBotonStandar")
    public void clicbotonStandar_user() {
        OperacionView().clickbotonStandar_use();
    }


    @Step("SeleccionoBotonAgregar")
    public void seleccionoBotonAgregar() {
        OperacionView().clickBotonContiuar();
    }


    @Step("SeleccionoItem")
    public void seleccionoItem() {
        OperacionView().SeleccionarItem();
    }


    @Step("VerificarPantallaProductos")
    public void verificarPantallaProductos() {
        Assert.assertTrue(OperacionView().verificarPantallaProductos());

    }


    @Step("SeleccionarCarritoCompras")
    public void seleccionoCarritoDeCompras() {
        OperacionView().SeleccionarCarritoDeCompras();
    }


    @Step("SeleccionarBotonCheckout")
    public void seleccionoBotonCHECKOUT() {
        OperacionView().SeleccionarBotonChekout();

    }

    @Step("Click boton Continuar")
    public void ClicEnBotonContinuar() {
        OperacionView().SeleccionarBotonContinuar();
    }

    @Step("VerificarCheckoutCompletado")
    public void verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO() {
        Assert.assertTrue(OperacionView().verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO());
    }

    @Step("SeleccionarBotonLogin")
    public void seleccionoBotonLogin() {
        OperacionView().SeleccionarBotonLogin();
    }

    @Step("IngresarNombre")
    public void ingresarNombre(String texto) {
        OperacionView().ingresarNombre(texto);

    }



    @Step("IngresarApellido")
    public void ingresarApellido(String texto) {
        OperacionView().ingresarApellido(texto);
    }


    @Step("IngresarCodigoPostal")
    public void ingresarCodigoPostal(String texto) {
        OperacionView().ingresarCodigoPostal(texto);
    }
}