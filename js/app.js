window.onload = () => {
         //ex1();
        //ex2();
       //ex3();
      //ex4();
      //ex9();
      //ex8y10();
      ex11();
}

const ex1 = () => {
    alert('Bienvenido a mi sitio');
}

const ex2 = (text) => {
    const result = confirm('¿Estas seguro que quieres avanzar');
    let titleH2 = document.querySelector('h2')
    titleH2.innerHTML = text;
    titleH2.style.textAlign = 'center'
    if(!result){
        return titleH2.innerHTML = '<span>Lamentamos que no quieras continuar tu visita por este maravilloso sitio</span>'
    }
    return titleH2.innerHTML = '<span>Qué alegría que quieras con tu visita por este maravilloso sitio</span>'
}

const ex3 = () => {
    const name = prompt('Ingresa tu nombre')
    document.querySelector('h1').innerHTML = `Bienvenido ${name} `
} 

const ex4 = () => {
    const age = prompt('Ingresa tu edad')
    if(age < 18){
      document.querySelector('.container-general').style.display = 'none';
      const contenidoBloqueado = document.querySelectorAll('.contenido-bloqueado');
      for (const blockCont of contenidoBloqueado) {
         blockCont.style.display = 'block';
      }
    } 
}



const ex9 = () => {
    const hobbie = prompt('¿Cuales son tus hobbies?');
    const arrayHobbie = hobbie.split(',');

    const listHobbies = document.querySelector('.hobbies');
    let olhobbie = "<ol>";
    for (const listadoHobbies of arrayHobbie.slice(0, 3)) {
         olhobbie += `<li>${listadoHobbies}</li>`
    }
     olhobbie += "</ol>";
     listHobbies.innerHTML = olhobbie;

}

// Netflix,Programación,Fútbol,Hockey

const ex8y10 = () => {
    const hobbie = prompt('¿Cuales son tus hobbies?');
    const arrayHobbie = hobbie.split(',');
if(
    arrayHobbie.includes('Programacion')
 || arrayHobbie.includes('Programación')
 || arrayHobbie.includes('Programar')
){
 alert('Que bueno que te guste la programacion');
 document.querySelector('.background-img').style.backgroundImage = "url('img/programmer.jpeg')";
}else{
 alert('Que pena que no te guste la programacion');
 document.querySelector('.background-img').style.backgroundImage = "url('img/gatito.jpeg')";
}
}

const ex11 = () => {
    const colorPreferido = prompt('Ingrese su color favorito');
    console.log(colorPreferido)
    const name = prompt('Ingrese su nombre');
    let titleh1 = document.querySelector('h1').innerHTML = `Bienvenido <span class=color-preferido>${name}</span>`;
    
}