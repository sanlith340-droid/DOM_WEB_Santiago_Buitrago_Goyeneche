
import { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// ==========================================
// 1. DEFINICIÓN DE TIPOS
// ==========================================

interface Registro {
  id: string;
  numero: number;
  hora: string;
}

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================

export default function App(): React.JSX.Element {

  // Estados tipados
  const [contador, setContador] = useState<number>(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  // ==========================================
  // 3. FUNCIÓN PARA INCREMENTAR EL CONTADOR
  // ==========================================

  const incrementarContador = (): void => {

    const nuevoContador: number = contador + 1;

    const ahora: Date = new Date();

    const horaFormateada: string = ahora.toLocaleTimeString();

    // Actualizar contador
    setContador(nuevoContador);

    // Crear objeto de registro
    const nuevoRegistro: Registro = {
      id: Date.now().toString(),
      numero: nuevoContador,
      hora: horaFormateada,
    };

    // Agregar registro al inicio de la lista
    setRegistros((registrosAnteriores: Registro[]) => [
      nuevoRegistro,
      ...registrosAnteriores,
    ]);
  };

  // ==========================================
  // 4. INTERFAZ DE USUARIO
  // ==========================================

  return (
    <View style={estilos.body}>

      <View style={estilos.container}>

        {/* Título */}
        <Text style={estilos.h1}>
          Interactividad con el DOM
        </Text>

        {/* Descripción */}
        <Text style={estilos.description}>
          Haz clic en el botón para incrementar el contador
          y registrar la hora exacta del evento en la tabla.
        </Text>

        {/* Contador dinámico */}
        <Text style={estilos.counterBox}>
          {contador}
        </Text>

        {/* Botón de interacción */}
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
          activeOpacity={0.7}
        >
          <Text style={estilos.btnText}>
            ¡Haz Clic Aquí!
          </Text>
        </TouchableOpacity>

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>

          {/* Encabezado de la tabla */}
          <View style={estilos.tableHeader}>

            <Text style={[estilos.th, estilos.cellNumero]}>
              No. Clic
            </Text>

            <Text style={[estilos.th, estilos.cellHora]}>
              Hora
            </Text>

          </View>

          {/* Cuerpo de la tabla */}
          <ScrollView style={estilos.tableBody}>

            {registros.map((item: Registro, index: number) => (

              <View
                key={item.id}
                style={[
                  estilos.tr,
                  index % 2 === 0 && estilos.trEven,
                ]}
              >

                {/* Número de clic */}
                <Text style={[estilos.td, estilos.cellNumero]}>
                  {item.numero}
                </Text>

                {/* Hora del registro */}
                <Text style={[estilos.td, estilos.cellHora]}>
                  {item.hora}
                </Text>

              </View>

            ))}

          </ScrollView>

        </View>

      </View>

    </View>
  );
}

// ==========================================
// 5. ESTILOS DE LA APLICACIÓN
// ==========================================

const estilos = StyleSheet.create({

  // Contenedor principal
  body: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // Tarjeta principal
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },

  // Título
  h1: {
    color: '#2c3e50',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Descripción
  description: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },

  // Contador
  counterBox: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
    marginVertical: 10,
  },

  // Botón
  btnClick: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
    alignItems: 'center',
    shadowColor: '#2ecc71',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
    width: '100%',
  },

  // Texto del botón
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  // Contenedor de la tabla
  tableContainer: {
    width: '100%',
    maxHeight: 220,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    overflow: 'hidden',
  },

  // Encabezado
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  // Cuerpo
  tableBody: {
    maxHeight: 170,
  },

  // Filas
  tr: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },

  // Filas alternas
  trEven: {
    backgroundColor: '#fafafa',
  },

  // Encabezados de columnas
  th: {
    color: '#7f8c8d',
    fontWeight: '600',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },

  // Celdas
  td: {
    color: '#333',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },

  // Columna número
  cellNumero: {
    flex: 1,
  },

  // Columna hora
  cellHora: {
    flex: 1.5,
  },

});
