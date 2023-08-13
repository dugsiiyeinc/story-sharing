let oldPots;


const barsSvg = document.querySelector('.bar-show')
const containerBars = document.querySelector('.container-bars')
let currentPostImageBase64 = ""
const bar = document.querySelector('.bar-hidden')
barsSvg.addEventListener('click' , function(){
    containerBars.style.transform = 'translateX(0%)';
  
   containerBars.style.transition = '0.6s all';
})

bar.addEventListener('click' , function(){
    containerBars.style.transform = 'translateX(100%)';
})


const profile = document.querySelector('.profile-close')

profile.addEventListener('click' , (event)=>{
    const editProfile = document.querySelector('.edit-profile')
   editProfile.style.transform = 'translateY(100%)'
   
})

const btnProfile = document.querySelector('#btn-profile')

btnProfile.addEventListener('click' , function(){
    const editProfile = document.querySelector('.edit-profile')
    editProfile.style.transform = 'translateY(0%)'
    editProfile.style.transition = '0.6s all';
})



const Done = document.querySelector('#Done')

Done.addEventListener('click' , (event)=>{
    const editProfile = document.querySelector('.edit-profile')
    editProfile.style.transform = 'translateY(0%)'
})

const displayPost = document.querySelector('.svg-show')
const mainPost = document.querySelector('.main-post')
displayPost.addEventListener('click' , (event)=>{
mainPost.style.transform = 'translateY(0%)'
mainPost.style.transition = '0.6s all';
})

const CancelPost = document.querySelector('#Cancel-post')

CancelPost.addEventListener('click', (event)=>{
    mainPost.style.transform = 'translateY(100%)'
})

const btnLogout = document.querySelector('#btn-logout')

btnLogout.addEventListener('click' , (event)=>{
    localStorage.removeItem('currentUser') // halakn just only useraccount kiisa la saarayaa hadii logout taabto hadhowna dib waa u soo laabankaraa xogtiisa way u taaalaa
    window.location.href='index.html'
    localStorage.removeItem('lightMode');
})

const lightMood = document.querySelector('.light-mood');
const container = document.querySelector('.container');
const mainSection = document.querySelector('.main-section')
const sectionSpecial = document.querySelector('.section-special')
const sectionFooter = document.querySelector('.footer')
const containerBar = document.querySelector('.container-bars')
lightMood.addEventListener('click', function(event) {
  container.classList.add('change-color');
  const lightMoon = document.querySelector('.lightmoon');
  lightMoon.style.display = 'initial';
  lightMood.classList.add('light');
  const headerContainer = document.querySelector('.header-container');
  const span = document.querySelector('#span');
  headerContainer.style.color = '#131621';
  span.style.color = '#131621';
  const bio = document.querySelector("#bio")
  bio.style.color = '#131621'

sectionSpecial.classList.add('column-show')
sectionFooter.classList.add('section-footer-show')
containerBar.classList.add('container-bars-show')
const element = document.querySelectorAll('.main-section')
    // Check if the element exists
    if (element) {

        element.forEach((postsElement)=>{
            postsElement.classList.add("main-show");
        })
      // Add a class to the element

    } else {
      console.error("Element not found");
    }

  // Save the light mode preference in localStorage
  localStorage.setItem('lightMode', 'true');
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the light mode preference from localStorage
  const isLightModeEnabled = localStorage.getItem('lightMode');

  // Check if the preference exists and apply the light mode if enabled
  if (isLightModeEnabled === 'true') {
    container.classList.add('change-color');
    const lightMoon = document.querySelector('.lightmoon');
    lightMoon.style.display = 'initial';
    lightMood.classList.add('light'); 
    const headerContainer = document.querySelector('.header-container');
    const span = document.querySelector('#span');
    headerContainer.style.color = '#131621';
    span.style.color = '#131621';
    const bio = document.querySelector("#bio")
    bio.style.color = '#131621'
    // mainSection.classList.add('main-show')

    sectionSpecial.classList.add('column-show')
    sectionFooter.classList.add('section-footer-show')
    containerBar.classList.add('container-bars-show')
    const element = document.querySelectorAll('.main-section')
    // Check if the element exists
    if (element) {

        element.forEach((postsElement)=>{
            postsElement.classList.add("main-show");
        })
      // Add a class to the element

    } else {
      console.error("Element not found");
    }
  }
});

const lightMoon = document.querySelector('.lightmoon');
lightMoon.addEventListener('click', function(event) {
  lightMoon.style.display = 'none';
  lightMood.classList.remove('light');
  container.classList.remove('change-color');
  const headerContainer = document.querySelector('.header-container');
  headerContainer.style.color = 'white';
  const span = document.querySelector('#span');
  span.style.color = 'white';
  const bio = document.querySelector("#bio")
  bio.style.color = 'white'
//   mainSection.classList.remove('main-show')

  sectionSpecial.classList.remove('column-show')
  sectionFooter.classList.remove('section-footer-show')
  containerBar.classList.remove('container-bars-show')
  const element = document.querySelectorAll('.main-section')
    // Check if the element exists
    if (element) {

        element.forEach((postsElement)=>{
            postsElement.classList.remove("main-show");
        })
      // Add a class to the element

    } else {
      console.error("Element not found");
    }

  // Remove the light mode preference from localStorage
  localStorage.removeItem('lightMode');
});



const textSize = document.querySelector('#textSize')

textSize.addEventListener('keyup' , (event)=>{
    let scheight = event.target.scrollHeight;
    textSize.style.height = `${scheight}px`
})

const fileImage = document.querySelector('#file-img') //image
const inputImage = document.querySelector('#img') //input
inputImage.addEventListener('change' , ()=>{
    fileImage.src = URL.createObjectURL(inputImage.files[0])
    var reader = new FileReader();

    // when the user select the image
    reader.onloadend =function() {
        // When the read er has finished reading the file,
        // its result contains a data URL representing the file's data.
        const currentUserFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'))
        let allUsers = JSON.parse(localStorage.getItem('users')) || [];

        allUsers = allUsers.map(user => {
            if (user.email === currentUserFromLocalStorage.email) {
              return {...user, image: reader.result , bio: bio.value}; // Spread the user object and overwrite the username key
            } else {
              return user; // If it's not the user we want to update, return the user object unchanged
            }
          });

          currentUserFromLocalStorage.image = reader.result
          currentUserFromLocalStorage.bio = bio.value  

       
        localStorage.setItem('currentUser', JSON.stringify(currentUserFromLocalStorage));
        localStorage.setItem('users',JSON.stringify(allUsers));
    }
    reader.readAsDataURL(inputImage.files[0]);

    fillUserInfo()
})


const fileinpt = document.querySelector('#input-img')
const postImage = document.querySelector('#container-post-img')
fileinpt.addEventListener('change' , ()=>{
    postImage.src = URL.createObjectURL(fileinpt.files[0])
    addData =  URL.createObjectURL(fileinpt.files[0])
    // Usage:
getBase64(fileinpt.files[0], function(base64String) {
    console.log("base64String", base64String);
    currentPostImageBase64 =base64String;
    // Save to localStorage or use the base64 string as needed.
});
})


function getBase64(file, callback) {
    let reader = new FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}






//edit profile
const done = document.querySelector('#Done')
const nameInput = document.querySelector('#name')
const usernameInput = document.querySelector('#username')
const bio = document.querySelector('#textArea')
const profileImage = document.querySelector('#file-img')

const currentUserInfor = JSON.parse(localStorage.getItem('currentUser'));
nameInput.value = currentUserInfor.fullname
usernameInput.value = currentUserInfor.username
bio.value = currentUserInfor.bio
profileImage.src = currentUserInfor.image

var maxLength = 50;
bio.addEventListener('input', function(event){
  var text = this.value.trim()
  if(text.length > maxLength){
      this.value = text.slice(0 , maxLength) 
  }
})


function getDataProfile(){
    const getCheck = localStorage.getItem('ProfieInfo')
    if(getCheck){
        return JSON.parse(getCheck)
    }else{
        console.log('no data');
        return []
    }
}
function addDataProfile(NameInput , usernameInput , bio){
  const checkDataInputs = JSON.parse(localStorage.getItem('users'))
 if(NameInput !== '' || usernameInput !== '' || bio !== ''){
//   checkDataInputs.push({nameinput: NameInput , username: usernameInput , bio: bio})

 

// halkan waa marka qofka namekiisa iyo username kiisa iyo bio kiisa la update gareenayo
const currentUser = JSON.parse(localStorage.getItem('currentUser'))
// udateProfile() 
const updatedUsers = checkDataInputs.find((user) => user.email === currentUser.email)
updatedUsers.fullname = NameInput
updatedUsers.username = usernameInput
updatedUsers.bio = bio
localStorage.setItem("currentUser",JSON.stringify(updatedUsers))
localStorage.setItem('users', JSON.stringify(checkDataInputs))


  }else{
    return;
    
  }
}




done.addEventListener('click' , ()=>{
    addDataProfile(nameInput.value , usernameInput.value , bio.value)
    getPostsFromLocal()
  
    const editProfile = document.querySelector('.edit-profile')
    editProfile.style.transform = 'translateY(100%)'
      

})

const heading = document.querySelector('.heading')
const containerSection = document.querySelector('.container-section')
  const inputImg = document.querySelector('#input-img')
  const textValues = document.querySelector('#textSize')


const postHeader = document.querySelector('.section-post')
const currentUserInfo = JSON.parse(localStorage.getItem('currentUser'));
postHeader.innerHTML = `

<div class="sectin-profile">
<img src= ${currentUserInfo.image ? currentUserInfo.image : "user.jpg"} alt="">
</div>
<div class="sectin-username">
<h4>${currentUserInfo.username}</h4>
</div>

`

function getPostsFromLocal (){
   
     
        
        if(localStorage.getItem('displayPosts') === null){
            oldPots = []
        }else{
            oldPots = JSON.parse(localStorage.getItem('displayPosts'))
        }

         const allUsers = JSON.parse(localStorage.getItem('users'))

        // console.log(oldPots);
       containerSection.innerHTML = ''
       //halkan oo kale waxaan kabdalay qofka marka uu post sameenayo inu la soo akhriyo profile picture kiisa iyo namekiisa line 342
        oldPots.forEach(posts =>{
            let findUsersImage = ''
            let findUsername ;
            allUsers.forEach((findImage)=> {
                if(findImage.email === posts.email){
                    findUsersImage = findImage.image
                    findUsername = findImage.username
                }
            })
            containerSection.innerHTML += `   <div class="main-section">
            <i class="fa-solid fa-ellipsis" onclick="deleteDataLocal(${posts.id})"></i>
            <div class="main-header">
                <div class="column-left">
                    <img src=${findUsersImage || "user.jpg" } alt=""> 
                    <h4>${findUsername}</h4> 
                </div>
                <div class="column-right">
                    <p>${posts.time}</p>
                      
                </div>
            </div>
            <div class="container-post">
            <p>${posts.title}</p>
        <img src="${posts.image}" alt="">
                
                <div class="section-icons">
                    <div class="icons">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 like-icon ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  


                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 liked-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                          <p><span class="like-count">0</span> likes</p>
                    </div>
                    <div class="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                          </svg>
                                         
                    </div>
                </div>
            </div>
        </div> `
        
        })
       
        }



getPostsFromLocal()


heading.addEventListener('click' , (event)=>{
   const mainPost = document.querySelector('.main-post')
   var currentTime = new Date();
   var currentHour = currentTime.getHours();
   var currentMinute = currentTime.getMinutes();
   
   var formattedTime = currentHour.toString().padStart(2, '0') + ":" + currentMinute.toString().padStart(2, '0');   
 
const currentUserInfo = JSON.parse(localStorage.getItem('currentUser'));
if(textValues.value !== '' || inputImg.value !== "" ){

 
var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();

var formattedTime = currentHour.toString().padStart(2, '0') + ":" + currentMinute.toString().padStart(2, '0');  


  const checkObjects = {
  id:  Math.floor(Math.random()*1000000),
  title: textValues.value,
  image: currentPostImageBase64,
  time: formattedTime 
  }
//  var checkLength = 
addPostsLocal(checkObjects)
mainPost.style.transform = 'translateY(100%)'
textValues.value = ''
postImage.src = ''
getPostsFromLocal()
}
else{
 return;
}
})

function addPostsLocal(posts){
    console.log("poster",posts)
    if(posts.length < 0 ){
        return;
    }
    let oldPots;
    
    if(localStorage.getItem('displayPosts') === null){
        oldPots = []
    }else{
        oldPots = JSON.parse(localStorage.getItem('displayPosts'))
    }
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    
    // posts = {...posts, postedBy: currentUser}
    posts.email = currentUser.email
    // posts.user = currentUser.username
    oldPots.push(posts)
    
      localStorage.setItem('displayPosts' , JSON.stringify(oldPots))
    

    
}



fillUserInfo()

function fillUserInfo(){

     const firstName = document.querySelector('#name')
     const secondName = document.querySelector('#username')
    const userInfoElement = document.querySelector("#userInfo")
    const currentUserInfo = JSON.parse(localStorage.getItem('currentUser'));
// 
   userInfoElement.innerHTML= `  <div class="column-left">
      <h1 id="name-display">${currentUserInfo.fullname ? currentUserInfo.fullname : firstName.value}   </h1>
      <h4 id="username-display">${currentUserInfo.username ? currentUserInfo.username : secondName.value}</h4>
      <p id="bio">${currentUserInfo.bio ? currentUserInfo.bio : ''}</p>
      <p id="followers"><span id="span">5k</span> Followers</p>
        </div>
        <div class="column-right">
          <img src=${currentUserInfo.image ? currentUserInfo.image : "user.jpg"} class="profile-img" id="profile-img" alt="">
        </div>`;

}


function deleteDataLocal(deletePost) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const displayPosts = JSON.parse(localStorage.getItem('displayPosts'));
    const emailPost = oldPots.find((element)=> element.id === deletePost)
    if(currentUser.email === emailPost.email){
        if(confirm('are sure to delete this post')){
             const  postToDelete = oldPots.filter((postFind)=> postFind.id !== deletePost)
     oldPots = postToDelete
    localStorage.setItem('displayPosts', JSON.stringify(oldPots));
    getPostsFromLocal()
        }else{
            return;
        }
      
    }else{
        alert('this post your not mine')
    }
    


  }


 
  const likeIcons = document.querySelectorAll('.like-icon');
  const likedIcons = document.querySelectorAll('.liked-icon');
  const likeCounts = document.querySelectorAll('.like-count');
  
  likeIcons.forEach((likeIcon, index) => {
    likeIcon.addEventListener('click', () => {
      likeIcon.style.display = 'none';
      likedIcons[index].style.display = 'inline';
      likeCounts[index].textContent = parseInt(likeCounts[index].textContent) + 1 ;
  
    });
  });
  
  likedIcons.forEach((likedIcon, index) => {
    likedIcon.addEventListener('click', () => {
      likedIcon.style.display = 'none';
      likeIcons[index].style.display = 'inline';
      likeCounts[index].textContent = parseInt(likeCounts[index].textContent) - 1;
     
    });
  });
