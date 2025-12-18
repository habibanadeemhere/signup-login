import supabase from './config.js'

let userName = document.getElementById('name')
let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')
let signupForm = document.getElementById('myForm')

async function register(e){
  e.preventDefault()
  console.log(email.value , password.value);

  try {
    const { data, error } = await supabase.auth.signUp({
  email: email.value,
  password: password.value,
  options:{
    data:{
        userName :userName.value
    }
  }
})

if(data){
    console.log('user data----->',data);
    location.href = 'login.html'
    email.value = ''
    password.value = ''
    userName.value = ''
    
    
}
  } catch (error) {
    console.log(error);
    
  }
  
  
}
signupForm.addEventListener('submit',register)