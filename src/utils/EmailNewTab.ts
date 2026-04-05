function EmailNewTab() {
    var emailElem: HTMLElement;
    if(document.getElementById('email-link')) {
        emailElem = document.getElementById("email-link")!;
        emailElem.onclick = function(event) {
            window.open('mailto:magloughlin.zach@gmail.com', 'Mail')
            event.preventDefault();
        }
    }
    else {
        console.log("Could not get #email-link element.");
    }
}

export default EmailNewTab;

// function EmailNewTab() {
//     var th = document.getElementById("email-link");
//     if(th) {
//         th.onclick= function() {
//             th!.setAttribute("mailto", "this");
//             //th!.preventDefault();
//         }
//         var url = th.getAttribute('href')!;
//         window.open(url);
//     }
//     else {
//         console.log("Could not get #email-link element.");
//     }
// }

// export default EmailNewTab;