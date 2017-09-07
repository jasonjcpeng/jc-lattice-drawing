# Lattice Drawing
The tool made with canvas be use for create image with lattice map

## Installation
````
$ npm install jc-lattice-drawing --save
````
## Usage
* First you need a div container like this
````html
    <div class="lattice" style="height:1000px;width:1000px"></div>
````
>The lattice drawing module will adapt the div container`s height and width ,and be word wrap automatically
* Just use it in original
````javascript
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

* use it in CommonJS
````javascript
    var LatticeDrawing = require('jc-lattice-drawing')
    var lattice = new LatticeDrawing('.lattice')
````
##Doc

####latticeMap
>inner the module,I had plant a default latticMap of decimal digit. So you can use renderNumber() function directly do not care about lattice map
example:

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