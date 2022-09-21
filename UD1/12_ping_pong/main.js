const { stringify } = require("querystring")

function pingPong() {
    let num = 0;
    while(num<20){
        num++;
        console.log(num,num%10===0?"PONG":num%5===0?"PING":"")
    }
    console.log()
}

pingPong()
// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG