function displayNum(num){
    console.log(num);
    result.value+=num;
  }

  function clearBox(){
    result.value="";
  }

  function evaluateExpression(){
    expression=result.value;

    output=eval(expression);
    result.value=output;
  }

  function removeLast(){
    currentItem=result.value;
    result.value=currentItem.slice(0,-1);
  }