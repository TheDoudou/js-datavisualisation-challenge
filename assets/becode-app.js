/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : TheDoudou
Date : 14/11/2018
Contact information : 

What does this script do ? 
...

*/

// Div pour la map
//*
let div1 = document.createElement('div')
div1.setAttribute('id', 'map1')
div1.setAttribute('style', 'width: 800px; height: 600px')
div1.classList.add('map1')
//*/

// Div pour le graph
//*
let div11 = document.createElement('div')
div11.setAttribute('id', 'div1')
div11.setAttribute('style', 'width: 800px; height: 700px')
div11.classList.add('div1')
//*/

//document.getElementById("table1").before(div1)
document.getElementById("table1").before(div11)

let myGeoJSONPath = 'assets/custom.geo.json' // Load json with list country (but not two : Malte, Liechtenstein)


let myCustomStyle = {
    stroke: false,
    fill: true,
    fillColor: '#fff',
    fillOpacity: 1
}

/*
* Convert table to array
*/
//*
function tableToArray(tbl) {
    tbl = document.getElementById(tbl)
    cellValueGetter = function (td) { return td.textContent || td.innerText }
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
//*/

// population By Date By Country, too slow for live use
/*
function pBdBc(country, date) {
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open( 'GET', 'https://api.worldbank.org/v2/countries/'+country+'/indicators/SP.POP.TOTL?date='+date+'&format=json', false )
    xmlHttp.send( null )
    let data = JSON.parse(xmlHttp.responseText)
    //console.log(data)
    return data[1][0].value
}
*/

// Draw Map with leaflet not fan remake this
async function drawMap() {
    let rep = await fetch(myGeoJSONPath)
    let data = await rep.json()

    let map = L.map('map1', {
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

let dataCountry1 = []

for (let i = 0; i < 35; i++) {
    dataCountry1[i] = []
    for (let j = 0; j < 4; j++) {
        dataCountry1[i][j] = []
    }
}


// Retour de l'api population mais trop long à faire en 'live' presque 1min30
dataCountry1[0][2] = ["10332785", "10376133", "10421137", "10478617", "10547958", "10625700", "10709973", "10796493", "10895586", "11047744", "11128246"]
dataCountry1[1][2] = ["7837161", "7775327", "7716860", "7658972", "7601022", "7545338", "7492561", "7444443", "7395599", "7348328", "7305888"]
dataCountry1[2][2] = ["10196916", "10193998", "10197101", "10211216", "10238905", "10298828", "10384603", "10443936", "10474410", "10496088", "10510785"]
dataCountry1[3][2] = ["5375931", "5390574", "5404523", "5419432", "5437272", "5461438", "5493621", "5523095", "5547683", "5570572", "5591572"]
dataCountry1[4][2] = ["82488495", "82534176", "82516260", "82469422", "82376451", "82266372", "82110097", "81902307", "81776930", "80274983", "80425823"]
dataCountry1[5][2] = ["1379350", "1370720", "1362550", "1354775", "1346810", "1340680", "1337090", "1334515", "1331475", "1327439", "1322696"]
dataCountry1[6][2] = ["3931947", "3996521", "4070262", "4159914", "4273591"]
dataCountry1[7][2] = ["10902022", "10928070", "10955141", "10987314", "11020362", "11048473", "11077841", "11107017", "11121341", "11104899", "11045011"]
dataCountry1[8][2] = ["41431558", "42187645", "42921895", "43653155", "44397319", "45226803", "45954106", "46362946", "46576897", "46742697", "46773055"]
dataCountry1[9][2] = ["61805267", "62244886", "62704895", "63179351", "63621381", "64016227", "64374989", "64707044"]
dataCountry1[10][2] = ["4440000", "4440000", "4439000", "4442000", "4440000", "4436000", "4434508", "4429078", "4417781", "4280622", "4267558"]
dataCountry1[11][2] = ["57059007", "57313203", "57685327", "57969484", "58143979", "58438310", "58826731", "59095365", "59277417", "59379449", "59539717"]
dataCountry1[12][2] = ["976966", "993563", "1010410", "1027658", "1045509", "1063712", "1081563", "1098076", "1112607", "1124835", "1135062"]
dataCountry1[13][2] = ["2310173", "2287955", "2263122", "2238799", "2218357", "2200325", "2177322", "2141669", "2097555", "2059709", "2034319"]
dataCountry1[14][2] = ["3443067", "3415213", "3377075", "3322528", "3269909", "3231294", "3198231", "3162916", "3097282", "3028115", "2987773"]
dataCountry1[15][2] = ["446175", "451630", "458095", "465158", "472637", "479993", "488650", "497783", "506953", "518347", "530946"]
dataCountry1[16][2] = ["10158608", "10129552", "10107146", "10087065", "10071370", "10055780", "10038188", "10022650", "10000023", "9971727", "9920362"]
dataCountry1[17][2] = ["395969", "398582", "401268", "403834", "405308", "406724", "409379", "412477", "414508", "416268", "420028"]
dataCountry1[18][2] = ["16148929", "16225302", "16281779", "16319868", "16346101", "16381696", "16445593", "16530388", "16615394", "16693074", "16754962"]
dataCountry1[19][2] = ["8081957", "8121423", "8171966", "8227829", "8268641", "8295487", "8321496", "8343323", "8363404", "8391643", "8429991"]
dataCountry1[20][2] = ["38230364", "38204570", "38182222", "38165445", "38141267", "38120560", "38125759", "38151603", "38042794", "38063255", "38063164"]
dataCountry1[21][2] = ["10419631", "10458821", "10483861", "10503330", "10522288", "10542964", "10558177", "10568247", "10573100", "10557560", "10514844"]
dataCountry1[22][2] = ["21730496", "21574326", "21451748", "21319685", "21193760", "20882982", "20537875", "20367487", "20246871", "20147528", "20058035"]
dataCountry1[23][2] = ["1994530", "1995733", "1997012", "2000474", "2006868", "2018122", "2021316", "2039669", "2048583", "2052843", "2057159"]
dataCountry1[24][2] = ["5376912", "5373374", "5372280", "5372807", "5373054", "5374622", "5379233", "5386406", "5391428", "5398384", "5407579"]
dataCountry1[25][2] = ["5200598", "5213014", "5228172", "5246096", "5266268", "5288720", "5313399", "5338871", "5363352", "5388272", "5413971"]
dataCountry1[26][2] = ["8924958", "8958229", "8993531", "9029572", "9080505", "9148092", "9219637", "9298515", "9378126", "9449213", "9519374"]
dataCountry1[27][2] = ["287523", "289521", "292074", "296734", "303782", "311566", "317414", "318499", "318041", "319014", "320716"]
dataCountry1[28][2] = ["34018", "34321", "34596", "34852", "35095", "35322", "35541", "35766", "36003", "36264", "36545"]
dataCountry1[29][2] = ["4538159", "4564855", "4591910", "4623291", "4660677", "4709153", "4768212", "4828726", "4889252", "4953088", "5018573"]
dataCountry1[30][2] = ["7284753", "7339001", "7389625", "7437115", "7483934", "7551117", "7647675", "7743831", "7824909", "7912398", "7996861"]
dataCountry1[31][2] = ["609828", "612267", "613353", "614261", "615025", "615875", "616969", "618294", "619428", "620079", "620601"]
dataCountry1[32][2] = ["2048928", "2053426", "2057047", "2060272", "2063145", "2065458", "2067378", "2069093", "2070739", "2072383", "2074036"]
dataCountry1[33][2] = ["7496522", "7480591", "7463157", "7440769", "7411569", "7381579", "7350222", "7320807", "7291436", "7234099", "7199077"]
dataCountry1[34][2] = ["65143054", "66085803", "67007855", "67903406", "68763405", "69597281", "70440032", "71339185", "72326914", "73409455", "74569867"]

function constructData(data) {
    for (let i = 0; i < data.length; i++) {
        let idc = data[i][0]
        let country = data[i][1]

        dataCountry1[i][0][0] = idc
        dataCountry1[i][0][1] = country

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

        for (let j = 0; j < data[i].length; j++) {
            dataCountry1[i][1][j] = data[i][j].replace(/,/g, '') + '00' // Add '"'+ data ... +'"' pour avoir en dur
            dataCountry1[i][3][j] = ((dataCountry1[i][1][j] / dataCountry1[i][2][j]) * 100).toFixed(2)
        }

        //console.log('dataCountry['+i+'][2] = ['+popCountry+']') // Retour de l'api pour avoir en dur

    }
}

function arrayToJson(data) {
    let retour = '['
    for (let i = 0; i < data.length; i++) {
        retour += '{"name": "' + data[i][0][1] + '", "values": ['
        for (let j = 0; j < data[i][3].length; j++) {
            if (j == data[i][3].length - 1)
                retour += '{ "date": "' + (2002 + j) + '", "percent": "' + data[i][3][j] + '", "pop": "' + data[i][2][j] + '", "crime": "' + data[i][1][j] + '" }'
            else
                retour += '{ "date": "' + (2002 + j) + '", "percent": "' + data[i][3][j] + '", "pop": "' + data[i][2][j] + '", "crime": "' + data[i][1][j] + '" }, '
        }
        if (i == data.length - 1)
            retour += ' ]}'
        else
            retour += ' ]},'
    }
    retour += ' ]'
    return JSON.parse(retour)
}

function drawChecker(data, i) {

        let check
        let txt
        let arrayDraw = []

        for (let i = 0; i < data.length; i++) {
            if (i == 9 || i == 18 || i == 27)
                check = d3.select(".div1").append('div')
            check = d3.select(".div1").append('input')
            check.attr("type", "checkbox")
            check.attr("class", "checkbox"+i)
            check.attr("name", data[i][0][1])
            check.attr("value", data[i][0][1])
            check.on("click", function() {
                if(d3.select(".checkbox"+i).property("checked")) {
                    for (let j = 0; j <dataCountry1.length; j++) {
                        if (dataCountry1[j][0][1] == d3.select(".checkbox"+i)._groups[0][0].defaultValue)
                            arrayDraw.push(dataCountry1[j])
                    }
                    //console.log (d3.select(".checkbox"+i)._groups[0][0].defaultValue)
                } else {
                    for (let j = 0; j <arrayDraw.length; j++) {
                        if (arrayDraw[j][0][1] == d3.select(".checkbox"+i)._groups[0][0].defaultValue)
                            arrayDraw.splice(j, 1)
                    }
                }
                d3.select(".graph1").remove()
                drawChart1(arrayToJson(arrayDraw))
            })

            txt = d3.select(".div1").append('span')
            txt.text(data[i][0][1]+' ')
        }
}

function drawChart1(data) {
    let width = 700
    let height = 500
    let margin = 50
    let duration = 250

    let lineOpacity = "0.25"
    let lineOpacityHover = "0.85"
    let otherLinesOpacityHover = "0.1"
    let lineStroke = "3px"
    let lineStrokeHover = "3.5px"

    let circleOpacity = "0.85"
    let circleOpacityOnLineHover = "0.25"
    let circleRadius = 5
    let circleRadiusHover = 8

    let parseDate = d3.timeParse("%Y")
    data.forEach(function (d) {
        d.values.forEach(function (d) {
            d.date = parseDate(d.date)
            d.percent = +d.percent
        })
    })

    let xScale = d3.scaleTime()
        .domain(d3.extent(data[0].values, d => d.date))
        .range([0, width - margin])

    let maxY = 0
    for (let y = 0; y < data.length; y++) {
        if (d3.max(data[y].values, d => d.percent) > maxY)
            maxY = d3.max(data[y].values, d => d.percent)
    }
    
    
    let yScale = d3.scaleLinear()
        .domain([0, maxY])
        .range([height - margin, 0])

    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let svg = d3.select(".div1").append("svg")
        .attr("width", (width + margin) + "px")
        .attr("height", (height + margin) + "px")
        .attr("class", "graph1")
        .append('g') 
        .attr("transform", `translate(${margin}, ${margin})`);

    let line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.percent))
        .curve(d3.curveMonotoneX)

    let lines = svg.append('g')
        .attr('class', 'lines')

    lines.selectAll('.line-group')
        .data(data).enter()
        .append('g')
        .attr('class', 'line-group')
        .on("mouseover", function (d, i) {
            svg.append("text")
                .attr("class", "title-text")
                .style("fill", color(i))
                .text(d.name)
                .attr("text-anchor", "middle")
                .attr("x", (width - margin) / 2)
                .attr("y", 5);
        })
        .on("mouseout", function (d) {
            svg.select(".title-text").remove()
        })
        .append('path')
        .attr('class', 'line')
        .attr('d', d => line(d.values))
        .style('stroke', (d, i) => color(i))
        .style('opacity', lineOpacity)
        .on("mouseover", function (d) {
            d3.selectAll('.line')
                .style('opacity', otherLinesOpacityHover)
            d3.selectAll('.circle')
                .style('opacity', circleOpacityOnLineHover)
            d3.select(this)
                .style('opacity', lineOpacityHover)
                .style("stroke-width", lineStrokeHover)
                .style("cursor", "pointer")
        })
        .on("mouseout", function (d) {
            d3.selectAll(".line")
                .style('opacity', lineOpacity)
            d3.selectAll('.circle')
                .style('opacity', circleOpacity)
            d3.select(this)
                .style("stroke-width", lineStroke)
                .style("cursor", "none")
        })

    lines.selectAll("circle-group")
        .data(data).enter()
        .append("g")
        .style("fill", (d, i) => color(i))
        .selectAll("circle")
        .data(d => d.values).enter()
        .append("g")
        .attr("class", "circle")
        .on("mouseover", function (d) {
            d3.select(this)
                .style("cursor", "pointer")
                .append('svg:text')
                .attr('x', d => xScale(d.date) + 5)
                .attr('y', d => yScale(d.percent) - 10)
                .attr('class', 'text')
                .append('svg:tspan')
                .attr('x', d => xScale(d.date) + 5)
                .attr('y', d => yScale(d.percent) - 50)
                .text(function(d) { return 'Pourcentage : '+d.percent; })
                .append('svg:tspan')
                .attr('x', d => xScale(d.date) + 5)
                .attr('y', d => yScale(d.percent) - 35)
                .text(function(d) { return 'Population : '+d.pop; })
                .append('svg:tspan')
                .attr('x', d => xScale(d.date) + 5)
                .attr('y', d => yScale(d.percent) - 20) 
                .text(function(d) { return 'Crimes : '+d.crime; })
        })
        .on("mouseout", function (d) {
            d3.select(this)
                .style("cursor", "none")
                .transition()
                .duration(duration)
                .selectAll(".text").remove()
        })
        .append("circle")
        .attr("cx", d => xScale(d.date))
        .attr("cy", d => yScale(d.percent))
        .attr("r", circleRadius)
        .style('opacity', circleOpacity)
        .on("mouseover", function (d) {
            d3.select(this)
                .transition()
                .duration(duration)
                .attr("r", circleRadiusHover)
        })
        .on("mouseout", function (d) {
            d3.select(this)
                .transition()
                .duration(duration)
                .attr("r", circleRadius)
        })

    let xAxis = d3.axisBottom(xScale).ticks(5)
    let yAxis = d3.axisLeft(yScale).ticks(5)

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height - margin})`)
        .call(xAxis)

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append('text')
        .attr("y", 15)
        .attr("transform", "rotate(-90)")
        .attr("fill", "#000")
        .text("% Crime")
}

function updateData() {
    let tmp = []
    for (let i = 0; i < dataCountry1; i++) {
        if (dataCountry1[i][0][1] == d3.select(".checkbox").value() && d3.select(".checkbox").property("checked"))
            tmp[i].push(dataCountry1[i])
    }
    return tmp
}


constructData(tableToArray('table1'))
console.log(dataCountry1)

drawChecker(dataCountry1)

drawChart1(arrayToJson([[[0,''],[''],[''],['']]]))












function drawCharDimple(csvIn) {
    var svg = dimple.newSvg(".graph2", 800, 600);
    d3.csvParse(csvIn, function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 330)
      myChart.addCategoryAxis("x", ["Pays"]);
      myChart.addMeasureAxis("y", "date1");
      myChart.addSeries("Channel", dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
    });
}



function oranizeArray(data) {
    let line = ''
    let count = 0

    for (let i = 0; i < data.length; i++) {
        data[i].shift()
    }

    data.forEach(function (infoArray, index) {
        /*
        if (count == 0)
            line += [ { "Pays" : "'+infoArray[0]+'", "2007-09" : "'+infoArray[1]+'", "2010–12" : "'+infoArray[2]+'" }
        else if (count == data.length)
        	line += { "Pays" : "'+infoArray[0]+'", "2007-09" : "'+infoArray[1]+'", "2010–12" : "'+infoArray[2]+'" } ]
        else*/
			line += '[ { "Pays" : "'+infoArray[0]+'", "2007-09" : "'+infoArray[1]+'", "2010–12" : "'+infoArray[2]+'" }]'
		count++
    })
        //line += 
        //let line = infoArray.join(",")
        //lineArray.push(index == 0 ? "Pays,date1,2010–12\n" + line : line)
    return line
}





let div2 = document.createElement('div')
div2.setAttribute('id', 'graph2')
div2.classList.add('graph2')

document.getElementById("table2").before(div2)

let table2 = tableToArray('table2')

drawCharDimple(oranizeArray(table2))































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

let svg3 = d3.select(".chart3").append("svg")
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
            data.push({ 'y': array[i][1] })
            pureData.push(array[i][1])
            m++
        }

        maxY = Math.max(...pureData)
        minY = Math.min(...pureData)

        svg3.selectAll(".x").remove()
        svg3.selectAll(".y").remove()
        svg3.selectAll(".line").remove()
        svg3.selectAll('.dot').remove()
        svg3.selectAll(".grid").remove()

        /*
        let xScale
        if (n >= 50) {
            xScale = d3.scaleLinear()
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

        svg3.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale))

        ///*
        svg3.append("g")
            .attr("class", "grid")
            .attr("transform", "translate(0," + height + ")")
            .call(make_x_gridlines(xScale)
                .tickSize(-height)
                .tickFormat(""))
        //*/

        svg3.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale))

        ///*
        svg3.append("g")
            .attr("class", "grid")
            .call(make_y_gridlines(yScale)
                .tickSize(-width)
                .tickFormat(""))
        //*/

        svg3.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line)
            .attr("transform", null)

        svg3.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", function (d, i) { return xScale(i) })
            .attr("cy", function (d) { return yScale(d.y) })
            .attr("r", 4)
            .on("mouseover", function (d, a) {
                divToolTip3.transition()
                    .duration(200)
                    .style("opacity", .9)
                divToolTip3.html('Value : ' + JSON.stringify(d).slice(5, -1))//+'<br>Element : '+m)	
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px")
            })
            .on("mouseout", function (d) {
                divToolTip3.transition()
                    .duration(500)
                    .style("opacity", 0)
            })

        return array
    }).catch(err => {
        console.log('Erreur de chargement API : ' + err)
    })
}

loadAPI()
let intervalGraph3 = setInterval(loadAPI, 1000)

b1.onclick = function () {
    if (b1.value == 'Pause') {
        clearInterval(intervalGraph3)
        b1.value = 'Play'
    } else if (b1.value == 'Play') {
        intervalGraph3 = setInterval(loadAPI, 1000)
        b1.value = 'Pause'
    }
}