function showSignup() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validUsernames = ["Omaima Sarfaraz", "omaima@gmail.com"];

    if (validUsernames.includes(username) && password === "123@pass") { 
        authenticate();
    } else {
        alert("Invalid login credentials!");
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else if (username && email && password) {
        authenticate(); 
    } else {
        alert("Please fill in all fields!");
    }
}

function authenticate() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
}

const menuItems = document.querySelectorAll('.menu-item');
 
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme =document.querySelector('#theme');
const themeModal= document.querySelector('.customize-theme');

const fontSizes =document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display ='none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
            }                
    })
})
const searchMessage = () => {
    const val =messageSearch.value.toLowerCase();
    message.forEach(chat=>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display ='flex';
        }else{
            chat.style.display ='none';
        }
    })
}


messageSearch.addEventListener('keyup',searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

const openThemeModal = () => {
    themeModal.style.display='grid';
}
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display ='none';
    }
}
themeModal.addEventListener('click',closeThemeModal);
theme.addEventListener('click', openThemeModal);


const removeSizeSelector =() => {
    fontSizes.forEach( size => {
    size.classList.remove('active');
    } )
}

fontSizes.forEach(size =>{
    size.addEventListener('click', () =>{
        removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize ='10px';
           root.style.setProperty('----sticky-top-left','5.4rem');
           root.style.setProperty('----sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize ='13px';
           root.style.setProperty('----sticky-top-left','5.4rem');
           root.style.setProperty('----sticky-top-right','-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize ='16px';
       root.style.setProperty('----sticky-top-left','-2rem');
       root.style.setProperty('----sticky-top-right','-17rem');
    }if(size.classList.contains('font-size-4')){
        fontSize ='19px';
       root.style.setProperty('----sticky-top-left','-5rem');
       root.style.setProperty('----sticky-top-right','-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize ='22px';
       root.style.setProperty('----sticky-top-left','-12rem');
       root.style.setProperty('----sticky-top-right','-35rem');
    }
    document.querySelector('html').style.fontSize=fontSize;
})
})
const changeActiveColorClass =() => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click',() => {
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
        primaryHue = 352;
        }else if(color.classList.contains('color-4')){
        primaryHue = 152;
        }else if(color.classList.contains('color-5')){
        primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);

})
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG =() => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',() => {
   
    darkColorLightness = '0%';
    whiteColorLightness ='100%';
    lightColorLightness ='95%';
    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
   changeBG();
});



Bg2.addEventListener('click',() => {
    darkColorLightness = '95%';
    whiteColorLightness ='20%';
    lightColorLightness ='15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click',() => {
    darkColorLightness = '95%';
    whiteColorLightness ='10%';
    lightColorLightness ='0%';

    Bg3.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle Accept Button
    function handleAccept(button) {
        const request = button.closest('.request'); // Get the closest request block
        const username = getUserName(request);
        alert(`You accepted the friend request from ${username}`);
        request.remove(); // Remove the request block
    }

    // Handle Decline Button
    function handleDecline(button) {
        const request = button.closest('.request'); // Get the closest request block
        const username = getUserName(request);
        alert(`You declined the friend request from ${username}`);
        request.remove(); // Remove the request block
    }

    // Get username from the request block
    function getUserName(request) {
        return request.querySelector('h5').textContent;
    }

    // Attach event listeners
    document.querySelectorAll('.btn-primary').forEach((button) => {
        button.addEventListener('click', () => handleAccept(button));
    });

    document.querySelectorAll('.btn:not(.btn-primary)').forEach((button) => {
        button.addEventListener('click', () => handleDecline(button));
    });
});

document.getElementById('menu-icon').addEventListener('click', function () {
    const popupMenu = document.getElementById('popup-menu');
    popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
});

// Log out function
function logout() {
    window.location.href = "index.html"; // Replace with the actual login page URL
}

// Close the popup if clicked outside
document.addEventListener('click', function (event) {
    const popupMenu = document.getElementById('popup-menu');
    const menuIcon = document.getElementById('menu-icon');
    if (!popupMenu.contains(event.target) && event.target !== menuIcon) {
        popupMenu.style.display = 'none';
    }
});

const postContainer = document.querySelector('.feeds');

    // Open the popup
    document.querySelector('.create-post .btn-primary').addEventListener('click', function () {
        document.getElementById('popup-overlay').style.display = 'block';
    });

    // Handle post submission
    document.getElementById('popup-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values
        const username = document.getElementById('post-username').value;
        const location = document.getElementById('post-location').value;
        const caption = document.getElementById('post-caption').value;
        const imageFile = document.getElementById('post-image').files[0];

        // Validate and read image
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result;

            // Create new post
            const newPost = `
                <div class="feed">
                    <div class="head">
                        <div class="user">
                            <div class="profile-photo">
                                <img src="${imageUrl}" height="50" width="50" alt="${username}">
                            </div>
                            <div class="info">
                                <h3>${username}</h3>
                                <small>${location}</small>
                            </div>
                           
                        </div>
                        <span class="edit">
                            <i class="fa-solid fa-ellipsis"></i>
                        </span>
                    </div>
                    <div class="photo">
                        <img src="${imageUrl}" alt="Post Image">
                    </div>
                    <div class="action-button">
                        <div class="interaction-button">
                            <span><i class="fa-regular fa-heart"></i></span>
                            <span><i class="fa-regular fa-comment-dots"></i></span>
                            <span><i class="fa-solid fa-share-nodes"></i></span> 
                        </div>
                        <div class="bookmark">
                            <span><i class="fa-regular fa-bookmark"></i></span>
                        </div>
                    </div>
                    
                    <div class="caption">
                        <p><b>${username}</b> ${caption}</p>
                    </div>
                
                </div>
            `;

            // Add new post to the top of the feed
            postContainer.insertAdjacentHTML('afterbegin', newPost);

            // Hide the popup
            document.getElementById('popup-overlay').style.display = 'none';

            // Clear form
            document.getElementById('popup-form').reset();
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    });
    // Open the popup
document.querySelector('.create-post .btn-primary').addEventListener('click', function () {
    document.getElementById('popup-overlay').style.display = 'flex';
});

// Close the popup when clicking outside
document.getElementById('popup-overlay').addEventListener('click', function (event) {
    const popup = document.querySelector('.popup');
    if (!popup.contains(event.target)) {
        document.getElementById('popup-overlay').style.display = 'none';
    }
});

// Close the popup after form submission (already in the script above)
document.getElementById('popup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form data and add a new post
    document.getElementById('popup-overlay').style.display = 'none';
});
