const depthfn = function(object) {
    var level = 1;
    for(var key in object) {
      console.log('key'+ key);
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            var depth = depthfn(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}

const obj = {
    a: 10,
    b: 20,
    c: {
      d: 10,
      e: 20,
      f: [30, 40]
    },
    g: [
      {
        h: 10,
        i: 20,
        n:{
            k:56,
            l:35
        }
      },
      {
        j: 30
      },
      40
    ]
  };
const res=  depthfn(obj);
console.log('result'+res);

