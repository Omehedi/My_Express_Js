//2 Your First Express Application

const multer = require("multer");




// Your First Express Application

/*amra kivabe ekta application create korbo and run korbo / express toiri korar jonno amader ke prothome express js
 er dependency toiri korte hobe toiri korar jonno amader ke ja korte hobe ta holo / terminale giye likhte hobe   holo     ==> npm install express --save <==     tahole create hoye jabe

application toiri korar jonno amader ke prothoem ja korte hobe holo ta holo require likhte hobe and oi vitore amader
ke express module ta ke boel dite hobe then oi ta ke ekta variabler vitore rekhe dite hobe/ and amra jei express nice
then oita ke abar amra call korbo
* */


// create express js module add
/*let express=require('express')

//create application and call express
app=express()


/*and amder ke app theke ekta get method ke call kore dite hobe/and amra je url dite cai seta bole dite hobe /and
okhane ekta call back function dite hobe / and oi functioner er parenthis er vitore duita parameter dite hobe ekta
holo request and ekta holo response/and response er vitore ekta send() method ke call kore ekta message dilam /
*/
/*app.get("/",function (reqre,res) {
    res.send("Hello Express js ");
});



//create application listen and ekta port dite hobe and ekta call back function dite hobe jemon
app.listen(8000,function () {
    console.log("Server Run Is Success")
});*/
































//3 Express js routing



/*
Express js e routing kora onek sohoj routind korar jonnno alada alada url bole dite hobe and get method ba post method diya o hote pare jemon/ mara shodo get method babahar kore browsare run korte parb karon browser shodo get method ke url hisabe dekhate pare / ar onno method ke dekhate pare nah  / and amra jodi onno method use kori tahole sei out put  dekhar joonno amader ke post man  use korte hobe */
 

/*
// create express js module add
let express=require('express')

//create application and call express
app=express()


and amder ke app theke ekta get method ke call kore dite hobe/and amra je url dite cai seta bole dite hobe /and
okhane ekta call back function dite hobe / and oi functioner er parenthis er vitore duita parameter dite hobe ekta
holo request and ekta holo response/and response er vitore ekta send() method ke call kore ekta message dilam /



app.get("/",function (req,res) {
    res.send("This Is Home Page ");
});



app.get("/About",function (req,res) {
    res.send("This Is About page");
});




app.get("/Contact",function (req,res) {
    res.send("This is Contact page ");
});


app.get("/ForYou",function (reqre,res) {
    res.send("This IS ForYou page");
});



//create application listen and ekta port dite hobe and ekta call back function dite hobe jemon
app.listen(4000,function () {
    console.log("Server Run Is Success 11122")
});
*/































// 5 Understanding Response

// Ekta response er mainly 4 part thake jemon
// 1 : Rreponse Body
// 2 : Response Header
// 3 : Response Status
// 4 : Response Cokies

// Ei gula valo vabe dekhte hole amader ke post man use kore dekhte hobe/ and jei method dekhte cai sei method ta ke select kore dite hobe post man e / and url e bole dite hobe ami kon link dekht cai 


/*
// create express js module
const express = require('express');
const app = express();

// handle GET request for the home page
app.get("/", (req, res) => {
    res.send("This Is Home Page");
});

// handle POST request for the About page
app.post("/About", (req, res) => {
    res.send("This Is About page");
});

// handle PUT request for the Contact page
app.put("/Contact", (req, res) => {
    res.send("This is Contact page");
});

// handle DELETE request for the ForYou page
app.delete("/ForYou", (req, res) => {
    res.send("This IS ForYou page");
});


// create application listen and specify a port
app.listen(3000, function () {
    console.log("Server is run 111 ");
});*/































//  6 Simple String Response


/* jokhon amra string method theke resonse dibo tokhon response method theke send namer method ke call kore dite hobe // and ei sob dekhar jonno amader ke post man app use korte hobe and kon method use korci seita bole dite hboe 

 respnse er abar dui method ase jemon

 1 : send()method ==> respnse er jei send method ase seta muloto body ke follow kore ba nirdesh kore

 2 : end?()method ==> response er jei end method ase tar kaj holo responser jei sesh obostaha ase take nirdesh kore ba prokash kore*/



 /*
// create express js module
let express = require('express');
let app = express();

// handle GET request for the home page
app.get("/one", (req, res) => {
    res.send("This Is Simple string response");
});

// handle POST request for the About page
app.post("/two", (req, res) => {
    res.send("This Is Simple string response");
});



// create application listen and specify a port
app.listen(2000, function () {
    console.log("Server is run ");
});*/
































//  7 Response Status Code

// response status ke maniputlet korar jonno amader ke kisu route create korte hobe / status code ke manipulated korar jonno resonse theke staus namer ekta method ase take call korte hobe/and kon status code ta dite cai seta bole dite hobe/ and response method ta ke shes korar jonno amader ke end namer method ase take call korte hobe/ amra je status code dibo oita amra dekhte pabo post man software / nicher code gula kore amra amader iccha moto status code change kote pari/ but ek ek ta status code mane ekta alda alda ortho prokash kore



/*
// create express js module
let express = require('express');
let app = express();


app.get("/one", (req, res) => {
    res.send("This Is Simple string response");
});


app.post("/two", (req, res) => {
    res.send("This Is Simple string response");
});


//Response status code niya kaj korci amra eikhane
app.get("/three",function(req,res) {
    res.status(401).end("Undefined");
})



// create application listen and specify a port
app.listen(2000, function () {
    console.log("Server is run 10 ");
});

*/






























//  8 JSON Response

// ki vabe amra ekta json response kote pari / json response korar jonno amader ke ja korte hobe ta holo ekta route toiri korte hobe 


//json response niya kaj korar jonno res.json namer ekta method ase take call korte hobe/ json array theke kon array take dite cai sei array take boel dite hobe / and ekta json array er vitore onkgula json object thakte pare jemon/ and amra jei json array create korci take res.json method ke call kore dite hobe/and jei json array amra create korci take oi json method er vitore parameter akare diye dite hboe



/*
// create express js module
let express = require('express');
let app = express();


app.get("/one", (req, res) => {
    res.send("This Is Simple string response");
});


app.post("/two", (req, res) => {
    res.send("This Is Simple string response");
});


//Response status code niya kaj korci amra eikhane
app.get("/three",function(req,res) {
    res.status(401).end("Undefined");
})


//Json response niya kaj korci eikhane amra/
app.get("/four",function(req,res) {
    //create json array
    let MyJSONArray=[
        {
        naem:"Mehedi",
        city:"Bogura",
        mothersname:"Murshida bibi"
    },

    {
        naem:"Mahi",
        city:"Bogura 2nd Bonani",
        mothersname:"Murshida bibi"
    }
] 
// res.json method create and json array ke parameter hisabe call kora hoyece
    res.json(MyJSONArray);
})



// create application listen and specify a port
app.listen(2000, function () {
    console.log("Server is run 11 ");
});

*/































// 9 Response Download

// kivae amra response dowonload korbo ta holo / response download mane holo amra jokhon kono ekta aps ba browser e jai tokhon amder ke ekta pop up dei seita holo muloto response dowonload er maddhome dey/ar ei kaj gula korar jonno amder ke alada alada route create korte hobe jemon


// and eida korar jonno amder ke age akta foldar create korte hobe and oi folder er vitore ekta file create korte hobe and oi file amra ekta pop up dibo ba response dibo/ and oi pop up dibo holo response Dowonload er maddhome/ and response dowonlad korar jonno amader ke res.dowonlad method ta ke call kore dite hobe / and oi method er vitore je fiel ta ke dowonload korate cai sei file er path ta ke bole dite hobe 


// app.get ei gula holo ek ek ta route/ and protita route er alada alada nam dite hobe

/*

// create express js module
let express = require('express');
let app = express();


app.get("/one", (req, res) => {
    res.send("This Is Simple string response");
});


app.post("/two", (req, res) => {
    res.send("This Is Simple string response");
});


//Response status code niya kaj korci amra eikhane
app.get("/three",function(req,res) {
    res.status(401).end("Undefined");
})


//Json response niya kaj korci eikhane amra/
app.get("/four",function(req,res) {

})


//create  dowonlad method and use kora hoyece
app.get("/five",function (req,res) {

    //res.dowonload method() and path bole dite hobe and path dewar jonno amder ke prothome double koteson diye dot slast ./slash ditehobe / and jokoni amader/five e jokhon kono request asbe tokhon ekta dowonlad genarate asbe / and dowonlad response korbe uploads foldarer vitore je file ase take niye asbe/ and amra ekhon jodi request pathay tahole amader ke dowonload er ekta pop up dibe
    res.download("./uploads/abc.jpg");

})



// create application listen and specify a port
app.listen(2000, function () {
    console.log("Server is run 12 ");
});
*/






























//  10 Response Redirect

//response redirect korar jonno amader ke ja ja korte hobe ta holo prothome kisu route banayte hobe/amra duita route banayce ekatr nam dici holo bangladesh arektar nam dici holo india 


// ami bangladesh route e jokon request dibo tokhon oi request redirect hobe and redirect hoye cole jabe holo indiar kase prothome amder request jabe holo bangladesh er kase . bangladesh seta ke abar redirect kore indiar kase pathabe/ and eida korar jonno amara jei route theke request patahabo sekhan theke res.redirect name namer method ta ke call kore dibo / and redirect method er vitore bole dibo kon url ta ke amra redirect korte cacci


//sumarized ===> amra /slash bangladesh diye request dibo / sei request prothome response redirect hobe and india er kase coel jabe /  and amra finaly indiar kas theke amra output pabo



/*

// create express js module
let express = require('express');
let app = express();


app.get("/Bangladesh", (req, res) => {
    //use redirect method /and url ke  bole dewa hoyece redircet method er vitore
    res.redirect("http://localhost:2000/India");
});


app.get("/India", (req, res) => {
    res.send("This Is India");
});



// create application listen and specify a port
app.listen(2000, function () {
    console.log("Server is run 13 ");
});

*/





























//  11 Response Header  ===> ki vabe amra header a data add korbo ?

//response header e amra ja ja kora jay ta holo /response header er vitore amra data rakhte pari / and sei data rakhar jonno amader ekta key rakhte hobe and sei key er undare ekta value rakhte hobe/ headarer vitore key value payer thake 

// Response Header ===> response header a jodi amra vallue rekhe dite chai tahole response theke append namer method take call korte hobe





/*
// create express js module
let express = require('express');
let app = express();


app.get("/Six", (req, res) => {

    res.redirect("Mehedi hasan mim");
});


app.get("/Seven", (req, res) => {

    //create response header and call append method and ekhane ja kisu dibo ta cole jabe holo header e and header e dewar jonno amader ke ekt key and ekta value dite hobe/ and onk gula data amra headare add kore dite parbo and tar jonno amader ke append method ke use korte hobe  

    //append kore dillm ki ki dekhte cai/ and append korte hoel amder ke key and vallue dite hobe 1st holo key and 2nd holo value header a amra eigula dekhte parbo/ eigula dekhte caile amader ke postman software jaite hobe and tahole amra sobkisu dekhte parbo/ and amra niche jei vallue gula dici sei value gula amader header a add hobe

    res.append("name","Mehedi hasan")
    res.append("city","Bogura")
    res.append("collage","TMSS Institue")
    res.append("village","Jangram")


    //create response status code and call/response status code amra ei output pabo

    res.status(201).end("Hello world...")//response er body te amra ei output pabo
});



// create application listen and specify a port
app.listen(2020, function () {
    console.log("Server is run 14 ");
});

*/































// 12 Response Set Cookies ===>

//kivabe amra response cookies niya kaj korbo ta holo/ amra jodi response cookies niya kaj korte hole amader ke just cookies namer ekta method ase just sei method ta ke use korte hobe





/*

// create express js module
let express = require('express');
let app = express();


app.get("/Six", (req, res) => {

    res.redirect("Mehedi hasan mim");
});

//create route
app.get("/Seven", (req, res) => {

    //create response header and call append method and ekhane ja kisu dibo ta cole jabe holo header e and header e dewar jonno amader ke ekt key and ekta value dite hobe/ and onk gula data amra headare add kore dite parbo and tar jonno amader ke append method ke use korte hobe  


    // and amra jei value gula cookie te add krci oi value gula dekhar jonno amader ke browser ke inspact korte hobe and okhan theke amader ke stroge optione jaite hobe tahole amra sob kisu dekhte parbo . ja ja cookie te add korci and amra eita post man diya o dekhte pari

    res.append("name","Mehedi hasan")
    res.append("city","Bogura")
    res.append("collage","TMSS Institue")
    res.append("village","Jangram")


    //create response status code and call/response status code amra ei output pabo

    res.status(201).end("Hello world...")//response er body te amra ei output pabo
});


//create a route and use cookie method  data add korar jonno cookie te / and add key, value/ amra key dibo and key er undare value dibo
app.get("/Eight", (req,res) => {
    res.cookie("name","Mehedi hasan")
    res.cookie("city","Bogura")
    res.cookie("collage","TMSS Institue")
    res.cookie("village","Jangram")
    res.end("Cookie Add Succesful")
})


// create application listen and specify a port
app.listen(2020, function () {
    console.log("Server is run 15 ");
});

*/
































//  13 Response Clear Cookies ===>

// ki vabe cookie theke data clear korte pari ?  cookie te amra jokhon kono data add korbo tokhon kinto cookie te sei data gula theke jabe and sei theke jawaya data gula ke amra ki vabe clecer korbo



/*

// create express js module
let express = require('express');
let app = express();


app.get("/Six", (req, res) => {

    res.redirect("Mehedi hasan mim");
});

//create route
app.get("/Seven", (req, res) => {

    //create response header and call append method and ekhane ja kisu dibo ta cole jabe holo header e and header e dewar jonno amader ke ekt key and ekta value dite hobe/ and onk gula data amra headare add kore dite parbo and tar jonno amader ke append method ke use korte hobe  


    // and amra jei value gula cookie te add krci oi value gula dekhar jonno amader ke browser ke inspact korte hobe and okhan theke amader ke stroge optione jaite hobe tahole amra sob kisu dekhte parbo . ja ja cookie te add korci and amra eita post man diya o dekhte pari

    res.append("name","Mehedi hasan")
    res.append("city","Bogura")
    res.append("collage","TMSS Institue")
    res.append("village","Jangram")


    //create response status code and call/response status code amra ei output pabo

    res.status(201).end("Hello world...")//response er body te amra ei output pabo
});


//create a route and use cookie method  data add korar jonno cookie te / and add key, value/ amra key dibo and key er undare value dibo
app.get("/Eight", (req,res) => {
    res.cookie("name","Mehedi hasan")
    res.cookie("city","Bogura")
    res.cookie("collage","TMSS Institue")
    res.cookie("village","Jangram")
    res.end("Cookie Add Succesful")
})



//create a route and use clecerCookis method because cookie theke data clecer korar jonno / and clecer method ta ke call korte hobe / and ami jei property ke clecer korte cai just sei porperty ke bole dite hobe je ami kon property ke clecer korte cai ekhon nicer data gula clecear hoye jabe/ and amra jodi cai abar cookie add korbo tahole amder ke abar route Eight ke call korte hobe / jodi ami cookie Nine e call kori tahole amader add kora cookie clear hoye jabe / and amra jodi cookie Eight e Call kori tahole amader cookie punuray add hoye jabe
app.get("/Nine", (req,res) => {
    res.clearCookie("name","Mehedi hasan")
    res.clearCookie("city","Bogura")
    res.clearCookie("collage","TMSS Institue")
    res.clearCookie("village","Jangram")
    res.end("Cookie Clecer Succesful")
})

// create application listen and specify a port
app.listen(2020, function () {
    console.log("Server is run 17 ");
});

*/






























//  14 Working With Request ===> 

//ki vabe request handeling korbo / 

/* Request Method gula holo ei gula ===>
1 : Post()
2 : Get()
3 : Put()
4 : Delet()
*/



/* Request Post() 6 ti bisioy holo ===>
1 : Request
2 : Request With URL Parameter
3 : Request Header
4 : Request JSON Body
5 : Request Multipart Form Data
6 : Request File Upload
*/



/* Request get() gula holo ===>
1 : Create Simple Get Request 
2: Simple Get Request With Url Parameter
3 : Catch Request Header Simple Get Method
*/






























//  15 Simple Get Request ===>


/*

let express=require('express');
app=express();


//amra jokhon kono ekta request toiri korbo tokhon amra express er request er je extence create korci oikhan theke app theke request er method ke call korbo tokhon ekta url dite hobe and arekta callback funtion dite hobe oi call back function er vitore abar duita parameter pass korte hobe req,res/ eitar maddhome amra url er query ke handeling korte pari ,request er body,request er header ittadi/and amra jei request ke mannage korte cai take res.sei nam diya likhte hobe

//get request creacte
app.get('/',function(req,res) {
    res.end("This Is Simple Get Request")
})



app.listen(3000,function () {
    console.log("Server is ok 1 ")
})


*/






























//  16 Get Request With URL Query ===>


/*
let express=require('express');
app=express();


// ki vabe amra url er vitore query prameter pass korabo/ request query niye kaja korte hole ja korte hobe ta holo query namer ekta property ase take call korte hobe then kon url er value ta dite chai sei property er name bole dite hobe ei vabe jemon ==>req.query.firstName & req.query lastName<== and take ekta variabler moddhe rekhe dite hobe// ki vabe amra url er moddho diye request query ba parameter pathabo/ and seta ke amra kivae catch korb 


//get request creacte
app.get('/',function(req,res) {
    //create query method
    let firstName= req.query.firstName
    let lastName= req.query.lastName


    //eikhane concat kora hoyece je karone ta holo amar query er nam asce ki na ta dekhar jonno concat kora hoyece
    res.end(firstName + " " + lastName)
})



app.listen(3000,function () {
    console.log("Server is ok 18 ")
})


*/






























//  17 Working With Get Request Header ===>

//Get request er moddhe amra kivabe header porperty niya kaj korte parbo

/*
let express=require('express');
app=express();


// je vabe amra get request header niye kaj korte pari tar jonno amader ke request theke header method ke call korte hobe and amra header er kon poroperty ke dhorte chaci sei property er nam bole dite hobe / firstName diye jodi amra kono request phatay tahole first name er undare jei value thakbe sei value ta kintu assin hoye jabe ba cole asebe and sei value take ekta variable er moddhe rekhe dite hobe/ header methdo use kore just header e data add/ amra firstName and lastNamer undare je value diyece si vallue amra je get method request phatayci okhne jabe and okhan thke res.end()methdo er vitore jabe and okhan thke amra out put dekhate pabo

app.get('/',function(req,res) {
    let firstName=req.header('firstName')
    let lastName=req.header('lastName')

    //response end kora mane hole amar property thik thak kaj korteche ki nah ta dekhar joonn use kroa hoyece
    res.end(firstName + " " + lastName)
})



app.listen(3000,function () {
    console.log("Server is ok 19 ")
})*/






























//  18 Simple Post Request ===>

/* Request Post() 6 ti bisioy holo ===>
1 : Request
2 : Request With URL Parameter
3 : Request Header
4 : Request JSON Body
5 : Request Multipart Form Data
6 : Request File Upload
*/


/*

// simple post request create korte hole amader porthom amader express js er instance create kote hobe / and amra jei method niya kaj korbo oi method ke call korte hobe 



// Express.js er instance create kora hoyece
let express = require('express');
app = express();


// create post method and call / and ei method e dui ta parameter dite hobe ekta holo url path mane je url e ami request ta pathabo, arekta holo callback function and oi callback fuction er abar duita parameter thakbe jemon req,res/ post request browser diya check kora jainah sejonno amader ke post man use korte hobe

app.post('/', function(req, res) {
    res.send("This Is Very Simple Post Request");
});

app.listen(6000, function() {
    console.log("Server Is Ok 20");
});

*/






























// 19 Post Request With URL Query ===>

// post request er maddhome amra kivae url parameter niya kaj korte pari / and amra kivabe header niya kaj korte pari / amra jodi 


/*

// Express.js er instance create kora hoyece
let express = require('express');
app = express();

// create post method and call / and ei method e dui ta parameter dite hobe ekta holo url path mane je url e ami request ta pathabo, arekta holo callback function and oi callback function er abar duita parameter thakbe jemon req, res/ post request browser diya check kora jainah sejonno amader ke post man use korte hobe/ amader calback je function ase okhan theke req.dot query likhte hobe and call korte hobe/ and je name pathayte ce sei nam dibo/ and amra query er vitore duita url dibo ekta holo firstName and ekta holo lastName and take ekta variable er moddhe rekhe dite hobe and sei value gula catch hobe

// and amra output dekhte holoe amader ke prothome post mane jaite hobe and localhost dite hobe and jei port dici sei port dite hobe/and amra jokhon parameter pathabo tokhon amader ke ei vabe dite hobe     ===>http://localhost:6000?firstName=mahin&lastName=babu<=== prothome http:// dite hobe and port numbar dite jei port numbar diya amra listen korayci and tar por ?what symbol and tarpor property and tarpor oi propertyr value & ei ta dite hobe and last property dite hobe and oi last property er value dite hobe 

app.post('/', function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName + " " + lastName);
});

app.listen(6000, function() {
    console.log("Server Is Ok 211");
});

*/




























//  20 Post Request With Header Properties ===>

// kivabe amra header property niya kaj  korte pari / 






/*


// Express.js er instance create kora hoyece
let express = require('express');
app = express();

// header method niya kaj korte hole req parameter theke header namer method ke call korte hobe and header er je property take dhorte chacci sei property er nam bole dite hobe header namer method ta ke call korte hobe / and amra run korbo postman e giye header a giye kisu content add kore dibo/ and amra ei khane je property dici oi name amader ke post man e dhorte hoe property gula ke / amra ki vabe header er vitore request dibo and sei gulake ki vabe catch korbo 
app.post('/', function(req, res) {

    let userName = req.header("userName");
    let password = req.header("password");

    res.send("User Name: "+ userName + " password "+password);
});

app.listen(6000, function() {
    console.log("Server Is Ok 22");
});


*/




























/*

//  21 Post application-json

// post request er vitore amra kivabe json body ke manage korte pari/ json body ke manage korar jonno amader ke prothome applicationer vitore body parpaser node package ke install kore nite hobe then amader app er vitore body parser theke json ke babohar korbo tokhoni request parameter theke body property ke call korbo tokhon body te jodi kono json post kora hoi tokhon sei json ta amra post mane dekhte pabo/ and amder ke khali body parser korte hobe / 



//express js require kora hoyece
let express = require('express');

// body parser kora hoyece
let bodyParser = require('body-parser');


// express js instance create kora hoye ce/ and amra app.use() method babohar korbo and bodyparser theke (bodyParse.json)amra json ke use korbo 
let app = express();
// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());



//ekta post method use kora hoyece/ and post method er vitore duita parameter thakbe ekta holo url , arekta holo callback function/ and ei gula korar jonno amader ke body parser npm install dite hobe /and req.body ke call korle amra  body te je  json data dici ta dekhte parbo and data dekhar jonno amader ke json. stringfy namer ekta method ase take call korte hobe 

app.post('/', function (req, res) {
    let JSONData = req.body;

     //json.stringfy method ke call kore JSON.data ke method er vitore dite hobe and take holod kore rakhar jonno amader ke ekta variable er moddhe rekhe dite hobe / and okhan theke amra ekta json string paye jabo
     let JSONString=JSON.stringify(JSONData);

     //and out put dekher jonno amader ke res.send method ke call kore oi variable nam dite hobe jei variable amar json.stringfy method ke holo korce/ and amader output dekhar jonno amaderke post man use korte hoebe and amra kon mood er data dekhte cai setake specifek kore dite hobe ba bole dite hobe. eita korar jonno amader ke body te giye raw ke select korte hobe 

    // Send the JSON string as the response
    res.send(JSONString);
});

app.listen(6000, function () {
    console.log("Server Is Ok 23");
});



*/


























/*


//  22 Working With Multipart Form Data

// amra kivabe multipale form data ke handle korte pari / jodi amader server side multiple data ase tahole amra kivabe form data ke ki vabe mannage korbo / data ke manage korar jonno amader ke multer name ekta method ase take call korte hobe / multar namer je node package ase take use kore amra amader server e multiple form data je gula post hobe take  manage korbo / and  finaly amader ke multar npm install korte hobe and eita install korar niyoum holo   ===>npm install --save multer<=== eita likhlei amader multarer jei package sita isnstall hoye jabe / and amra multar diya data manage korar jonno amader ke prothome multar ke import kore nite hobe and pore multarer ekta instance toiri korte hobe/and amader jei app thakbe tar vitore amra multer theke array ke babohar korbo/ and amader jei express ase sekhan theke amra static method ke call kore public parameter e diye dibo 


let express = require('express');

//multar ke prothome import kora hoyece
let multer = require('multer');

// and tar por multar er ekta instance create toiri korbo
let multer=multer();

// and amader je app toiri kora ase okhane amr app.use korbo / and app er moddhe jake use korb take call kore dibo jemon ami diyeci multer.array ke call kore diye ci / and amra app express theke dot. diye static property ke babohar korte pari and jar vitore amader parameter jabe holo public
let app = express();
app.use(multer.array())

app.use(express.static('public'))


 
app.post('/',function (req,res) {

    //and amra amader request theke body ke call kore dibo and amra body thke ekta json data pabo / and amra ekhan theke amra jei data pabo seta res.end method er vitore call kore diyeci
    let JSONData = req.body;

    //json stringfy kore JSONData ke oi method er vitore diye dillam/ and ei gula amra form akare data sent korbo
    res.send(JSON.stringify(JSONData))
});




app.listen(8000,function () {
    console.log("Server Is Run Ok 24");
});



*/



























/*


//  23 File Upload

// multer diya amra kivabe file upload korte pari ? multer diya file upload korte hole amader ke prothome multer ke require kore nite hobe / and oi multer thke diskStorage namer ekta method ase take call korte hobe / and oi disk storage method  theke duita object jabe ekat holo destinession arekta holo file name / abar oi destinesion property er moddhe abar ekta call back function ase and oi call back functioner vitore tinta parameter ase ta holo req,filename , callback/ file name er vitore oi ekhi khahini thakebe destiniton er motto / and callbacek er prothom parameter hobe holo nan and 2nd parameter thakbe holo filer er original nam ba path / and finaly amra je multer diya storage create korci sei storage ke amra ekhane initial korbo/ jokhon amra post method er moddhe kono file ke pathabo tokhon amra je upload niyeci multer diye take pas kore dibo 


let express=require('express')

//multer import
let multer=require('multer');

let app = express();

//multer diya ekta storage toiri korbo and oi multer theke diskStorage create korbo/and tar vitore ekta object jabe and oi property er nam hobe holo destination and tar vitore ekta callback function hobe and oi callback functitoner vitore tinta parameter thakbe jemon req,res,callback / and amra je callback parameter dici tar vitore abar dite hobe holo duita parametr ekta holo (nul './uplods')


// multer diye amra ekta storage toiri korbo and multer theke amra diskStorage ke call kore dibo. and tar vitore ekta object jabe and oi object property er nam hobe holo destination and er vitore ekta callBack function jabe and tar vitore thakbe req,file,callback ..and callback parameter theke amra call back parameter ke call kore dibo and prothom parameter hobe holo nun, and 2nd parameter holo file er path
let storage=multer.dsiskStorage( {
    destination:function (req,file,callBack) {
        callBack(null, './upload123')
    },
    //and second parameter holo filename/ and er vitor oporer moto same ekta callback function jabe/ and tar por file.file er original nam dile file ta upload hoye jabe
    filename:function  (req,file,callBack) {
        callBack(null, file.originalname);
    }
}) 


//stroge theke amra ekta upload toiri kore nibo/and upload toiri korar jonno amader ke abaro multr ke call kore dibo/ and amra jei object stroge toiri koreci take diye dibo

const upload = multer({ storage: storage }).single('myfile');



// and amra post method theke amra ekta post method toiri korbo/and post method er vitore abar duita parameter thakbe prothom parameter holo file er path / and pore ekta call back parameter thakbe and dui parameter jabe ekta holo req,res// and amra req er vitore fiel take upload kore dibo and ei upload er vitore tita parameter thakbe ekta holo req,res,and arekta callback function thakbe seta holo error parameter
app.post('/',function (req,res) {
    upload(req,res,function(error) {
        if(error){
            res.send("File Upload Fail");
        }
        else{
            res.send("File upload Success")
        }
    })
});



app.listen(6000,function () {
    console.log("Server Run Success 25");
})




*/




























//  24 Middleware

// Middleware holo kisu code je code gula function akare , class akare , statement akare thakte pare and seta req,res er moddhe execute hobe 


// Requst er pore kintu response er age je code gula execute hobe take midleware bole  / mane majhkhane je code gula execute hobe take midleware bole


/* Middleware Placing abar dui dhorener hoye thake jemon

 1 : Application Level ==> Ekta middleware sob gula response er jonno kaj kore tokhon seta ke bole application lavel/ ba ekta class pura application er response er jonno kaj kore /


 2 : Route Level ==> alada alada routing er jonno ba alada alada inpoint er jonno middleware execute hoi tahole take route leverl bole 

 */ 



























/*


 //  25 Application Middleware


//Middleware puro application er jonno kaj kore

 // application meddleware holo emon ekti midddleware . je middleware ta puro application er moddhe joto gula request response thakbe sob gula ke execute thakbe


 // create express js project 

 let express=require('express')
 let app=express();


 //create use function/and use function er vitore ekta callback function thakbe/ and tar vitore req,res parameter thakbe and just otirikto ekta parametr thakbe sei parametar ta holo next parameter jemon


 //next parameter mane holo / server e prothome ekta request ase and asar por middleware execute hoi and next hoye server e response hoi / ei jonno ei parameter ke next parameter bole

 app.use(function (req,res,next) {

    console.log("This Application Is Middleware");
    //Use next parametr/Prothome request asbe tarpor middleware next hobe and response e jabe ei joono ei parameter ke next() parametr bole 
    next();
 })


 app.get('/',function (req,res) {
    res.send("This Is Home Page")
 })




 app.get('/contact',function (req,res) {
    res.send("This Is Contact Page")
 })




 app.get('/about',function (req,res) {
    res.send("This Is About Page")  
 })



 app.listen(8000, function() {
    console.log("Server Is Run SuccessFul");
 })



 */






























 //  26 Route Middleware



 // Route Specifik Level middleware/specifik mane holo ekta route er jonno ekta middleware execute hobe/ route middleware mane holo ami je route er jonno middleware korci just shudho oi route e kaj korbe / 



 
 // create express js project 

 let express=require('express')
 let app=express();


 //create use function/and use function er vitore ekta callback function thakbe/ and tar vitore req,res parameter thakbe and just otirikto ekta parametr thakbe sei parametar ta holo next parameter jemon


 //next parameter mane holo / server e prothome ekta request ase and asar por middleware execute hoi and next hoye server e response hoi / ei jonno ei parameter ke next parameter bole




 app.get('/',function (req,res) {
    res.send("This Is Home Page")
 })




 app.get('/contact',function (req,res) {
    res.send("This Is Contact Page")
 })



 //about er jonno ekta middleware create kora holo/and amader ke prothome app.use ke call kore amader ke path bole didte hobe and ekta callback function thakbe and or vitore req,res,and next() ei tinta parameter add hobe/ eita mane holo je jokhon shudhu about call hobe tokhon shudo I Am About Middleware execute hobe 
 app.use('/about',function (req,res,next) {

    console.log("This Application Is Middleware");
    //Use next parametr/Prothome request asbe tarpor middleware next hobe and response e jabe ei joono ei parameter ke next() parametr bole 
    next();
 })


 app.get('/about',function (req,res) {
    res.send("This Is About Page")  
 })



 app.listen(9000, function() {
    console.log("Server Is Run SuccessFul");
 })