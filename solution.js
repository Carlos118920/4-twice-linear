function dblLinear(n) {
  var u = [1];
  for(var i = 0; i < n * 5; i++){
      u.push((u[i] * 2) + 1);
      u.push((u[i] * 3) + 1);
  }
  return u.sort(function(a, b){
    return a - b
  }).filter(function(v, i, arr){
    if(arr[i] !== arr[i + 1]){
      return arr[i];
    }
  })[n];
}
