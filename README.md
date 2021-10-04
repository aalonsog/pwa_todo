<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">

<br/><br/><br/>
# Ejemplo Progressive Web Application (PWA)

Versión: 4 de octubre de 2021

## Objetivos

 - Transformar una aplicación web en una PWA.
 - Entender la potencia de las PWA y todas las posibilidades que ofrecen.

## Descripción del ejemplo

Este ejemplo se basa en transformar una aplicación web en una PWA.
Para ello partiremos de la rama de este repositorio llamada "sinPWA" e iremos aplicando paso a paso los cambios necesarios hasta tranformar dicha aplicación web en una PWA (rama master).


## Descargar el código del proyecto

El proyecto debe clonarse en el ordenador desde el que se está trabajando:

```
$ git clone https://github.com/aalonsog/pwa_todo
```
A continuación se debe acceder al directorio de trabajo.

```
$ cd pwa_todo
```

## Configurar y arrancar la aplicación web
El fichero server.js contiene un servidor muy simple que tan solo sirve archivos estáticos que se encuentren en la carpeta "public".

Es necesario instalar las dependencias npm.

Para ejecutar dicho servidor y poder ver nuestra aplicación web funcionando ejecutamos:
```
$ npm install
$ npm start
```

Ya podemos conectarnos a http://localhost:8000.