// document.addEventListener("DOMContentLoaded", function() {
//     // Code that needs to wait for the HTML to load goes here
//     document.getElementById("chatbot-icon").addEventListener("click", function() {
//         // opens window
//     //   window.open("https://console.dialogflow.com/api-client/demo/embedded/b34043c8-e51e-48f1-b9ca-3730f5b8bc8d", "chatbot-popup", "width=350,height=430");
//     var iframe = document.createElement("iframe");
//     iframe.setAttribute("src", "https://console.dialogflow.com/api-client/demo/embedded/b34043c8-e51e-48f1-b9ca-3730f5b8bc8d");
//     iframe.setAttribute("width", "350");
//     iframe.setAttribute("height", "430");
//     iframe.setAttribute("allow", "microphone;");
//     document.body.appendChild(iframe);
//     });
//   });


document.addEventListener("DOMContentLoaded", function() {
    var chatbotIframe = document.createElement("iframe");
chatbotIframe.setAttribute("id", "chatbot-iframe");
chatbotIframe.setAttribute("src", "https://console.dialogflow.com/api-client/demo/embedded/b34043c8-e51e-48f1-b9ca-3730f5b8bc8d");
chatbotIframe.setAttribute("allow", "microphone;");
chatbotIframe.style.width = "350px";
chatbotIframe.style.height = "430px";
chatbotIframe.style.display = "none";



var chatbotIcon = document.getElementById("chatbot-icon");
var chatbotVisible = false;

chatbotIcon.addEventListener("click", function() {
  if (chatbotVisible) {
    chatbotIframe.style.display = "none";
    chatbotVisible = false;
  } else {
    chatbotIframe.style.display = "block";
    chatbotVisible = true;
  }
});




document.body.appendChild(chatbotIframe);

  });
  