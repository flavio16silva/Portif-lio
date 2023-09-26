// Criando contantes
const navbar = document.querySelector('.navbar')
const mobileNavbar = document.querySelector('.navbar__mobile')
const button = document.querySelector('.burguer')

//Ativando ou Desativando no click o botão de burguer no mobile
button.addEventListener('click', function(){
  mobileNavbar.classList.toggle('active')
})


//Criando Sombreamento com classe ativa no navbar
window.addEventListener('scroll', function(){
  if(this.window.pageYOffset > 0 ) return navbar.classList.add('active')
    return navbar.classList.remove('active')
})

