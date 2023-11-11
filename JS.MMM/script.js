let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];

  let user = users.find(item => item.id == 2)
  
  console.log(user.name);
  
  //dop hw:
  
  let filteer = users.filter(item => item.id > 1 )
//   if(id > 1){
      console.log(filteer);
     
// }
