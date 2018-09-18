//This worked when run in html and consol logged. I realize why ajax isn't working properly in a purely js file. Couldn't find the right fix yet.

$.ajax({
  url: 'https://randomuser.me/api/?results=10&inc=gender,name,picture',
  dataType: 'json',
  success: function(data) {
//    console.log(data);
//      console.log(data.results[0].name.first);
//      console.log(data.results[0].name.last);


var friends = [
    
    {
"name": (data.results[0].name.first + " " + data.results[0].name.last),
"photo": (data.results[0].picture.large),
"gender": (data.results[0].gender),
"scores": [
"5",
"1",
"4",
"4",
"5",
"1",
"2",
"5",
"4",
"1"
]
},
    {
"name": (data.results[1].name.first + " " + data.results[1].name.last),
"photo": (data.results[1].picture.large),
"gender": (data.results[1].gender),        
"scores": [
"4",
"2",
"5",
"1",
"3",
"2",
"2",
"1",
"3",
"2"
]
},
    {
"name": (data.results[2].name.first + " " + data.results[2].name.last),
"photo": (data.results[2].picture.large),
"gender": (data.results[2].gender),        
"scores": [
"5",
"2",
"2",
"2",
"4",
"1",
"3",
"2",
"5",
"5"
]
},
    {
"name": (data.results[3].name.first + " " + data.results[3].name.last),
"photo": (data.results[3].picture.large),
"gender": (data.results[3].gender),
"scores": [
"3",
"3",
"4",
"2",
"2",
"1",
"3",
"2",
"2",
"3"
]
},
    {
"name": (data.results[4].name.first + " " + data.results[4].name.last),
"photo": (data.results[4].picture.large),
"gender": (data.results[4].gender),
"scores": [
"4",
"3",
"4",
"1",
"5",
"2",
"5",
"3",
"1",
"4"
]
},
    {
"name": (data.results[5].name.first + " " + data.results[5].name.last),
"photo": (data.results[5].picture.large),
"gender": (data.results[5].gender),
"scores": [
"4",
"4",
"2",
"3",
"2",
"2",
"3",
"2",
"4",
"5"
]
},
    {
"name": (data.results[6].name.first + " " + data.results[6].name.last),
"photo": (data.results[6].picture.large),
"gender": (data.results[6].gender),
"scores": [
"4",
"2",
"4",
"2",
"3",
"2",
"4",
"4",
"2",
"2"
]
},
    {
"name": (data.results[7].name.first + " " + data.results[7].name.last),
"photo": (data.results[7].picture.large),
"gender": (data.results[7].gender),
"scores": [
"5",
"3",
"5",
"3",
"4",
"1",
"3",
"3",
"3",
"3"
]
},
    {
"name": (data.results[8].name.first + " " + data.results[8].name.last),
"photo": (data.results[8].picture.large),
"gender": (data.results[8].gender),
"scores": [
"1",
"5",
"4",
"4",
"4",
"4",
"2",
"2",
"3",
"2"
]
},
 {
"name": (data.results[9].name.first + " " + data.results[9].name.last),
"photo": (data.results[9].picture.large),
"gender": (data.results[9].gender),
"scores": [
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1"
]
} 
]
console.log(friends[0])
}
});