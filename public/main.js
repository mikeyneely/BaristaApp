var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
let thumbDown = document.getElementsByClassName("fa-thumbs-down")
// <<<<<<< HEAD
//
// =======
let complete = document.getElementsByClassName("fa-pencil-alt")
// >>>>>>> ff52c0ca368b663fa88c97df5a0c7eeb7f68299e

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// <<<<<<< HEAD
// =======
Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        const  customerName= this.parentNode.parentNode.childNodes[3].innerText
        console.log(customerName)
        const order = this.parentNode.parentNode.childNodes[7].innerText
        console.log(order);
        let user = element.getAttribute("data-id")
        console.log("user: ", user)
        fetch('cafe', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'customerName':customerName,
            'order':order,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// >>>>>>> ff52c0ca368b663fa88c97df5a0c7eeb7f68299e
// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('/thumbDown', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const baristaName = this.parentNode.parentNode.childNodes[3].innerText
        console.log(baristaName)
        const order = this.parentNode.parentNode.childNodes[5].innerText
        const completed = this.parentNode.parentNode.childNodes[15].innerText
        fetch('cafe', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'baristaName': baristaName,
            'order'      : order,
            'completed': completed
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
