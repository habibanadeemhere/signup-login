import supabase from "./config.js";


const admin_email = "iamadmin123@gmail.com"
const admin_password = "adminhere098"

async function Adminpage() {
  const { data, error } = await supabase.auth.getUser()

  if (error) return console.log(error)

  if (data && data.user) {
    const userEmail = data.user.email
    const userPassword = data.user.password


    if (userEmail !== admin_email && userPassword !== admin_password) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied 🚫',
        text: "You are not authorized to view this page!",
        confirmButtonColor: '#FF4ECF',
        background: '#1C1C27',
        color: '#fff'
      }).then(() => {
        window.location.href = 'home.html'
      })

    }

  }
}

Adminpage()


async function users() {
  const { data: users, error } = await supabase
  .from('profiles')
  .select('id, username, email')


  if(error) {
     console.log("Error fetching users:", error)
        return
  }


  const table = document.getElementById('usersTable')

  users.forEach(user => {
    const row = document.createElement('tr')
    row.innerHTML += `
    <td>${user.id}</td>
    <td>${user.userName}</td>
    <td>${user.email}</td>
    `
  });


}











