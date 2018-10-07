module.exports = function longestConsecutiveLength(array) {
   // your solution here

  let set = new Set();
  if(!array.length)return 0;
  let result = 1;
  for(let a of array){
    set.add(a);
  }
  for(let a of array){
    let c = 1;
    let l = a-1,r=a+1;
    while(set.has(l)){
      ++c;
      set.delete(l);
      --l;
    }
    while(set.has(r)){
      ++c;
      set.delete(r);
      ++r;
    }
    result = Math.max(c,result);
  }
  return result;
}
