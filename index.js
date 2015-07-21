/**
 * index.js
 * Created by dcorns on 7/21/15.
 */
'use strict';
var Obj = function(txt){
  this.txt = txt;
  this.lbl = document.createElement('label');
  this.lbl.innerHTML = this.txt;
  this.lbl.clicks = 0;
};

Obj.prototype.addElement = function (elId){
  this.lbl.addEventListener('click', function(e){
    e.target.clicks ++;
  });
  var el = document.getElementById(elId);
  el.appendChild(this.lbl);
};

document.getElementById('btn').addEventListener('click', function(){
  console.dir(ary[0].lbl.clicks);
  console.dir(ary[1].lbl.clicks);
  console.dir(ary[2].lbl.clicks);
});

var ary = [];
ary.push(new Obj('test1'));
ary.push(new Obj('test2'));
ary.push(new Obj('test3'));
ary[0].addElement('container');
ary[1].addElement('container');
ary[2].addElement('container');
