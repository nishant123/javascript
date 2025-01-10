
function ballset(n,k,arr){

    // let arr = [];
    // for(var j=0;j<n;j++) {
    //     arr[j]= Math.floor(Math.random() * 10);
    // }
    console.log('array'+arr);
    let marr = [];
    let largeno ;
    for (var a=0;a<arr.length;a++){

        if(arr[a]<largeno) {
largeno = arr[a+1];
        }else{
largeno =arr[a];
        }
        
     
    }
    console.log('largeno'+largeno);

        for (var m=0;m<n;m++){
            for (var l=0;l<n;l++){
            marr[m]=arr[i];   
            }     
        }
        console.log('marr'+marr);
    

}
//let arr = [1, 1, 1, 2, 1];
let arr = [1, 1, 1, 2];
const sets= ballset(4,3,arr);