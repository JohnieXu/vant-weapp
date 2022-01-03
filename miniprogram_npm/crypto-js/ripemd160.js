(function(e,r){"object"==typeof exports?module.exports=exports=r(require("./core")):"function"==typeof define&&define.amd?define(["./core"],r):r(e.CryptoJS)})(this,function(e){return function(){function r(e,r,t){return e^r^t}function t(e,r,t){return e&r|~e&t}function n(e,r,t){return(e|~r)^t}function o(e,r,t){return e&t|r&~t}function i(e,r,t){return e^(r|~t)}function a(e,r){return e<<r|e>>>32-r}var s=e,c=s.lib,f=c.WordArray,u=c.Hasher,h=s.algo,d=f.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),p=f.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),l=f.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),y=f.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),m=f.create([0,1518500249,1859775393,2400959708,2840853838]),g=f.create([1352829926,1548603684,1836072691,2053994217,0]),v=h.RIPEMD160=u.extend({_doReset:function(){this._hash=f.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,s){for(var c=0;16>c;c++){var f=s+c,u=e[f];e[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var h,v,x,w,_,q,H,S,b,A,B=this._hash.words,C=m.words,j=g.words,J=d.words,z=p.words,W=l.words,k=y.words;q=h=B[0],H=v=B[1],S=x=B[2],b=w=B[3],A=_=B[4];for(var M,c=0;80>c;c+=1)M=0|h+e[s+J[c]],M+=16>c?r(v,x,w)+C[0]:32>c?t(v,x,w)+C[1]:48>c?n(v,x,w)+C[2]:64>c?o(v,x,w)+C[3]:i(v,x,w)+C[4],M=0|M,M=a(M,W[c]),M=0|M+_,h=_,_=w,w=a(x,10),x=v,v=M,M=0|q+e[s+z[c]],M+=16>c?i(H,S,b)+j[0]:32>c?o(H,S,b)+j[1]:48>c?n(H,S,b)+j[2]:64>c?t(H,S,b)+j[3]:r(H,S,b)+j[4],M=0|M,M=a(M,k[c]),M=0|M+A,q=A,A=b,b=a(S,10),S=H,H=M;M=0|B[1]+x+b,B[1]=0|B[2]+w+A,B[2]=0|B[3]+_+q,B[3]=0|B[4]+h+H,B[4]=0|B[0]+v+S,B[0]=M},_doFinalize:function(){var e=this._data,r=e.words,t=8*this._nDataBytes,n=8*e.sigBytes;r[n>>>5]|=128<<24-n%32,r[(n+64>>>9<<4)+14]=16711935&(t<<8|t>>>24)|4278255360&(t<<24|t>>>8),e.sigBytes=4*(r.length+1),this._process();for(var o=this._hash,i=o.words,a=0;5>a;a++){var s=i[a];i[a]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return o},clone:function(){var e=u.clone.call(this);return e._hash=this._hash.clone(),e}});s.RIPEMD160=u._createHelper(v),s.HmacRIPEMD160=u._createHmacHelper(v)}(Math),e.RIPEMD160});