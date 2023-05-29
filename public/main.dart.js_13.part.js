self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
amt(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.bfX().ys(d)
if(g!=null){x=new A.amu()
w=g.b
v=w[1]
v.toString
u=B.fn(v,h)
v=w[2]
v.toString
t=B.fn(v,h)
v=w[3]
v.toString
s=B.fn(v,h)
r=x.$1(w[4])
q=x.$1(w[5])
p=x.$1(w[6])
o=new A.amv().$1(w[7])
n=C.e.eh(o,1000)
if(w[8]!=null){m=w[9]
if(m!=null){l=m==="-"?-1:1
v=w[10]
v.toString
k=B.fn(v,h)
q-=l*(x.$1(w[11])+60*k)}j=!0}else j=!1
i=B.et(u,t,s,r,q,p,n+C.d.bL(o%1000/1000),j)
if(i==null)throw B.c(B.cl("Time out of range",d,h))
return B.b8d(i,j)}else throw B.c(B.cl("Invalid date format",d,h))},
amu:function amu(){},
amv:function amv(){},
a45(d){var x=J.at(d)
return new A.eI(B.cA(J.hV(x.i(d,"requirementIds"),new A.aCw()),!0,y.b),x.i(d,"state"),x.i(d,"name"),A.amt(x.i(d,"start")),A.amt(x.i(d,"end")),x.i(d,"weighing"),x.i(d,"id"))},
eI:function eI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCw:function aCw(){},
aCx:function aCx(){}},B,C,D,J
A=a.updateHolder(c[39],A)
B=c[0]
C=c[2]
D=c[42]
J=c[1]
A.eI.prototype={
cG(){var x=this,w=x.a,v=y.m
return B.ag(["requirementIds",B.cA(new B.a4(w,new A.aCx(),B.a0(w).h("a4<1,@>")),!0,v),"state",x.b,"name",x.c,"start",x.d.Fx(),"end",x.e.Fx(),"weighing",x.f,"id",x.r],y.g,v)},
gaJ(d){return this.c}}
var z=a.updateTypes([])
A.amu.prototype={
$1(d){if(d==null)return 0
return B.fn(d,null)},
$S:236}
A.amv.prototype={
$1(d){var x,w,v
if(d==null)return 0
for(x=d.length,w=0,v=0;v<6;++v){w*=10
if(v<x)w+=C.b.av(d,v)^48}return w},
$S:236}
A.aCw.prototype={
$1(d){return D.a1n(d)},
$S:237}
A.aCx.prototype={
$1(d){return d.cG()},
$S:708};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.cn,[A.amu,A.amv,A.aCw,A.aCx])
w(A.eI,B.H)})()
var y={b:B.D("ej"),g:B.D("h"),m:B.D("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bAu","bfX",()=>B.bp("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:[.,](\\d+))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1))})()}
$__dart_deferred_initializers__["vB93zumEX/yXSBR5vd5baIzN8dQ="] = $__dart_deferred_initializers__.current
