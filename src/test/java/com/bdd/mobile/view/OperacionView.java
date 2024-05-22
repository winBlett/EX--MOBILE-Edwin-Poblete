package com.bdd.mobile.view;

import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.pagefactory.AndroidFindBy;
import mobile.com.bdd.lib.MobileDriverDom;
import net.serenitybdd.core.pages.WebElementFacade;
import org.junit.Assert;
import org.opencv.core.Core;
import org.openqa.selenium.By;
import org.openqa.selenium.InvalidElementStateException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public class OperacionView extends MobileDriverDom {
    public OperacionView(WebDriver driver) {
        super(driver);
    }

    //Declaro Views

    @AndroidFindBy(id = "android:id/content")
    private WebElement tituloLogin;


    @AndroidFindBy(id = "android:id/content")
    private WebElement botonContinuar;

    @AndroidFindBy(id = "android:id/content")
    private WebElement clickbotonStandar_use;

    @AndroidFindBy(id = "android:id/content")
    private WebElement SeleccionarItem;

    @AndroidFindBy(id = "android:id/content")
    private WebElement SeleccionarCarritoDeCompras;

    @AndroidFindBy(id = "android:id/content")
    private WebElement SeleccionarBotonChekout;

    @AndroidFindBy(id = "android:id/content")
    private WebElement SeleccionarBotonContinuar;

    @AndroidFindBy(id = "android:id/content")
    private WebElement SeleccionarBotonLogin;

    @AndroidFindBy(id = "android:id/content")
    private WebElement ingresarNombre;

    @AndroidFindBy(id = "android:id/content")
    private WebElement ingresarApellido;

    @AndroidFindBy(id = "android:id/content")
    private WebElement ingresarCodigoPostal;

    @AndroidFindBy(id = "android:id/content")
    private WebElement verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO;

    @AndroidFindBy(id = "android:id/content")
    private WebElement verificarPantallaProductos;







    //Flujo:
    @AndroidFindBy(xpath = "//android.widget.CheckBox")
    private WebElement verificarTituloLogin;



    //Declaro metodos

    public boolean verificarTituloLogin(){
        waitFor(8).seconds();
        return tituloLogin.isDisplayed();
    }

     public void clickBotonContiuar(){
        clickElement(botonContinuar);
        waitFor(3).seconds();
    }


    public void clickbotonStandar_use() {
        clickElement(clickbotonStandar_use);
        waitFor(3).seconds();
    }

    public void SeleccionarItem() {
        clickElement(SeleccionarItem);
        waitFor(3).seconds();

    }

    public void SeleccionarCarritoDeCompras() {
        clickElement(SeleccionarCarritoDeCompras);
        waitFor(3).seconds();
    }

    public void SeleccionarBotonChekout() {
        clickElement(SeleccionarBotonChekout);
        waitFor(3).seconds();
    }

    public void SeleccionarBotonContinuar() {
        clickElement(SeleccionarBotonContinuar);
        waitFor(3).seconds();
    }

    public void SeleccionarBotonLogin() {
        clickElement(SeleccionarBotonLogin);
        waitFor(3).seconds();

    }

    public void ingresarNombre(String texto) {
        clickElement(ingresarNombre);
        waitFor(3).seconds();

    }

    public void ingresarApellido(String texto) {
        clickElement(ingresarApellido);
        ingresarApellido.sendKeys(texto);

    }

    public void ingresarCodigoPostal(String texto) {
        clickElement(ingresarCodigoPostal);
        ingresarCodigoPostal.sendKeys(texto);
    }

    public boolean verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO() {
        waitFor(5).seconds();
        return verificoQueSeMuestraLaPantallaCHECKOUTCOMPLETADO.isDisplayed();
    }

    public boolean verificarPantallaProductos() {
        waitFor(5).seconds();
        return verificarPantallaProductos.isDisplayed();
    }


    public boolean cargoPagina() {
    }
}
