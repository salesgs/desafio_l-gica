export const category = (rank)=>{
  
  if(rank<=10)
    return console.log("🏁 ferro");
  else if(rank>=11 && rank<=20)
    return console.log("🏁 bronze");
  else if(rank>=21 && rank<=50)
    return console.log("🏁 Prata");
  else if(rank>=51 && rank<=80)
    return console.log("🏁 Ouro");
  else if(rank>=81 && rank<=90)
    return console.log("🏁 Diamante");
  else if(rank>=91 && rank<=100)
    return console.log("🏁 Lendário");
  else if(rank>=101)
    return console.log("🏁 Imortal");
};