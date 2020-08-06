
var aColor = ['00','33','66','99','CC','FF'];  
var iLen = aColor.length;  
var color = [];
for(var r = 0; r < iLen; r++) {  
    for(var g = 0; g < iLen; g++) {  
        for(var b = 0; b < iLen; b++) {  
            var iop = '#'+aColor[r].toString()+aColor[g].toString()+aColor[b].toString();
            color.push(iop);
        }  
    };  
};


/*删除指定颜色*/
Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};
color.remove('#000000');