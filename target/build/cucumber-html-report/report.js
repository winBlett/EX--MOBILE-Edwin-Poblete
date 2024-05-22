$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/petStore.feature");
formatter.feature({
  "name": "Se requiere realizar lo siguiente :",
  "description": "  1. Listar Pets\n  2. Crear Pet\n  3. Actualizar Pet\n  4. Eliminar Pet\n  5. Realizar Flujo de Autorización (API Key) y luego invocar a cualquier operación.",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@Pagina_Principal_Pets"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Flujo Autorizacion",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Autorizacion_APIKEY"
    }
  ]
});
formatter.step({
  "name": "validar que se ingreso a la pagina",
  "keyword": "Dado "
});
formatter.step({
  "name": "doy clic al boton Authorize",
  "keyword": "Cuando "
});
formatter.step({
  "name": "doy clic en boton Authorize",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en boton Alow",
  "keyword": "Y "
});
formatter.step({
  "name": "cargo la pagina del PetStore",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic al boton Authorize",
  "keyword": "Cuando "
});
formatter.step({
  "name": "ingreso credencial\"\u003cvCredencial\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en boton Authorize de la credencial",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en cerrar popup de Available authorizations",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "vCredencial"
      ]
    },
    {
      "cells": [
        "test"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "Que abrimos la pagina Principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "petStore_StepDefinition.que_abrimos_la_pagina_Principal()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.bdd.step.petStore_Step.abrimosPaginaPrincipal(petStore_Step.java:13)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$eWMWEl9y.abrimosPaginaPrincipal$accessor$dO6MLiG3(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$eWMWEl9y.abrimosPaginaPrincipal(Unknown Source)\r\n\tat com.bdd.stepDefinition.petStore_StepDefinition.que_abrimos_la_pagina_Principal(petStore_StepDefinition.java:17)\r\n\tat ✽.Que abrimos la pagina Principal(src/test/resources/features/petStore.feature:12)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 108\nCurrent browser version is 114.0.5735.110 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KVNLRS8F\u0027, ip: \u0027192.168.40.158\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\t(No symbol) [0x009DF243]\n\t(No symbol) [0x00967FD1]\n\t(No symbol) [0x0085D04D]\n\t(No symbol) [0x0087F6B4]\n\t(No symbol) [0x0087A97C]\n\t(No symbol) [0x008782E9]\n\t(No symbol) [0x008AF056]\n\t(No symbol) [0x008AEB2A]\n\t(No symbol) [0x008A8386]\n\t(No symbol) [0x0088163C]\n\t(No symbol) [0x0088269D]\n\tGetHandleVerifier [0x00C79A22+2655074]\n\tGetHandleVerifier [0x00C6CA24+2601828]\n\tGetHandleVerifier [0x00A88C0A+619850]\n\tGetHandleVerifier [0x00A87830+614768]\n\t(No symbol) [0x009705FC]\n\t(No symbol) [0x00975968]\n\t(No symbol) [0x00975A55]\n\t(No symbol) [0x0098051B]\n\tBaseThreadInitThunk [0x75556BA9+25]\n\tRtlGetFullPathName_UEx [0x77078F9F+1215]\n\tRtlGetFullPathName_UEx [0x77078F6D+1165]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.bdd.step.petStore_Step.abrimosPaginaPrincipal(petStore_Step.java:13)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$eWMWEl9y.abrimosPaginaPrincipal$accessor$dO6MLiG3(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$eWMWEl9y.abrimosPaginaPrincipal(Unknown Source)\r\n\tat com.bdd.stepDefinition.petStore_StepDefinition.que_abrimos_la_pagina_Principal(petStore_StepDefinition.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 108\nCurrent browser version is 114.0.5735.110 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KVNLRS8F\u0027, ip: \u0027192.168.40.158\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\t(No symbol) [0x009DF243]\n\t(No symbol) [0x00967FD1]\n\t(No symbol) [0x0085D04D]\n\t(No symbol) [0x0087F6B4]\n\t(No symbol) [0x0087A97C]\n\t(No symbol) [0x008782E9]\n\t(No symbol) [0x008AF056]\n\t(No symbol) [0x008AEB2A]\n\t(No symbol) [0x008A8386]\n\t(No symbol) [0x0088163C]\n\t(No symbol) [0x0088269D]\n\tGetHandleVerifier [0x00C79A22+2655074]\n\tGetHandleVerifier [0x00C6CA24+2601828]\n\tGetHandleVerifier [0x00A88C0A+619850]\n\tGetHandleVerifier [0x00A87830+614768]\n\t(No symbol) [0x009705FC]\n\t(No symbol) [0x00975968]\n\t(No symbol) [0x00975A55]\n\t(No symbol) [0x0098051B]\n\tBaseThreadInitThunk [0x75556BA9+25]\n\tRtlGetFullPathName_UEx [0x77078F9F+1215]\n\tRtlGetFullPathName_UEx [0x77078F6D+1165]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Flujo Autorizacion",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Pagina_Principal_Pets"
    },
    {
      "name": "@Autorizacion_APIKEY"
    }
  ]
});
formatter.step({
  "name": "validar que se ingreso a la pagina",
  "keyword": "Dado "
});
formatter.match({
  "location": "petStore_StepDefinition.validar_que_se_ingreso_a_la_pagina()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic al boton Authorize",
  "keyword": "Cuando "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicAlBotonAuthorize()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en boton Authorize",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnBotonAuthorize()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en boton Alow",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnBotonAlow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "cargo la pagina del PetStore",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.cargoLaPaginaDelPetStore()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic al boton Authorize",
  "keyword": "Cuando "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicAlBotonAuthorize()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingreso credencial\"test\"",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.ingresoCredencial(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en boton Authorize de la credencial",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnBotonAuthorizeDeLaCredencial()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en cerrar popup de Available authorizations",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnCerrarPopupDeAvailableAuthorizations()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Listar,Crear,Actualizar,Eliminar PETS",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@petStore"
    }
  ]
});
formatter.step({
  "name": "validar que se ingreso a la pagina",
  "keyword": "Dado "
});
formatter.step({
  "name": "doy clic en el icono de desplegar lista",
  "keyword": "Cuando "
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el icono de agregar Pet",
  "keyword": "Cuando "
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el icono de actualizar Pet",
  "keyword": "Cuando "
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.step({
  "name": "ingreso petId\"\u003cvpetId\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "ingreso name\"\u003cvName\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "ingresamos status\"\u003cvStatus\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el icono de eliminar Pet",
  "keyword": "Cuando "
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.step({
  "name": "ingreso api_key\"\u003cvapi_key\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "ingreso pet_id\"\u003cvpet_id\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "vpetId",
        "vName",
        "vStatus",
        "vapi_key",
        "vpet_id"
      ]
    },
    {
      "cells": [
        "6000600",
        "Edwin Poblete",
        "400",
        "test",
        "abc123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "Que abrimos la pagina Principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "petStore_StepDefinition.que_abrimos_la_pagina_Principal()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.bdd.step.petStore_Step.abrimosPaginaPrincipal(petStore_Step.java:13)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$z41nTpZO.abrimosPaginaPrincipal$accessor$Gliiubl6(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$z41nTpZO.abrimosPaginaPrincipal(Unknown Source)\r\n\tat com.bdd.stepDefinition.petStore_StepDefinition.que_abrimos_la_pagina_Principal(petStore_StepDefinition.java:17)\r\n\tat ✽.Que abrimos la pagina Principal(src/test/resources/features/petStore.feature:12)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 108\nCurrent browser version is 114.0.5735.110 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KVNLRS8F\u0027, ip: \u0027192.168.40.158\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\t(No symbol) [0x009DF243]\n\t(No symbol) [0x00967FD1]\n\t(No symbol) [0x0085D04D]\n\t(No symbol) [0x0087F6B4]\n\t(No symbol) [0x0087A97C]\n\t(No symbol) [0x008782E9]\n\t(No symbol) [0x008AF056]\n\t(No symbol) [0x008AEB2A]\n\t(No symbol) [0x008A8386]\n\t(No symbol) [0x0088163C]\n\t(No symbol) [0x0088269D]\n\tGetHandleVerifier [0x00C79A22+2655074]\n\tGetHandleVerifier [0x00C6CA24+2601828]\n\tGetHandleVerifier [0x00A88C0A+619850]\n\tGetHandleVerifier [0x00A87830+614768]\n\t(No symbol) [0x009705FC]\n\t(No symbol) [0x00975968]\n\t(No symbol) [0x00975A55]\n\t(No symbol) [0x0098051B]\n\tBaseThreadInitThunk [0x75556BA9+25]\n\tRtlGetFullPathName_UEx [0x77078F9F+1215]\n\tRtlGetFullPathName_UEx [0x77078F6D+1165]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.bdd.step.petStore_Step.abrimosPaginaPrincipal(petStore_Step.java:13)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$z41nTpZO.abrimosPaginaPrincipal$accessor$Gliiubl6(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\r\n\tat com.bdd.step.petStore_Step$ByteBuddy$z41nTpZO.abrimosPaginaPrincipal(Unknown Source)\r\n\tat com.bdd.stepDefinition.petStore_StepDefinition.que_abrimos_la_pagina_Principal(petStore_StepDefinition.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 108\nCurrent browser version is 114.0.5735.110 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KVNLRS8F\u0027, ip: \u0027192.168.40.158\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\t(No symbol) [0x009DF243]\n\t(No symbol) [0x00967FD1]\n\t(No symbol) [0x0085D04D]\n\t(No symbol) [0x0087F6B4]\n\t(No symbol) [0x0087A97C]\n\t(No symbol) [0x008782E9]\n\t(No symbol) [0x008AF056]\n\t(No symbol) [0x008AEB2A]\n\t(No symbol) [0x008A8386]\n\t(No symbol) [0x0088163C]\n\t(No symbol) [0x0088269D]\n\tGetHandleVerifier [0x00C79A22+2655074]\n\tGetHandleVerifier [0x00C6CA24+2601828]\n\tGetHandleVerifier [0x00A88C0A+619850]\n\tGetHandleVerifier [0x00A87830+614768]\n\t(No symbol) [0x009705FC]\n\t(No symbol) [0x00975968]\n\t(No symbol) [0x00975A55]\n\t(No symbol) [0x0098051B]\n\tBaseThreadInitThunk [0x75556BA9+25]\n\tRtlGetFullPathName_UEx [0x77078F9F+1215]\n\tRtlGetFullPathName_UEx [0x77078F6D+1165]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Listar,Crear,Actualizar,Eliminar PETS",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Pagina_Principal_Pets"
    },
    {
      "name": "@petStore"
    }
  ]
});
formatter.step({
  "name": "validar que se ingreso a la pagina",
  "keyword": "Dado "
});
formatter.match({
  "location": "petStore_StepDefinition.validar_que_se_ingreso_a_la_pagina()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el icono de desplegar lista",
  "keyword": "Cuando "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElIconoDeDesplegarLista()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonTryItOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonExecute()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el icono de agregar Pet",
  "keyword": "Cuando "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElIconoDeAgregarPet()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonTryItOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonExecute()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el icono de actualizar Pet",
  "keyword": "Cuando "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElIconoDeActualizarPet()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonTryItOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingreso petId\"6000600\"",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.ingresoPetId(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingreso name\"Edwin Poblete\"",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.ingresoName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingresamos status\"400\"",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.ingresamosStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonExecute()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el icono de eliminar Pet",
  "keyword": "Cuando "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElIconoDeEliminarPet()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Try it out",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonTryItOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingreso api_key\"test\"",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.ingresoApi_key(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ingreso pet_id\"abc123\"",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.ingresoPet_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "doy clic en el boton Execute",
  "keyword": "Y "
});
formatter.match({
  "location": "petStore_StepDefinition.doyClicEnElBotonExecute()"
});
formatter.result({
  "status": "skipped"
});
});