const log = require('@vladmandic/pilogger');

async function ComputeAngle(a,b,c){
    /*
    var o1 = Math.atan((array[7].y - array[5].y) / (array[7].x - array[5].x));
    var o2 = Math.atan((array[11].y - array[5].y) / (array[11].x - array[5].x));
    var ang1 = 180 - (o1-o2) * 180/Math.PI;

    array[11][cordX], array[11][cordY]
    array[13][cordX], array[13][cordY]
    array[15][cordX], array[15][cordY]
    */

    var aa = Math.sqrt(Math.pow(a[0] -c[0],2) + Math.pow(a[1] - c[1],2));
    var bb = Math.sqrt(Math.pow(a[0] -b[0],2) + Math.pow(a[1] - b[1],2));
    var cc = Math.sqrt(Math.pow(b[0] -c[0],2) + Math.pow(b[1] - c[1],2));
  
    temp = (Math.pow(bb,2) + Math.pow(cc,2) - Math.pow(aa,2)) / (2*bb*cc);
    log.info('temp :', temp);
    var ang = Math.acos(temp);
    log.info('ang :', ang);

    ang = ang*(180/Math.PI);
    log.info('angle computation result :', ang);
    
  }

async function main(){

    var dot1 = [453,452];
    var dot2 = [424,333];
    var dot3 = [367,996];

    ComputeAngle(dot1,dot2,dot3);
}


  main();
