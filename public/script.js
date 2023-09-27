// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   console.log('You clicked me!');
//   fetch('/create-checkout-session', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       items:[
//         { id: 1, quantity: 1 },
//         { id: 2, quantity: 2 }
//       ]
//     })
//   }).then(async(res) => {
//     console.log("Tu toh chalja")
//     if (res.ok) return res.json();
//     return res.json().then((json) => Promise.reject({status: res.status, body: json}));
//   }).then(({url}) => {
//     console.log("Url mila kya? ",url);
//   }).catch((err) => {
//     console.error(err);
//   });
// })