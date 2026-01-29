//Array Functions


//
function sum(arr){
    let total=0;
    for (const n of arr){
        total+=n;
    }
    return total
}

function average(arr){
    return sum(arr)/arr.length;
}

function min(arr){
let m =arr[0];
for(const n of arr){
    if(n < m) m = n;
}
return m;
}


function max(arr){
let m =arr[0];
for(const n of arr){
    if(n > m) m = n;
}
return m;
}

//String Functions



//Object Practice


