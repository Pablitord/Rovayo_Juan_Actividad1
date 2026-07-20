const patients = [
  { id: 'PAC007', name: 'Sofía Mejía', age: 55, status: 'critico', pressure: '70/40', temperature: 35.8, entry: '15/07 · 03:30', title: 'Shock séptico', note: 'Infusión de noradrenalina iniciada. Transferir a críticos de inmediato.', alert: 'Hipotensión severa e hipotermia', initials: 'SM' },
  { id: 'PAC003', name: 'Carlos Gómez', age: 62, status: 'critico', pressure: '90/50', temperature: 39.1, entry: '15/07 · 03:00', title: 'Trauma craneoencefálico', note: 'Accidente de tránsito. Requiere UCI inmediata; aún no tiene una cama asignada.', alert: 'Hipotensión y fiebre alta', initials: 'CG' },
  { id: 'PAC012', name: 'Diana Loor', age: 50, status: 'critico', pressure: '85/55', temperature: 36.0, entry: '15/07 · 03:40', title: 'Intoxicación', note: 'Sustancia desconocida y alteración del estado de conciencia.', alert: 'Hipotensión severa', initials: 'DL' },
  { id: 'PAC001', name: 'Juan Pérez', age: 45, status: 'grave', pressure: '180/110', temperature: 38.5, entry: '14/07 · 23:30', title: 'Posible infarto agudo', note: 'Dolor torácico intenso. ECG solicitado; equipo ubicado en el piso 3. En espera de cama.', alert: 'Hipertensión severa y fiebre', initials: 'JP' },
  { id: 'PAC005', name: 'Ana Castro', age: 8, status: 'grave', pressure: '100/60', temperature: 40.2, entry: '15/07 · 03:10', title: 'Convulsión febril', note: 'Medidas físicas aplicadas en pediatría. Exámenes pendientes.', alert: 'Temperatura crítica', initials: 'AC' },
  { id: 'PAC009', name: 'Elena Ramírez', age: 40, status: 'grave', pressure: '140/95', temperature: 39.0, entry: '15/07 · 01:30', title: 'Asma severa exacerbada', note: 'Dificultad respiratoria. Nebulización en curso.', alert: 'Fiebre alta', initials: 'ER' },
  { id: 'PAC004', name: 'Luis Andrade', age: 70, status: 'moderado', pressure: '150/90', temperature: 37.2, entry: '15/07 · 01:10', title: 'Crisis hipertensiva', note: 'En observación y estabilizándose.', alert: '', initials: 'LA' },
  { id: 'PAC008', name: 'Jorge Ruiz', age: 19, status: 'moderado', pressure: '130/85', temperature: 37.0, entry: '15/07 · 02:45', title: 'Herida en mano derecha', note: 'Sutura realizada por corte con vidrio. En espera de alta.', alert: '', initials: 'JR' },
  { id: 'PAC011', name: 'Raúl Mendoza', age: 23, status: 'moderado', pressure: '120/70', temperature: 38.0, entry: '15/07 · 02:00', title: 'Sospecha de apendicitis', note: 'Dolor abdominal en fosa ilíaca derecha. Ecografía pendiente.', alert: 'Temperatura elevada', initials: 'RM' },
  { id: 'PAC002', name: 'María López', age: 28, status: 'leve', pressure: '120/80', temperature: 36.8, entry: '15/07 · 02:15', title: 'Cefalea migrañosa', note: 'Evaluada por triaje y medicada con analgésico. Espera alta.', alert: '', initials: 'ML' },
  { id: 'PAC006', name: 'Pedro Valencia', age: 35, status: 'leve', pressure: '115/75', temperature: 36.5, entry: '15/07 · 03:25', title: 'Posible esguince', note: 'Dolor de tobillo derecho tras caída. Radiografía solicitada.', alert: '', initials: 'PV' },
  { id: 'PAC010', name: 'Lucía Herrera', age: 67, status: 'leve', pressure: '135/85', temperature: 36.2, entry: '15/07 · 03:35', title: 'Dolor lumbar crónico', note: 'Paciente ambulatoria; candidata a alta tras indicaciones.', alert: '', initials: 'LH' }
];

const labels = { critico: 'Crítico', grave: 'Grave', moderado: 'Moderado', leve: 'Leve' };
const tableBody = document.getElementById('patientTableBody');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const emptyState = document.getElementById('emptyState');
const dialog = document.getElementById('patientDialog');
const dialogContent = document.getElementById('dialogContent');
const toast = document.getElementById('toast');

function patientRow(patient) {
  const tempClass = patient.temperature >= 38 || patient.temperature < 36 ? 'vital-alert' : '';
  const pressureClass = patient.alert.toLowerCase().includes('presión') || patient.alert.toLowerCase().includes('hipotensión') || patient.alert.toLowerCase().includes('hipertensión') ? 'vital-alert' : '';
  return `
    <tr data-status="${patient.status}" data-search="${patient.name.toLowerCase()} ${patient.id.toLowerCase()}">
      <td>
        <div class="patient-cell">
          <div class="patient-avatar" aria-hidden="true">${patient.initials}</div>
          <div><strong>${patient.name}</strong><small>${patient.id} · ${patient.age} años</small></div>
        </div>
      </td>
      <td><span class="status-pill status-${patient.status}">● ${labels[patient.status]}</span></td>
      <td>
        <div class="vitals">
          <strong class="${pressureClass}">PA ${patient.pressure}</strong>
          <small class="${tempClass}">Temperatura ${patient.temperature.toFixed(1)} °C</small>
          ${patient.alert ? `<span class="alert-pill">⚠ ${patient.alert}</span>` : ''}
        </div>
      </td>
      <td>${patient.entry}</td>
      <td><div class="situation"><strong>${patient.title}</strong><small>${patient.note}</small></div></td>
      <td><button class="details-button" type="button" data-id="${patient.id}">Ver detalle</button></td>
    </tr>`;
}

function renderPatients() {
  const query = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  const filtered = patients.filter((patient) => {
    const matchesSearch = `${patient.name} ${patient.id}`.toLowerCase().includes(query);
    const matchesStatus = status === 'todos' || patient.status === status;
    return matchesSearch && matchesStatus;
  });
  tableBody.innerHTML = filtered.map(patientRow).join('');
  emptyState.hidden = filtered.length !== 0;
  bindDetailButtons();
}

function bindDetailButtons() {
  document.querySelectorAll('.details-button').forEach((button) => {
    button.addEventListener('click', () => openPatient(button.dataset.id));
  });
}

function openPatient(id) {
  const patient = patients.find((item) => item.id === id);
  if (!patient) return;
  dialogContent.innerHTML = `
    <div class="dialog-title-row">
      <div class="patient-avatar" aria-hidden="true">${patient.initials}</div>
      <div>
        <span class="status-pill status-${patient.status}">● ${labels[patient.status]}</span>
        <h2 id="dialogTitle">${patient.name}</h2>
        <p>${patient.id} · ${patient.age} años</p>
      </div>
    </div>
    <div class="dialog-grid">
      <div class="dialog-stat"><span>Presión arterial</span><strong>${patient.pressure} mmHg</strong></div>
      <div class="dialog-stat"><span>Temperatura</span><strong>${patient.temperature.toFixed(1)} °C</strong></div>
      <div class="dialog-stat"><span>Ingreso</span><strong>${patient.entry}</strong></div>
    </div>
    ${patient.alert ? `<div class="dialog-note" style="border-left-color: var(--critical)"><h3>⚠ Alerta clínica</h3><p>${patient.alert}. Se recomienda evaluación prioritaria del equipo médico.</p></div>` : ''}
    <div class="dialog-note" style="margin-top: 12px"><h3>${patient.title}</h3><p>${patient.note}</p></div>
    <div class="dialog-actions">
      <button class="secondary-button" value="cancel">Cerrar</button>
      <button class="primary-button" type="button" id="decisionButton">Registrar revisión</button>
    </div>`;
  dialog.showModal();
  document.getElementById('decisionButton').addEventListener('click', () => {
    dialog.close();
    showToast(`Revisión registrada para ${patient.name} (demostración).`);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}

searchInput.addEventListener('input', renderPatients);
statusFilter.addEventListener('change', renderPatients);

document.querySelectorAll('.urgent-item').forEach((button) => {
  button.addEventListener('click', () => openPatient(button.dataset.patientId));
});

document.getElementById('refreshButton').addEventListener('click', (event) => {
  const button = event.currentTarget;
  button.classList.remove('rotating');
  void button.offsetWidth;
  button.classList.add('rotating');
  const now = new Date();
  document.getElementById('lastUpdate').textContent = now.toLocaleString('es-EC', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  showToast('Información actualizada correctamente.');
});

dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

renderPatients();
