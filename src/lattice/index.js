var numberLatticeMap = require('../default_lattice_map/number.json')

function SpaceLattice(selector, options) {
    this.root = window.document.querySelector(selector)
    this.ctx
    if (typeof this.root !== 'undefined') {
        var canvas = window.document.createElement('canvas')
        canvas.width = this.root.clientWidth
        canvas.height = this.root.clientHeight
        this.root.appendChild(canvas)
        this.ctx = canvas.getContext('2d')
    }
}

SpaceLattice.prototype = {
    constructor: SpaceLattice,
    _MAX_USED_X: 0,
    _MAX_USED_Y: 0,
    _latticeMargin: 0,
    clear: function () {
        this.ctx.clearRect(0, 0, this.root.clientWidth, this.root.clientHeight);
        this._MAX_USED_X = 0
        this._MAX_USED_Y = 0
    },
    render: function (string,latticMap, options) {
        var arr = string.toString().split('')
        for (var i in arr) {
            if (latticMap[arr[i]]) {
                this.renderSingleLattic(latticMap[arr[i].toString()], options)
            }
        }
    },
    renderNumber: function (string, options) {
        var arr = string.toString().split('')
        for (var i in arr) {
            if (numberLatticeMap[arr[i]]) {
                this.renderSingleLattic(numberLatticeMap[arr[i].toString()], options)
            }
        }
    },
    renderSingleLattic: function (latticMap, options) {
        var color, atomShape, atomMargin, atomRadius, TOTAL_X = 0, TOTAL_Y = 0
        if (typeof this.ctx !== 'undefined') {
            color = options.color ? options.color : '#000'
            atomShape = options.atomShape ? options.atomShape : 'default'
            atomMargin = options.atomMargin ? options.atomMargin : 0
            atomRadius = options.atomRadius ? options.atomRadius : 0
            this.ctx.fillStyle = color
            this.ctx.lineWidth = 1
            for (var iY in latticMap) {
                for (var iX in latticMap[iY]) {
                    if (latticMap[iY][iX] == 1) {
                        var realX = parseInt(iX,10) + this._MAX_USED_X
                        var realY = parseInt(iY,10) + this._MAX_USED_Y
                        this.createAtom(realX, realY, options)
                    }
                    TOTAL_X = TOTAL_X + (TOTAL_X < iX ? 1 : 0)
                }
                TOTAL_Y = TOTAL_Y + (TOTAL_Y < iY ? 1 : 0)
            }
            this._MAX_USED_X += (TOTAL_X + (options.latticeMargin ? options.latticeMargin : 0))
            this.autoBreakLine(TOTAL_X, TOTAL_Y, options)
        }

    },
    autoBreakLine: function (TOTAL_X, TOTAL_Y, options) {
        if ((this._MAX_USED_X + TOTAL_X) * 2 * ((options.atomRadius ? options.atomRadius : 0) + (options.atomMargin ? options.atomMargin : 0)) > this.root.clientWidth) {
            this._MAX_USED_Y += ((TOTAL_Y + (options.latticeMargin ? options.latticeMargin : 0)) + options.latticeMargin)
            this._MAX_USED_X = 0
        }
    },
    createAtom: function (x, y, options) {
        var shape, x, y, radius, margin
        if (typeof this.ctx !== 'undefined') {
            shape = options.atomShape
            radius = options.atomRadius ? options.atomRadius : 0
            margin = (options.atomMargin ? options.atomMargin : 0) + radius
            x = (x ? x : 0) * (margin + radius)
            y = (y ? y : 0) * (margin + radius)
            this.ctx.beginPath()
            if (shape === 'cycle') {
                x = x + radius + margin
                y = y + radius + margin
                this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
                this.ctx.fill()
            } else {
                x = x + margin
                y = y + margin
                this.ctx.moveTo(x, y)
                x = x + radius * 2
                this.ctx.lineTo(x, y)
                y = y + radius * 2
                this.ctx.lineTo(x, y)
                x = x - radius * 2
                this.ctx.lineTo(x, y)
                this.ctx.fill()
            }
            this.ctx.closePath()
        }
    }
}
module.exports = SpaceLattice