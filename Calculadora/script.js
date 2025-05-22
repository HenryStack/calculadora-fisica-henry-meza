
function calcularVelocidad() {
  const d = parseFloat(document.getElementById("d").value);
  const t = parseFloat(document.getElementById("t").value);
  document.getElementById("resultadoVelocidad").innerText = t !== 0 ? (d / t).toFixed(2) + " m/s" : "Tiempo no puede ser 0";
}

function calcularAceleracion() {
  const dv = parseFloat(document.getElementById("dv").value);
  const dt = parseFloat(document.getElementById("dt").value);
  document.getElementById("resultadoAceleracion").innerText = dt !== 0 ? (dv / dt).toFixed(2) + " m/s²" : "Tiempo no puede ser 0";
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById("m1").value);
  const a = parseFloat(document.getElementById("a1").value);
  document.getElementById("resultadoFuerza").innerText = (m * a).toFixed(2) + " N";
}

function calcularTrabajo() {
  const f = parseFloat(document.getElementById("f2").value);
  const d = parseFloat(document.getElementById("d2").value);
  const theta = parseFloat(document.getElementById("theta").value);
  const rad = theta * Math.PI / 180;
  document.getElementById("resultadoTrabajo").innerText = (f * d * Math.cos(rad)).toFixed(2) + " J";
}

function calcularEnergiaCinetica() {
  const m = parseFloat(document.getElementById("m3").value);
  const v = parseFloat(document.getElementById("v3").value);
  document.getElementById("resultadoEnergiaCinetica").innerText = (0.5 * m * v * v).toFixed(2) + " J";
}

function calcularEnergiaPotencial() {
  const m = parseFloat(document.getElementById("m4").value);
  const h = parseFloat(document.getElementById("h4").value);
  const g = 9.81;
  document.getElementById("resultadoEnergiaPotencial").innerText = (m * g * h).toFixed(2) + " J";
}

function calcularDensidad() {
  const m = parseFloat(document.getElementById("m5").value);
  const v = parseFloat(document.getElementById("v5").value);
  document.getElementById("resultadoDensidad").innerText = v !== 0 ? (m / v).toFixed(2) + " kg/m³" : "Volumen no puede ser 0";
}

function calcularPresion() {
  const f = parseFloat(document.getElementById("f6").value);
  const a = parseFloat(document.getElementById("a6").value);
  document.getElementById("resultadoPresion").innerText = a !== 0 ? (f / a).toFixed(2) + " Pa" : "Área no puede ser 0";
}

function calcularCarga() {
  const i = parseFloat(document.getElementById("i9").value);
  const t = parseFloat(document.getElementById("t9").value);
  document.getElementById("resultadoCarga").innerText = (i * t).toFixed(2) + " C";
}

function calcularVoltaje() {
  const i = parseFloat(document.getElementById("i10").value);
  const r = parseFloat(document.getElementById("r10").value);
  document.getElementById("resultadoVoltaje").innerText = (i * r).toFixed(2) + " V";
}
