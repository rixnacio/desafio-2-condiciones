// ===== Ejercicio 1 =====
const foto = document.getElementById("foto");
foto.addEventListener("click", () => {
  foto.classList.toggle("con-borde");
});

// ===== Ejercicio 2 =====
const btnStk = document.getElementById("btn-stickers");
const outStk = document.getElementById("salida-stickers");

btnStk.addEventListener("click", () => {
  const n1 = parseInt(document.getElementById("stk1").value) || 0;
  const n2 = parseInt(document.getElementById("stk2").value) || 0;
  const n3 = parseInt(document.getElementById("stk3").value) || 0;
  const total = n1 + n2 + n3;

  if (total <= 10) {
    outStk.textContent = `Llevas ${total} stickers`;
  } else {
    outStk.textContent = "Llevas demasiados stickers";
  }
});

// ===== Ejercicio 3 =====
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const outPass = document.getElementById("salida-pass");
const btnPass = document.getElementById("btn-pass");

// Cargar opciones 1..9
for (let i = 1; i <= 9; i++) {
  [d1, d2, d3].forEach((sel) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  });
}

btnPass.addEventListener("click", () => {
  const pwd = d1.value + d2.value + d3.value;

  if (pwd === "911") {
    outPass.textContent = "password 1 correcto";
  } else if (pwd === "714") {
    outPass.textContent = "password 2 correcto";
  } else {
    outPass.textContent = "password incorrecto";
  }
});
