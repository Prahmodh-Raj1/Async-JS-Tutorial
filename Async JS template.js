let ingred={
  fruits:["banana","melon","lemon","vanilla"],
  liquid: ["water","soda","milk"],
  type: ["cone","cube","square"],
  toppings: ["chocolate","Strawberry"]
}

let is_shop_open= false;

let order = (time,work) =>{
  return new Promise((resolve,reject)=>{
    if(is_shop_open){
      setTimeout(()=>{
        resolve(work());
      },time)
      
    }
    else{
      reject(console.log("our shop is closed"));
    }
  })
}

order(2000,()=>console.log(`${ingred.fruits[0]} has been selected`))

.then(()=>{
  return order(0000,()=>console.log("Production has started"));
})

.then(()=>{
  return order(0000,()=>console.log("Fruit has been cut"));
})

.then(()=>{
  return order(0000,()=>console.log(`${ingred.liquid[0]} and ${ingred.liquid[0]} have been selected`));
})

.then(()=>{
  return order(0000,()=>console.log(`Start the machine`))
})

.then(()=>{
  return order(0000,()=>console.log(`${ingred.type[0]} was placed upn this`))
})

.then(()=>{
  return order(3000,()=>console.log(`${ingred.toppings[0]} has been topped upon`))
})

.then(()=>{
  return order(2000,()=>console.log(`Icecream is being served to thy highness`))
})

.catch(()=>{
  console.log("No more customers mate")
})

.finally(()=>{
  console.log("Day has ended mate")
})

let produce =()=>{
  setTimeout(()=>{
    console.log("Production has started");
    setTimeout(()=>{
      console.log("Food is being prepared");
      setTimeout(()=>{
        console.log(`${ingred.liquid[0]} and ${ingred.liquid[1]} was added`);
        setTimeout(()=>{
          console.log("Machine was started");
          setTimeout(()=>{
            console.log(`Type of ${ingred.type[2]} was selected`);
            setTimeout(()=>{
              console.log(`Toppings of ${ingred.toppings[0]} was selected`);
              setTimeout(()=>{
                console.log("Icecream has been done")
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000);
  },0000);
};
//order(0,produce);

let order =()=>{
  return new Promise((resolve,reject)=>{
    if(true){
      resolve();
    }
    else{
      reject();
    }
  })
}


let topping_choice=()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(
        console.log("Which topping would u prefer?")
      )
      
    },3000)
  })
}

async function kitchen(){
  console.log("1");
  console.log("2");
  await topping_choice();
  console.log("3");
}

kitchen();

console.log("Prepping the dishes");
console.log("Taking other orders");


async function order(){
  try{
    await abc;
  }
  catch(error){
    console.log("func doesnt exist",error)
  }
  finally{
    console.log("Job has ended pal")
  }
}

order()
.then(()=>{
  console.log("game over")
})

function time(ms){
  return new Promise((resolve,reject)=>{
    if(is_shop_open){
      setTimeout(resolve,ms); //creating a relationship btwn functions
    }else{
      reject(console.log("shop is closed"));
    }
  })
}

async function kitchen(){
  
  try{
    await time(2000);
    console.log(`${ingred.fruits[0]} has been selected`);
    await time(0000);
    console.log('production has started');
    await time(2000);
    console.log("cutting the fruits");
    await time(1000);
    console.log(`${ingred.liquid[0]} and ${ingred.liquid[1]} has been selected`);
    await time(1000);
    console.log(`${ingred.type[0]} selected`);
    await time(2000);
    console.log(`${ingred.toppings[1]} selected`);
    await time(3000);
    console.log("serve icceream");
  }
  catch(error){
    console.log("Customers depart",error);
  }
  finally{
    console.log("End of time, no more shops exist")
  }
}

kitchen();
