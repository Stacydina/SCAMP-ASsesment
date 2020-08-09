var i;
var Arr = [0,1];  //Array created with first two elements

// loop within range to realize sequence
for (i=2; i<=10; i++) {
    Arr [i]= Arr[i - 2] + Arr[i - 1];
    

}
    console.log(Arr);