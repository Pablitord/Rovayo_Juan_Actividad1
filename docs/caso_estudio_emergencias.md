# Caso de Estudio: Dashboard de Emergencias Médicas (Clínica San José)

Este archivo contiene el contexto del caso de estudio, el reporte deficiente actual y la estructura de preguntas que deben responder en su entregable.

---

## Contexto del Caso

La **Clínica San José** está experimentando problemas de saturación en su sala de emergencias. El Director Médico, el **Dr. Alejandro Silva**, necesita supervisar constantemente el estado de la sala para tomar decisiones críticas en tiempo real:
1. **Asignación de recursos:** Decidir qué pacientes críticos deben ser trasladados a la Unidad de Cuidados Intensivos (UCI) o al área de Choque.
2. **Altas médicas:** Identificar rápidamente a pacientes con estados leves o moderados que ya pueden recibir el alta para liberar camas de observación.
3. **Monitoreo de alertas:** Identificar pacientes graves cuyos signos vitales (presión arterial, temperatura) estén fuera de rango.

## El Reporte Actual (Sistema Heredado)

El sistema actual genera una pantalla de texto plano en una terminal de consola. El Dr. Silva tiene que leer este bloque de texto constantemente.

```text
=== SISTEMA DE EMERGENCIAS V1.4 - REPORTE DE SALA ===
FECHA: 15/07/2026 03:45 AM | TOTAL REGISTROS: 12 | OPERADOR: ADMIN
---------------------------------------------------------------------------------
PAC001|PEREZ, JUAN|45 AÑOS|ESTADO: GRAVE|PRES: 180/110|T: 38.5|ING: 14/07 23:30|COMENTARIO: DOLOR TORACICO INTENSO, POSIBLE IAM, SE SOLICITO ECG PERO EL EQUIPO ESTA EN EL PISO 3. EN ESPERA DE CAMA.
PAC002|LOPEZ, MARIA|28 AÑOS|ESTADO: LEVE|PRES: 120/80|T: 36.8|ING: 15/07 02:15|COMENTARIO: CEFALEA MIGRAÑOSA, EVALUADA POR TRIAJE, SE INDICO ANALGESICO, ESPERA ALTA.
PAC003|GOMEZ, CARLOS|62 AÑOS|ESTADO: CRITICO|PRES: 90/50|T: 39.1|ING: 15/07 03:00|COMENTARIO: TRAUMA CRANEOENCEFALICO POR ACCIDENTE DE TRANSITO. REQUIERE UCI INMEDIATA. SIN CAMA EN UCI DISPONIBLE.
PAC004|ANDRADE, LUIS|70 AÑOS|ESTADO: MODERADO|PRES: 150/90|T: 37.2|ING: 15/07 01:10|COMENTARIO: CRISIS HIPERTENSIVA, EN OBSERVACION, ESTABILIZANDO.
PAC005|CASTRO, ANA|8 AÑOS|ESTADO: GRAVE|PRES: 100/60|T: 40.2|ING: 15/07 03:10|COMENTARIO: CONVULSION FEBRIL EN PEDIATRIA, SE APLICO MEDIDAS FISICAS, PENDIENTE EXAMENES.
PAC006|VALENCIA, PEDRO|35 AÑOS|ESTADO: LEVE|PRES: 115/75|T: 36.5|ING: 15/07 03:25|COMENTARIO: DOLOR EN TOBILLO DERECHO TRAS CAIDA, SE SOSPECHA ESGUINCE, SE SOLICITO RX.
PAC007|MEJIA, SOFIA|55 AÑOS|ESTADO: CRITICO|PRES: 70/40|T: 35.8|ING: 15/07 03:30|COMENTARIO: SHOCK SEPTICO, INFUSION DE NORADRENALINA INICIADA. TRANSFERIR A CRITICOS DE INMEDIATO.
PAC008|RUIZ, JORGE|19 AÑOS|ESTADO: MODERADO|PRES: 130/85|T: 37.0|ING: 15/07 02:45|COMENTARIO: SUTURA EN MANO DERECHA POR CORTE CON VIDRIO. EN ESPERA DE ALTA.
PAC009|RAMIREZ, ELENA|40 AÑOS|ESTADO: GRAVE|PRES: 140/95|T: 39.0|ING: 15/07 01:30|COMENTARIO: DIFICULTAD RESPIRATORIA, ASMA SEVERA EXACERBADA, NEBULIZACION EN CURSO.
PAC010|HERRERA, LUCIA|67 AÑOS|ESTADO: LEVE|PRES: 135/85|T: 36.2|ING: 15/07 03:35|COMENTARIO: CONSULTA POR DOLOR DE ESPALDA CRONICO, PACIENTE AMBULATORIO.
PAC011|MENDOZA, RAUL|23 AÑOS|ESTADO: MODERADO|PRES: 120/70|T: 38.0|ING: 15/07 02:00|COMENTARIO: DOLOR ABDOMINAL EN FOSA ILIACA DERECHA, SOSPECHA APENDICITIS, PENDIENTE ECOGRAFIA.
PAC012|LOOR, DIANA|50 AÑOS|ESTADO: CRITICO|PRES: 85/55|T: 36.0|ING: 15/07 03:40|COMENTARIO: INTOXICACION POR SUSTANCIA DESCONOCIDA, ALTERACION DEL ESTADO DE CONSCIENCIA.
---------------------------------------------------------------------------------
DISPONIBILIDAD DE RECURSOS DEL HOSPITAL:
CAMAS OBSERVACION EMERGENCIAS: 0 DISPONIBLES DE 10 TOTALES
CAMAS DE CRITICOS EN EMERGENCIAS: 0 DISPONIBLES DE 3 TOTALES
CAMAS UCI GENERAL: 1 DISPONIBLE DE 8 TOTALES
MEDICOS DE GUARDIA: DR. CEVALLOS (OCUPADO), DRA. ORTIZ (OCUPADO), DR. MACIAS (DISPONIBLE).
=== FIN DEL REPORTE ===
```

---

## Plantilla de Entrega para Estudiantes
*(Utilicen este formato para estructurar el archivo `README.md` de su repositorio de GitHub o un documento Markdown complementario)*

**Nombres de los Integrantes:** __________________________________________________

### Paso 1: Análisis de Deficiencias
*Basándose en la teoría de diseño de salidas, identifiquen y expliquen **3 deficiencias críticas** del reporte antiguo:*

1. **Deficiencia 1:**
   * *Descripción y Justificación:* ____________________________________________________________________

2. **Deficiencia 2:**
   * *Descripción y Justificación:* ____________________________________________________________________

3. **Deficiencia 3:**
   * *Descripción y Justificación:* ____________________________________________________________________

---

### Paso 2: Criterios de Selección Tecnológica
*Respondan a las 4 preguntas que justifican el canal de salida seleccionado para el Dr. Alejandro Silva:*

1. **¿Quién recibirá la información?** (Rol del usuario, nivel de detalle y jerarquía requerida)
   * *Respuesta:* ____________________________________________________________________
2. **¿Cómo accederá a ella?** (Tipo de dispositivo, movilidad, conectividad, entorno físico)
   * *Respuesta:* ____________________________________________________________________
3. **¿Con qué rapidez se requiere?** (Frecuencia de actualización: tiempo real, por lotes, diferido)
   * *Respuesta:* ____________________________________________________________________
4. **¿Qué nivel de interacción requiere?** (Posibilidad de filtrar, ordenar, alertas automáticas, botones de acción)
   * *Respuesta:* ____________________________________________________________________

---

### Paso 3: Justificación Teórica y Diseño Conceptual
*Expliquen las decisiones de diseño a partir del modelo conceptual y los principios teóricos:*

1. **Modelo Conceptual Aplicado (Información - Presentación - Contexto):**
   * **Información (Qué mostrar):** ¿Qué datos del reporte original priorizaron y cuáles decidieron agrupar o resumir para evitar la sobrecarga cognitiva del Dr. Silva?
     * *Respuesta:* ____________________________________________________________________
   * **Presentación (Cómo mostrar):** ¿Qué formatos visuales (KPIs, gráficos, tablas ordenadas, colores de alerta) eligieron para garantizar una comprensión inmediata?
     * *Respuesta:* ____________________________________________________________________
   * **Contexto (A quién y cuándo):** ¿Cómo responde su propuesta al hecho de que las decisiones médicas en urgencias requieren rapidez extrema y precisión?
     * *Respuesta:* ____________________________________________________________________

2. **Principios de Diseño de Interfaces y Pantallas Modernas:**
   * Detallen cómo aplicaron al menos **dos principios** de diseño (ej. *Jerarquía Visual*, *Simplicidad/Menos es más*, *Consistencia*, *Retroalimentación/Feedback*, *Accesibilidad WCAG* o *Prevención de Errores*) en su propuesta digital.
     * *Respuesta:* ____________________________________________________________________

---

### Paso 4: Evidencia del Diseño Digital (Entregable)
*Agreguen aquí la información sobre el formato en el que desarrollaron el diseño digital:*

*   **Tecnología/Herramienta utilizada:** (Ej. Figma, Miro, Mockplus, Adobe XD, o código en HTML/CSS Tailwind, React, etc.)
*   **Enlace al Prototipo Digital (si aplica):** [Enlace al prototipo interactivo]
*   **Instrucciones para visualizar el diseño:** (Ej. "Abrir el archivo `index.html` incluido en este repositorio", o "Ver captura de pantalla `mockup.png` adjunta en la carpeta `/design`").
