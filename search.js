// *Search 

var arr = [10,20,30,40,50,60,70,80,90,100,200,305]

var find = 200
var isfound = false

for ( var i = 0 ; i <= arr.length ; i++){
    if( arr[i] == find){
        console.log('Data found at index no ' + i)
        isfound = true
        break
    }
}
if(!isfound){
    console.log('Data not found')
}