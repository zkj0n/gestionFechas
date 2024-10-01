# Aplicación Web de Cuenta Regresiva

Este proyecto es un temporizador de cuenta regresiva simple que permite a los usuarios ingresar una fecha límite específica y realizar un seguimiento visual del tiempo restante hasta esa fecha, con actualizaciones de estado codificadas por colores.

## Características

- **Ingresar una Fecha Límite**: Los usuarios pueden ingresar una fecha límite y hora en el formato `mm-dd-yyyy hh:mm`.
- **Cuenta Regresiva en Tiempo Real**: La aplicación calcula el tiempo restante hasta la fecha límite especificada y lo muestra en términos de meses, días, horas, minutos y segundos.
- **Cuenta Regresiva Codificada por Colores**:
  - **Verde**: Cuando el tiempo restante es considerable.
  - **Amarillo**: A medida que la fecha límite se acerca.
  - **Rojo**: Cuando la fecha límite es inminente.
- **Actualización Automática**: La cuenta regresiva se actualiza en tiempo real según la fecha ingresada.

## Cómo Usar

1. Abre la aplicación en tu navegador web.
2. Ingresa una fecha límite en el campo de entrada utilizando el formato `mm-dd-yyyy hh:mm`.
3. Pulsa el botón "Actualizar".
4. La cuenta regresiva se actualizará y mostrará el tiempo restante hasta la fecha límite en la parte superior de la página.
5. El color de la cuenta regresiva cambiará según la proximidad a la fecha límite:
   - **Verde**: Queda mucho tiempo.
   - **Amarillo**: La fecha límite está próxima.
   - **Rojo**: La fecha límite está muy cerca o ya ha pasado.

## Tecnologías Utilizadas
1. HTML5.
2. CSS.
3. JavaScript.
4. Bootstrap.
