class Map {
    constructor({width,height,scale,tileset}) {
        this.size = {width,height} || {width:3,height:3};
        this.scale = scale || 1;
        this.tileset = tileset || ['00'];
        this.mapData = this.generateMapData();
    }
    generateMapData() {
        this.mapData = [];
        for (let y = 0; y < this.size.height; y++) {
            this.mapData.push([]);
            for (let x = 0; x < this.size.width; x++) {
                this.mapData[y].push('00');
            }
        }
    }
}