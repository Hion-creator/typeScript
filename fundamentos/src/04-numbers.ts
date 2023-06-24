(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log("productPrice", productPrice);

  let customerAge: number = 20;
  //customerAge = customerAge + "1";//281
  customerAge = customerAge + 1;//21
  console.log("customerAge", customerAge);

  let productInStock: number;
  console.log("productInStock", productInStock);
  if(productInStock>10){
    console.log("is greater");
  }

  let discount = parseInt("123");
  console.log("discount", discount);
  if(discount <= 200){
    console.log("apply");
  }else{
    console.log("not apply");
  }

  let hex = 0xf00d;
  console.log("hex", hex);
  let binary = 0b1010;
  console.log("binary", binary);

  const nyNumber: number = 123;//tipo de dato number en miniscula ya que en mayuscula es otra cosa en javascript
})();

