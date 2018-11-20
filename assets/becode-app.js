/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : TheDoudou
Date : 14/11/2018
Contact information : 

What does this script do ? 
...

*/


let div1 = document.createElement('div')
div1.setAttribute('id', 'map1')
div1.setAttribute('style', 'width: 800px; height: 600px')
div1.classList.add('map1')

let div11 = document.createElement('div')
div11.setAttribute('id', 'graph1')
div11.setAttribute('style', 'width: 800px; height: 600px')
div11.classList.add('graph1')


document.getElementById("table1").before(div1)
document.getElementById("table1").before(div11)

var myGeoJSONPath = 'assets/custom.geo.json'

var myCustomStyle = {
    stroke: false,
    fill: true,
    fillColor: '#fff',
    fillOpacity: 1
}

/*
* Convert table to array
*/
function tableToArray(tbl) {
    tbl = document.getElementById(tbl)
    cellValueGetter = function (td) { return td.textContent || td.innerText; };
    let array = []
    let rowCount = 0
    for (rowCount = tbl.rows.length, rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        array.push([])
    }
    for (let rowIndex = 0, tr; rowIndex < rowCount; rowIndex++) {
        let tr = tbl.rows[rowIndex]
        for (let colIndex = 0, colCount = tr.cells.length, offset = 0; colIndex < colCount; colIndex++) {
            let td = tr.cells[colIndex], text = cellValueGetter(td, colIndex, rowIndex, tbl)
            while (array[rowIndex].hasOwnProperty(colIndex + offset)) {
                offset++
            }
            for (let i = 0, colSpan = parseInt(td.colSpan, 10) || 1; i < colSpan; i++) {
                for (let j = 0, rowSpan = parseInt(td.rowSpan, 10) || 1; j < rowSpan; j++) {
                    if (text != ':')
                        array[rowIndex + j][colIndex + offset + i] = text.replace(/\s+/g, '')
                }
            }
        }
    }
    array.shift()
    array.shift()
    return array
}

// populationByDateByCountry
function pBdBc(country, date) {
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open( 'GET', 'https://api.worldbank.org/v2/countries/'+country+'/indicators/SP.POP.TOTL?date='+date+'&format=json', false )
    xmlHttp.send( null )
    let data = JSON.parse(xmlHttp.responseText)
    //console.log(data)
    return data[1][0].value
}

// Draw Map
async function drawMap() {
    let rep = await fetch(myGeoJSONPath)
    let data = await rep.json()

    var map = L.map('map1', {
        center: [55, 10],
        zoom: 3.5,
        //zoomControl: false,
        scrollWheelZoom: false,
        
    })//.setView([55, 10], 3.5)

    L.geoJson(data, {
        clickable: true,
        style: myCustomStyle,
    }).addTo(map)
    
 }

// Draw Grap
function drawGrap1() {

}
 
let dataCountry = []

for (let i = 0; i < 35; i++) {
    dataCountry[i] = []
    for (let j = 0; j < 4; j++) {
        dataCountry[i][j] = []
    }
}


// Retour de l'api population mais trop long à faire en 'live' presque 1min30
dataCountry[0][2] = ["10332785","10376133","10421137","10478617","10547958","10625700","10709973","10796493","10895586","11047744","11128246"]
dataCountry[1][2] = ["7837161","7775327","7716860","7658972","7601022","7545338","7492561","7444443","7395599","7348328","7305888"]
dataCountry[2][2] = ["10196916","10193998","10197101","10211216","10238905","10298828","10384603","10443936","10474410","10496088","10510785"]
dataCountry[3][2] = ["5375931","5390574","5404523","5419432","5437272","5461438","5493621","5523095","5547683","5570572","5591572"]
dataCountry[4][2] = ["82488495","82534176","82516260","82469422","82376451","82266372","82110097","81902307","81776930","80274983","80425823"]
dataCountry[5][2] = ["1379350","1370720","1362550","1354775","1346810","1340680","1337090","1334515","1331475","1327439","1322696"]
dataCountry[6][2] = ["3931947","3996521","4070262","4159914","4273591"]
dataCountry[7][2] = ["10902022","10928070","10955141","10987314","11020362","11048473","11077841","11107017","11121341","11104899","11045011"]
dataCountry[8][2] = ["41431558","42187645","42921895","43653155","44397319","45226803","45954106","46362946","46576897","46742697","46773055"]
dataCountry[9][2] = ["61805267","62244886","62704895","63179351","63621381","64016227","64374989","64707044"]
dataCountry[10][2] = ["4440000","4440000","4439000","4442000","4440000","4436000","4434508","4429078","4417781","4280622","4267558"]
dataCountry[11][2] = ["57059007","57313203","57685327","57969484","58143979","58438310","58826731","59095365","59277417","59379449","59539717"]
dataCountry[12][2] = ["976966","993563","1010410","1027658","1045509","1063712","1081563","1098076","1112607","1124835","1135062"]
dataCountry[13][2] = ["2310173","2287955","2263122","2238799","2218357","2200325","2177322","2141669","2097555","2059709","2034319"]
dataCountry[14][2] = ["3443067","3415213","3377075","3322528","3269909","3231294","3198231","3162916","3097282","3028115","2987773"]
dataCountry[15][2] = ["446175","451630","458095","465158","472637","479993","488650","497783","506953","518347","530946"]
dataCountry[16][2] = ["10158608","10129552","10107146","10087065","10071370","10055780","10038188","10022650","10000023","9971727","9920362"]
dataCountry[17][2] = ["395969","398582","401268","403834","405308","406724","409379","412477","414508","416268","420028"]
dataCountry[18][2] = ["16148929","16225302","16281779","16319868","16346101","16381696","16445593","16530388","16615394","16693074","16754962"]
dataCountry[19][2] = ["8081957","8121423","8171966","8227829","8268641","8295487","8321496","8343323","8363404","8391643","8429991"]
dataCountry[20][2] = ["38230364","38204570","38182222","38165445","38141267","38120560","38125759","38151603","38042794","38063255","38063164"]
dataCountry[21][2] = ["10419631","10458821","10483861","10503330","10522288","10542964","10558177","10568247","10573100","10557560","10514844"]
dataCountry[22][2] = ["21730496","21574326","21451748","21319685","21193760","20882982","20537875","20367487","20246871","20147528","20058035"]
dataCountry[23][2] = ["1994530","1995733","1997012","2000474","2006868","2018122","2021316","2039669","2048583","2052843","2057159"]
dataCountry[24][2] = ["5376912","5373374","5372280","5372807","5373054","5374622","5379233","5386406","5391428","5398384","5407579"]
dataCountry[25][2] = ["5200598","5213014","5228172","5246096","5266268","5288720","5313399","5338871","5363352","5388272","5413971"]
dataCountry[26][2] = ["8924958","8958229","8993531","9029572","9080505","9148092","9219637","9298515","9378126","9449213","9519374"]
dataCountry[27][2] = ["287523","289521","292074","296734","303782","311566","317414","318499","318041","319014","320716"]
dataCountry[28][2] = ["34018","34321","34596","34852","35095","35322","35541","35766","36003","36264","36545"]
dataCountry[29][2] = ["4538159","4564855","4591910","4623291","4660677","4709153","4768212","4828726","4889252","4953088","5018573"]
dataCountry[30][2] = ["7284753","7339001","7389625","7437115","7483934","7551117","7647675","7743831","7824909","7912398","7996861"]
dataCountry[31][2] = ["609828","612267","613353","614261","615025","615875","616969","618294","619428","620079","620601"]
dataCountry[32][2] = ["2048928","2053426","2057047","2060272","2063145","2065458","2067378","2069093","2070739","2072383","2074036"]
dataCountry[33][2] = ["7496522","7480591","7463157","7440769","7411569","7381579","7350222","7320807","7291436","7234099","7199077"]
dataCountry[34][2] = ["65143054","66085803","67007855","67903406","68763405","69597281","70440032","71339185","72326914","73409455","74569867"]

function constructData(data) {
    for (let i = 0; i<data.length; i++) {
        let idc = data[i][0]
        let country = data[i][1]
        
        dataCountry[i][0][0] = idc
        dataCountry[i][0][1] = country

        data[i].shift()
        data[i].shift()
        
        /* // Utilisation pour l'api Population
        let cKey = ''

        if (country == 'Belgique')
            cKey = 'BE'
        else if (country == 'Bulgarie')
            cKey = 'BGR'
        else if (country == 'Rép.tchèque')
            cKey = 'CZE'
        else if (country == 'Danemark')
            cKey = 'DNK'
        else if (country == 'Allemagne')
            cKey = 'DEU'
        else if (country == 'Estonie(¹)')
            cKey = 'EST'
        else if (country == 'Irlande')
            cKey = 'IRL'
        else if (country == 'Grèce(²)')
            cKey = 'GRC'
        else if (country == 'Espagne(³)')
            cKey = 'ESP'
        else if (country == 'France')
            cKey = 'FRA'
        else if (country == 'Croatie')
            cKey = 'HRV'
        else if (country == 'Italie(⁴)')
            cKey = 'ITA'
        else if (country == 'Chypre')
            cKey = 'CYP'
        else if (country == 'Lettonie(⁵)')
            cKey = 'LVA'
        else if (country == 'Lituanie')
            cKey = 'LTU'
        else if (country == 'Luxembourg')
            cKey = 'LUX'
        else if (country == 'Hongrie')
            cKey = 'HUN'
        else if (country == 'Malte')
            cKey = 'MLT'
        else if (country == 'Pays­Bas(⁶)')
            cKey = 'NLD'
        else if (country == 'Autriche')
            cKey = 'AUT'
        else if (country == 'Pologne')
            cKey = 'POL'
        else if (country == 'Portugal')
            cKey = 'PRT'
        else if (country == 'Roumanie')
            cKey = 'ROU'
        else if (country == 'Slovénie')
            cKey = 'SVN'
        else if (country == 'Slovaquie')
            cKey = 'SVK'
        else if (country == 'Finlande(⁷)')
            cKey = 'FIN'
        else if (country == 'Suède')
            cKey = 'SWE'
        else if (country == 'Islande(⁸)')
            cKey = 'ISL'
        else if (country == 'Liechtenstein')
            cKey = 'LIE'
        else if (country == 'Norvège')
            cKey = 'NOR'
        else if (country == 'Suisse(⁷)')
            cKey = 'CHE'
        else if (country == 'Monténégro')
            cKey = 'MNE'
        else if (country == 'ARYdeMacédoine')
            cKey = 'MKD'
        else if (country == 'Serbie')
            cKey = 'SRB'
        else if (country == 'Turquie(⁹)')
            cKey = 'TUR'
        */

        for (let j = 0; j<data[i].length; j++) {
            dataCountry[i][1][j] = data[i][j].replace(/,/g, '')+'00' // Add '"'+ data ... +'"' pour avoir en dur
            dataCountry[i][3][j] = ((dataCountry[i][1][j]/dataCountry[i][2][j])*100).toFixed(2)
        }

        //console.log('dataCountry['+i+'][2] = ['+popCountry+']') // Retour de l'api pour avoir en dur
        
    }
}

drawMap()

constructData(tableToArray('table1'))

console.log(dataCountry)

/*
d3.json(myGeoJSONPath, function(error, map) {
    deleteMap();
    if (error) return console.error(error);
    projection = d3.geo.mercator().center([55,10,3.5]).scale(40000).translate([mapX,mapY]);
    path = d3.geo.path().projection(
        projection
        );
    features = topojson.feature(map, map.objects.country).features;
    d3.select(".svg1").selectAll("path").data(features).enter().append("path").attr("d",path)
    .attr("fill",colorDefault).attr("class","area")
    .on({
        "mouseover": function(d){
            d3.select(this).classed("active", true);
            var x = d3.mouse(this)[0];
            var y = d3.mouse(this)[1];
            mouseInInformation(x,y,d.properties.C_Name)
        },
        "mouseout":  function(){
            d3.select(this).classed("active", false);
            var x = d3.mouse(this)[0];
            var y = d3.mouse(this)[1];
            mouseOutInformation(x,y);
        },

    }).call(zoom);

})
*/


let table2 = tableToArray('table2')


/* 
console.log(table1)

let newDiv1 = document.createElement('div')


let p = document.createElement('div')
p.classList.add('map')

newDiv1.appendChild(p)

document.getElementById("#table1").before(newDiv1)

(function() {
    var center, countries, height, path, projection, scale, svg, width;
    width = 300;
    height = 400;
    center = [5, 70];
    scale = 600;
    projection = d3.geo.mercator().scale(scale).translate([width / 2, 0]).center(center);
    path = d3.geo.path().projection(projection);
    svg = d3.select(".map").append("svg").attr("height", height).attr("width", width);
    countries = svg.append("g");
    d3.json("eu.topojson", function(data) {
      countries.selectAll('.country')
      .data(topojson.feature(data, data.objects.europe).features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', path);
      return;
    });
  }).call(this);
  
*/








/*
* Point 2 Remote data
*/

//let x = d3.scaleTime().range([0, width]);
//let y = d3.scaleLinear().range([-20, 20]);

function make_x_gridlines(x) {		
    return d3.axisBottom(x)
        .ticks(5)
}

function make_y_gridlines(y) {		
    return d3.axisLeft(y)
        .ticks(5)
}

const h1 = document.querySelector('h1')
const b1 = h1.parentNode.insertBefore(document.createElement('input'), h1.nextSibling)
const div3 = h1.parentNode.insertBefore(document.createElement('div'), h1.nextSibling)

b1.setAttribute('id', 'buton1')
b1.classList.add('buton1')
b1.setAttribute('type', 'button')
b1.value = 'Pause'

div3.classList.add('chart3')


let margin = { top: 50, right: 50, bottom: 50, left: 50 }
    , width = 800 - margin.left - margin.right
    , height = 400 - margin.top - margin.bottom

let m = 0
let n = 0
let data = []
let pureData = [] // Only for Y min/max
let minY = 0
let maxY = 0

let svg = d3.select(".chart3").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

let divToolTip3 = d3.select("body").append("div")	
    .attr("class", "tooltip3")				
    .style("opacity", 0);

function loadAPI() {
    fetch('https://inside.becode.org/api/v1/data/random.json').then(req => {
        return req.json()
    }).then(array => {

        for (let i = 0; i < array.length; i++) {
            if (n >= 50) {
                data.shift()
                pureData.shift()
            }
            else
                n++
            /*if (array[i][1] < minY)
                minY = array[i][1]
            if (array[i][1] > maxY)
                maxY = array[i][1]*/
            data.push({'y': array[i][1]})
            pureData.push(array[i][1])
            m++
        }

        maxY = Math.max(...pureData)
        minY = Math.min(...pureData)

        svg.selectAll(".x").remove()
        svg.selectAll(".y").remove()
        svg.selectAll(".line").remove()
        svg.selectAll('.dot').remove()
        svg.selectAll(".grid").remove()
        
        /*
        if (n >= 50) {
            var xScale = d3.scaleLinear()
                .domain([m - n, m - 1])
                .range([0, width])
        } else {
        */
        let xScale = d3.scaleLinear()
                .domain([0, n - 1])
                .range([0, width])
        //}
        
        let yScale = d3.scaleLinear()
            .domain([minY, maxY]) 
            .range([height, 0]) 

        let line = d3.line()
            .x(function (d, i) { return xScale(i); })
            .y(function (d) { return yScale(d.y); })
            .curve(d3.curveMonotoneX)

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale))

        ///*
        svg.append("g")			
            .attr("class", "grid")
            .attr("transform", "translate(0," + height + ")")
            .call(make_x_gridlines(xScale)
                .tickSize(-height)
                .tickFormat(""))
        //*/
        
        svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale))

        ///*
        svg.append("g")			
            .attr("class", "grid")
            .call(make_y_gridlines(yScale)
                .tickSize(-width)
                .tickFormat(""))
        //*/

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line)
            .attr("transform", null)

        svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", function (d, i) { return xScale(i) })
            .attr("cy", function (d) { return yScale(d.y) })
            .attr("r", 4)
            .on("mouseover", function(d, a) {	
                divToolTip3.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                    divToolTip3.html('Value : '+a+'<br>Element : '+m)	
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");	
                })					
            .on("mouseout", function(d) {		
                divToolTip3.transition()		
                    .duration(500)		
                    .style("opacity", 0);	
            })

        return array
    }).catch(err => {
        console.log('Erreur de chargement API : '+err)
    })
}
loadAPI()
let intervalGraph3 = setInterval(loadAPI, 1000)

b1.onclick = function() {
    if (b1.value == 'Pause') {
        clearInterval(intervalGraph3)
        b1.value = 'Play'
    } else if (b1.value == 'Play') {
        intervalGraph3 = setInterval(loadAPI, 1000)
        b1.value = 'Pause'
    }
}