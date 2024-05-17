 let menu = document.querySelector('#menu-btn');
 let header = document.querySelector('.header');
 
 menu.onclick = function(){
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    
 }
 
 window.onscroll = function(){
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    
 }
 


 // JavaScript for toggling chat window   (MIGHT DELETE LATER)
 // JavaScript for toggling chat window   (MIGHT DELETE LATER)
 document.addEventListener('DOMContentLoaded', () => {
   const chatButton = document.getElementById('chatButton');
   const chatPopup = document.getElementById('chatPopup');
   const closeChat = document.getElementById('closeChat');
   const sendButton = document.getElementById('sendButton');
   const userInput = document.getElementById('userInput');
   const chatMessages = document.getElementById('chatMessages');

   chatButton.addEventListener('click', () => {
       chatPopup.style.display = 'block';
   });

   closeChat.addEventListener('click', () => {
       chatPopup.style.display = 'none';
   });

   sendButton.addEventListener('click', () => {
       const userText = userInput.value.trim();
       if (userText !== '') {
           addMessage('User', userText);
           userInput.value = '';
           // Simulate bot response
           setTimeout(() => {
               addMessage('Bot', 'Hello! How can I help you?');
           }, 1000);
       }
   });

   userInput.addEventListener('keydown', (e) => {
       if (e.key === 'Enter') {
           sendButton.click();
       }
   });

   function addMessage(sender, text) {
       const message = document.createElement('div');
       message.classList.add('message');
       message.innerHTML = `<strong>${sender}:</strong> ${text}`;
       chatMessages.appendChild(message);
       chatMessages.scrollTop = chatMessages.scrollHeight;
   }
});

 // JavaScript for toggling chat window   (MIGHT DELETE LATER)
 // JavaScript for toggling chat window   (MIGHT DELETE LATER)