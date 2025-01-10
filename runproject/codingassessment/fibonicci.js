



function fibonicci(terms) {
var n1=0,n2=1,nextterm=0;
for(var i=1;i<=terms;i++){
  console.log(n1);

  nextterm  = n1+n2;
  n1=n2;
  n2=nextterm;


}
}

fibonicci(10);
