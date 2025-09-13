// Datos históricos para los gráficos
// Formato: {code: 'USD', label: 'Dólar Estadounidense', history: {fechas: [], valores: []}}

const graficoData = [
  {
    code: 'USD',
    label: 'Dólar Estadounidense',
    history: {
      fechas: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07'],
      valores: [320, 322, 325, 323, 327, 330, 320]
    }
  },
  {
    code: 'EUR',
    label: 'Euro',
    history: {
      fechas: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07'],
      valores: [350, 348, 352, 355, 353, 357, 360]
    }
  },
  {
    code: 'MLC',
    label: 'MLC',
    history: {
      fechas: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07'],
      valores: [300, 302, 305, 303, 307, 310, 308]
    }
  }
];

// Función para agregar un nuevo valor diario
function agregarValorDiario(codigoMoneda, fecha, valor) {
  const moneda = graficoData.find(m => m.code === codigoMoneda);
  if (moneda) {
    // Verificar si la fecha ya existe
    const indiceFecha = moneda.history.fechas.indexOf(fecha);
    
    if (indiceFecha !== -1) {
      // Actualizar valor existente
      moneda.history.valores[indiceFecha] = valor;
    } else {
      // Agregar nueva fecha y valor
      moneda.history.fechas.push(fecha);
      moneda.history.valores.push(valor);
      
      // Mantener solo los últimos 30 días (opcional)
      if (moneda.history.fechas.length > 30) {
        moneda.history.fechas.shift();
        moneda.history.valores.shift();
      }
    }
  }
}

// Función para obtener los últimos N días de datos
function obtenerUltimosDias(codigoMoneda, dias = 7) {
  const moneda = graficoData.find(m => m.code === codigoMoneda);
  if (!moneda) return { fechas: [], valores: [] };
  
  const inicio = Math.max(0, moneda.history.fechas.length - dias);
  return {
    fechas: moneda.history.fechas.slice(inicio),
    valores: moneda.history.valores.slice(inicio)
  };
}
