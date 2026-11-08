##  Web Movil 

# Santiago Buitrago Goyeneche 
# Ficha 3407180

# PART 1: La web y la manipulacion del DOM 

Crear los archivos html + CSS + JS Y la funcionalidad es dar clic en el boton y aumenta los like o clic, y se guarde en una tabla la hora exacta del clic o like, como se muestra en la imagen. 


---

# PARTE 2: El mundo móvil con React Native + Expo

En móvil **no existe el DOM web**: no hay `<div>`, `<h1>` ni `<button>`. Se usan componentes de React Native (`<View>`, `<Text>`, `<TouchableOpacity>`) que se convierten en elementos nativos de Android o iOS.

## Pasos para ejecutar

1. Crear el proyecto (elegir **For learning with Expo Go (SDK 57)**):
   ```bash
   npx create-expo-app aplicacionClics
   cd aplicacionClics
   code .
   ```
2. En la terminal de VS Code iniciar el servidor:
   ```bash
   npx expo start
   ```
3. Instalar **Expo Go** en el teléfono (App Store / Google Play) y escanear el código QR.
4. Reemplazar todo el contenido de `src/app/index.tsx` por el código de
   [`index.tsx`](index.tsx) (en esta misma carpeta).

## Equivalencias respecto a la Parte 1 (Web)

| Parte 1 (Web / DOM) | Parte 2 (React Native) |
|---|---|
| `let clics = 0` | `useState(0)` → `[contador, setContador]` |
| `textoContador.textContent = clics` | `{contador}` dentro de `<Text>`; React actualiza la pantalla solo |
| `boton.addEventListener("click", ...)` | `<TouchableOpacity onPress={...}>` |
| `createElement("tr")` + `tbody.prepend(fila)` | `registros.map(...)` + `setRegistros([nuevo, ...registros])` |
| `new Date().toLocaleTimeString(...)` | Igual (JavaScript puro, funciona en ambos) |
| CSS en `estilos.css` | `StyleSheet.create({...})` |

---

# PARTE 3: Cuadro comparativo

| Concepto | Desarrollo Web | React Native (Expo) |
|---|---|---|
| Estructura visual | HTML (`<h1>`, `<div>`, `<p>`) | Componentes (`<Text>`, `<View>`) |
| Botón de clic | `<button>` + `onclick` / `addEventListener` | `<TouchableOpacity>` + `onPress` |
| ¿Existe el DOM? | Sí (se accede con `document.getElementById`) | No (se maneja por estado interno `useState`) |
| Estilos | CSS tradicional o librerías | Objetos JavaScript (`StyleSheet.create`) |
| Entorno de ejecución | Navegadores (Chrome, Edge, Safari) | Dispositivos móviles (Android / iOS) |
# DOM_WEB_Santiago_Buitrago_Goyeneche
