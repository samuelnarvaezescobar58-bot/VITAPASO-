const HABITOS=[
"Beber suficiente agua",
"Dormir entre 7 y 9 horas",
"Comer frutas",
"Comer verduras",
"Hacer ejercicio",
"Caminar al aire libre",
"Evitar exceso de azúcar",
"Reducir comida rápida",
"Desayunar",
"Buena higiene",
"Lavarse las manos",
"Cepillarse dientes",
"Usar hilo dental",
"Postura correcta",
"Estirarse al despertar",
"Usar protector solar",
"Evitar trasnochar",
"Porciones adecuadas",
"Reducir sal",
"Leer",
"Aprender algo nuevo",
"Practicar gratitud",
"Meditar",
"Escuchar música relajante",
"Escribir pensamientos",
"Organizar tu día",
"Evitar estrés",
"Respirar profundo",
"Pensar positivo",
"Reducir redes sociales",
"Resolver rompecabezas",
"Establecer metas",
"Celebrar logros",
"Practicar concentración",
"Tener hobbies",
"Saludar con amabilidad",
"Escuchar a los demás",
"Pasar tiempo con familia",
"Ayudar a otros",
"Practicar empatía",
"Resolver conflictos",
"Decir gracias",
"Evitar discusiones",
"Tiempo con amigos",
"Planificar semana",
"Levantarse temprano",
"Limitar pantallas",
"Pasar tiempo en naturaleza",
"Practicar deporte",
"Autocuidado"
];

let completados=0;

function guardarPerfil(){

let nombre=document.getElementById("nombre").value;

localStorage.setItem("nombre",nombre);

document.getElementById("saludo").innerText="Hola "+nombre+" 👋";

}

function generarHabitos(){

let contenedor=document.getElementById("listaHabitos");

let seleccion=[];

while(seleccion.length<6){

let random=Math.floor(Math.random()*HABITOS.length);

let h=HABITOS[random];

if(!seleccion.includes(h)){
seleccion.push(h);
}

}

seleccion.forEach(h=>{

let div=document.createElement("div");

div.className="habito";

div.innerText=h;

div.onclick=function(){

if(div.classList.contains("activo")){
div.classList.remove("activo");
completados--;
}else{
div.classList.add("activo");
completados++;
}

actualizar();

};

contenedor.appendChild(div);

});

}

function actualizar(){

let porcentaje=(completados/6)*100;

document.getElementById("progreso").style.width=porcentaje+"%";

document.getElementById("textoProgreso").innerText=
completados+" de 6 hábitos completados";

document.getElementById("stats").innerText=
"Hábitos completados hoy: "+completados;

}

function responder(){

let pregunta=document.getElementById("pregunta").value.toLowerCase();

let respuesta="Mantener hábitos saludables mejora tu vida.";

if(pregunta.includes("agua")){
respuesta="Lo ideal es beber aproximadamente 2 litros de agua al día.";
}

if(pregunta.includes("sueño")){
respuesta="Dormir entre 7 y 9 horas mejora la salud.";
}

if(pregunta.includes("ejercicio")){
respuesta="30 minutos de actividad física es excelente.";
}

let chat=document.getElementById("chat");

chat.innerHTML+="<p><b>Tú:</b> "+pregunta+"</p>";
chat.innerHTML+="<p><b>Vita:</b> "+respuesta+"</p>";

document.getElementById("pregunta").value="";

}

generarHabitos();