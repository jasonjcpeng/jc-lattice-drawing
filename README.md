#Lattice Drawing
<hr/>
<span style="font-weight:600">The tool made with <span style="color:#cb3837">canvas</span> be use for create image with lattice map</span>
##Installation
<hr/>
````
$ npm install jc-lattice-drawing --save
````
##Usage<hr/>
* <span style="font-weight:600"><span style="color:#cb3837">First</span> you need a div container like this</span>
````html
    <div class="lattice" style="height:1000px;width:1000px"></div>
````
>The lattice drawing module will adapt the div container`s height and width ,and be word wrap automatically
* <span style="font-weight:600">Just use it in <span style="color:#cb3837">original</span></span>
```javascript
    window.onload = function () {
        var lattice = new LatticeDrawing('.lattice')
        var options = {
            color: '#999',//not required,default:#000
            latticeMargin: 1,//not required,default:0;Margin between single lattice map
            atomShape: 'cycle',//not required,cycle or square,default:square;each atom of lattice map`s shape
            atomMargin: 2,//not required,each atom of lattice`s margin
            atomRadius: 8 //not required,each atom`s radius
        }
        lattice.renderNumber(String,options)//render an uninterrupted image with default Number lattice map
    }
````
* <span style="font-weight:600">use it in <span style="color:#cb3837">CommonJS</span></span>
````javascript
    var LatticeDrawing = require('jc-lattice-drawing')
    var lattice = new LatticeDrawing('.lattice')
````
##Doc
<hr/>
####latticeMap
>inner the module,I had plant a default latticMap of decimal digit. So you can use renderNumber() function directly do not care about lattice map

<span style="color:#cb3837">example:</span>
````json
{
    "0": [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0]
    ],
    "1": [
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ]
}
````
####options
````
options:{
            color: '#999',//not required,default:#000
            latticeMargin: 1,//not required,default:0;Margin between single lattice map
            atomShape: 'cycle',//not required,cycle or square,default:square;each atom of lattice map`s shape
            atomMargin: 2,//not required,each atom of lattice`s margin
            atomRadius: 8 //not required,each atom`s radius
        }
````   
####render(string,latticMap, options)
> with custom lattice you can make amazing image
````
    string : the trigger of latticMap
````
####renderNumber(string, options)
####renderNumber(string, options)
####clear()
> clear all