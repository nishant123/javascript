
//To count number of words in a string
let str ="hello world";

function countInstances(string, word) {
   return string.split(word).length - 1;
}
let g=[];
k=0;
for(let i=0;i<str.length;i++) {
    
    if(g.indexOf(str[i])<1){
        
    console.log(str[i]+" count is " +countInstances(str, str[i]));
    g[k] = str[i];
    k++;
    }
}