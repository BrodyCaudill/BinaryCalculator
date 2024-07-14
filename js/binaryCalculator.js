function writeit(x){
    document.getElementById('box').innerHTML += x;
}
function clearAll(){
  document.getElementById('box').innerHTML = '';
}

function to10(num){
  let ans = 0;
  let count = 0;
  for(let i = num.length - 1; i >= 0; i--){
      if(num[i] == '1')
          ans += Math.pow(2, count);
      count++
  }
  return ans;
}

function to2(num){
  return(parseInt(num) >>> 0).toString(2);
}

function calculate(){
  const text = document.getElementById('box').innerHTML
  
  let index;
  let op;
  for(let i = 0; i < text.length; i++){
      if(text[i] != '1' && text[i] != '0'){
          op = text[i];
          index = i;
          break;
      }            
  }
  
  let num1 = '';
  for(let i = 0; i < index; i++){
      num1 += text[i];
  }

  let num2 = '';
  for(let i = index + 1; i < text.length; i++){
      num2 += text[i];
  }
  

  let ans;
  switch(op){
      case '+': ans = to10(num1) + to10(num2); break;
      case '-': ans = to10(num1) - to10(num2); break;
      case '*': ans = to10(num1) * to10(num2); break;
      case '/': ans = to10(num1) / to10(num2); break;
  }
  
  document.getElementById('box').innerHTML = to2(ans);
}