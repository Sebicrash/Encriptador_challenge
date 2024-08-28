const textarea = document.getElementById("textarea");
const mensaje = document.getElementById("mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}
function encryptText() {
    const text = document.getElementById('textarea').value;
  
    const encryptedText = text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    
    document.getElementById('mensaje').textContent = encryptedText;
    mensaje.style.backgroundImage = "none";
  }
  function decryptText() {
    const encryptedText = document.getElementById('textarea').value;
  
    const decryptedText = encryptedText
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    document.getElementById('mensaje').textContent = decryptedText;
  }


function copyToClipboard() {
    let texto = document.getElementById("mensaje");
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy")
    alert("texto copiado");
    reset();
}

