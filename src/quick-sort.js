'use strict';
var input= [1,3,4,8,8,1,2,6];
quickSort(input);

function quickSort(input) {
   if (input instanceof Array){
    if(input[0] instanceof Number)
    this.quickSort(input, 0, input.length);
   }else{
       console.log('Please enter array of elements');
   }

};
function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
        
function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
  if(i instanceof Number){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
  }
  else if(i instanceof String){

  }

}
        

module.exports = quickSort;