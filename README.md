# MasterMind
MasterMind project for GeeksHubs with HTML, CSS, JAVASCRIPT.


## Índice

- [🔵Cómo se hizo🔵](#cómo-se-hizo)
- [🟣Cómo funciona🟣](#cómo-funciona)
- [🟢Fuentes y referencias🟢](#fuentes-y-referencias)
- [🟡Errores conocidos🟡](#errores-conocidos)
- [🟠Licencia y Copyright🟠](#licencia-y-copyright)
- [🔴Agradecimientos🔴](#agradecimientos)


### Cómo funciona

El simulador de la **🎮GAME BOY Color🎮 - by Redkar Rival** se puede ejecutar en navegadores web 🖥️ y teléfonos moviles 📱 con una visibilidad y funcionalidad optima en ambos dispositivos.

1. Las funciones de la **🎮GAME BOY Color🎮** son:

- 🎨Selector de colores: Puedes hacer "click" en cualquiera de los botones del selector de colores para cambiar el color de la **🎮GAME BOY Color🎮** y aplicar los siguientes efectos.  
     - 👾 Sticker Pokemon en la parte inferior izquierda de la pantalla: Puedes volver a "clickar" en el color que esta seleccionado para quitarlo de la visualización.
    - 🔔 Sonido Pokemon: Cada vez que hagas "click" en uno de los colores, se producirá el sonido caracteristico del pokemon que aparece en el sticker. 
    
- ⏯️**START**: Cuando pulsas el botón **START** se aplicarán los siguientes efectos:

    - 🚨Se enciende el led rojo de **POWER** de la consola.
    - 🎬Se inicia un gif en la pantalla que simula en arranque de la consola original.
    - 🎶Se reproduce el sonido del inicio del combate pokemon de las primeras generaciones (Pokemon Rojo, Pokemon Azul, Pokemon Verde y Pokemon Amarillo). 

*🔕 Si no quieres reproducir estos sonidos, solo tienes que silenciar tu dispositivo o silenciar la página web (haciendo click derecho en la pesña y seleccionando la opción "Silenciar Sitio").*

Si vuelves a pulsar **START**; se apagará el led rojo, se apagará la pantalla y se detendrá el efecto de sonido.

<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/GH_FSD_GBC/master/img/GBC1.png"  width="" height="400">

<img src="https://raw.githubusercontent.com/RedkarRiv/GH_FSD_GBC/master/img/GBC4.png"  width="" height="400">
</p>

2. Los efectos de la **🎮GAME BOY Color🎮** son:

- 👆Pointer (puntero del ratón): 
   - 🔘Cuando se pasa por encima de los botones del selector de color, estos aumentan de tamaño.

   - ⚫Cuando se pulsan los botones del selector de color, los **botones A/B**, las teclas **Arriba, Abajo, Derecha e Izquierda** de la cruceta y los botones **START** y **SELECT**, se simula un efecto de presión eliminado el sombreado y aumentando la opacidad del color de relleno. Estos efectos desaparecen al soltar el botón para representar un efecto realista.

*Se ha incluido la propiedad "Pointer" para facilitar al usuario que reconozca los elementos "clickables" de la pagina.*

*Se ha incluido una alerta al carga la página que avisa al usuario de que active el sonido si quiere disfrutar de una experiencia completa.*
### Fuentes y referencias

El diseño se ha inspirado en la clasica Game Boy Color comercializada por primera vez en España el 23 de noviembre 1998 por **NINTENDO Company**.

El lanzamiento de esta videoconsola coincide con la aparición de los juegos **POKEMON** y supone una autentica revolución en el mundo de los RPG. Por este motivo se han incluido referencias de diseño al lore **POKEMON ROJO, AZUL, AMARILLO y VERDE**.

### Cómo se hizo

Durante el desarrollo de la gameboy se ha utilizado: HTML para la distribución y composición de los elementos, CSS para el formato y los estilos de los elementos del HTML y Javascript para la interacción y animación.

<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/GH_FSD_GBC/master/img/html1.png"  width="" height="100"></p>

- La estructura principal de la gameboy se ha realizado aplicando un **display: flex** utilizando una tecnica de "🧩puzzle" mediante la cual se ha ido creando cada elemento individualmente.

- La cruceta se ha creado mediante **display: grid** para mejorar la composición de los botones y la distribución de tamaños. 

- Todos los elementos se han creado desde cero utilizando el CSS, a excepción del logo 🕹️**GAME BOY Color**, los stickers de los 👾 pokemons y el fondo de pantalla.

<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/GH_FSD_GBC/master/img/GBC2.png"  width="" height="400">

<img src="https://raw.githubusercontent.com/RedkarRiv/GH_FSD_GBC/master/img/GBC3.png" width="" height="400">
</p>

### Errores conocidos

A pesar de que las funcionalidades de la simulación funcionan correctamente, el GIF que se produce al pulsar el boton **START** no se reinicia si se apaga y se enciende la consola en repetidas ocasiones, sino que recupera el ultimo punto en el que se encontraba. Al ser un GIF de una animación y finalizar con el logo estatico, el impacto en la simulación es minimo.

Si detectas algún otro bug, por favor reportalo a *gbc_bugsreport@rockon.geeks*.

Muchas gracias por tu colaboración.


### Licencia y Copyright

El logotipo de Nintendo y Game Boy Color, son propiedad de **Nintendo Co., Ltd.** Las imágenes representadas en las stickers pertenecen a **Nintendo y The Pokémon Company**.

### Agradecimientos

El creado de este simulador  agradece ❤️ tu tiempo y tu interes ❤️ en este proyecto. 

Si eres desarrollador, diseñador o simplemente te apasiona el mundo de la programación y te gusta colaboraria en el desarrollo web, de software y/o de videojuegos, puedes ponerte en contacto con nuestro equipo en: *gbc_friendsfamilyandfools@rockon.geeks*.
<p align="center">
<img src="https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized.gif" alt="Alt Text" width="200px">
</p>