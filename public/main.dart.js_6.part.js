self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
fS(d,e,f,g,h,i,j){return new B.a5r(j,i,g,e,h,d,f,null)},
a5r:function a5r(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.y=j
_.a=k},
aEY:function aEY(d,e,f){this.a=d
this.b=e
this.c=f},
F9:function F9(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
ah7:function ah7(d,e){var _=this
_.ay=_.p1=null
_.ch=!1
_.d=_.c=_.b=_.a=_.CW=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
Qe:function Qe(d,e,f,g,h,i){var _=this
_.t=d
_.J=e
_.N=f
_.a9=g
_.q$=h
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
aY1:function aY1(d,e){this.a=d
this.b=e},
aY0:function aY0(d,e){this.a=d
this.b=e},
Sg:function Sg(){},
ak5:function ak5(){},
ak6:function ak6(){}},A,C
B=a.updateHolder(c[53],B)
A=c[0]
C=c[2]
B.a5r.prototype={
F(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=A.bkb(d,q,t.d),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new A.b1(x,o,s)
w=t.r
w=t.f==null&&A.bfL(d,q)
v=w?A.xM(d):t.f
u=A.b9D(p,C.U,v,t.y,!1,s,s,s,s,s,new B.aEY(r,t,p))
return w&&v!=null?A.bfK(u):u}}
B.F9.prototype={
b0(d){var x=new B.Qe(this.e,this.f,this.r,A.aq(y.h),null,A.aq(y.d))
x.b2()
x.sc6(null)
return x},
b1(d,e){var x
e.sl0(this.e)
e.sdc(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.Z()
e.c3()}},
d6(d){return new B.ah7(this,C.ab)}}
B.ah7.prototype={}
B.Qe.prototype={
sl0(d){if(d===this.t)return
this.t=d
this.P()},
sdc(d,e){var x=this,w=x.J
if(e===w)return
if(x.b!=null)w.I(0,x.gCE())
x.J=e
if(x.b!=null)e.V(0,x.gCE())
x.P()},
amU(){this.Z()
this.c3()},
eO(d){if(!(d.e instanceof A.d7))d.e=new A.d7()},
av(d){this.adz(d)
this.J.V(0,this.gCE())},
ar(d){this.J.I(0,this.gCE())
this.adA(0)},
ghl(){return!0},
gasO(){switch(A.c9(this.t).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gWP(){var x=this,w=x.q$
if(w==null)return 0
switch(A.c9(x.t).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
YJ(d){switch(A.c9(this.t).a){case 0:return new A.au(0,1/0,d.c,d.d)
case 1:return new A.au(d.a,d.b,0,1/0)}},
c0(d){var x=this.q$
if(x!=null)return x.am(C.a4,d,x.gbX())
return 0},
bT(d){var x=this.q$
if(x!=null)return x.am(C.ac,d,x.gc1())
return 0},
bR(d){var x=this.q$
if(x!=null)return x.am(C.a5,d,x.gc_())
return 0},
bW(d){var x=this.q$
if(x!=null)return x.am(C.av,d,x.gcm())
return 0},
dz(d){var x=this.q$
if(x==null)return new A.P(A.R(0,d.a,d.b),A.R(0,d.c,d.d))
return d.bJ(x.iR(this.YJ(d)))},
cz(){var x=this,w=y.a.a(A.w.prototype.gW.call(x)),v=x.q$
if(v==null)x.k3=new A.P(A.R(0,w.a,w.b),A.R(0,w.c,w.d))
else{v.cp(x.YJ(w),!0)
v=x.q$.k3
v.toString
x.k3=w.bJ(v)}x.J.rh(x.gasO())
x.J.pu(0,x.gWP())},
yd(d){var x=this
switch(x.t.a){case 0:return new A.k(0,d-x.q$.k3.b+x.k3.b)
case 2:return new A.k(0,-d)
case 3:return new A.k(d-x.q$.k3.a+x.k3.a,0)
case 1:return new A.k(-d,0)}},
YD(d){var x,w,v,u,t
switch(this.N.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.q$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aB(d,e){var x,w,v,u,t=this
if(t.q$!=null){x=t.J.at
x.toString
x=t.yd(x)
w=new B.aY1(t,x)
v=t.a9
if(t.YD(x)){x=t.cx
x===$&&A.b()
u=t.k3
v.sbc(0,d.ln(x,e,new A.y(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.sbc(0,null)
w.$2(d,e)}}},
m(){this.a9.sbc(0,null)
this.hu()},
eZ(d,e){var x=this.J.at
x.toString
x=this.yd(x)
e.bm(0,x.a,x.b)},
mY(d){var x=this,w=x.J.at
w.toString
w=x.yd(w)
if(x.YD(w)){w=x.k3
return new A.y(0,0,0+w.a,0+w.b)}return null},
e7(d,e){var x,w=this
if(w.q$!=null){x=w.J.at
x.toString
return d.ka(new B.aY0(w,e),w.yd(x),e)}return!1},
lz(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gmq()
if(!(d instanceof A.z)){x=q.J.at
x.toString
return new A.un(x,f)}w=A.iD(d.d1(0,q.q$),f)
x=q.q$.k3
x.toString
switch(q.t.a){case 0:v=q.k3.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.k3.a
t=w.a
s=w.c-t
break
case 2:v=q.k3.b
t=w.b
s=w.d-t
break
case 3:v=q.k3.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new A.un(r,w.e3(q.yd(r)))},
Hl(d,e){return this.lz(d,e,null)},
fm(d,e,f,g){this.I7(d,null,f,A.bg4(d,e,f,this.J,g,this))},
qH(){return this.fm(C.ba,null,C.J,null)},
nM(d){return this.fm(C.ba,null,C.J,d)},
oV(d,e,f){return this.fm(d,null,e,f)},
nN(d,e){return this.fm(C.ba,d,C.J,e)},
NR(d){var x,w=this,v=w.gWP(),u=w.J.at
u.toString
x=v-u
switch(w.t.a){case 0:v=w.k3
return new A.y(0,0-x,0+v.a,0+v.b+u)
case 1:v=w.k3
return new A.y(0-u,0,0+v.a+x,0+v.b)
case 2:v=w.k3
return new A.y(0,0-u,0+v.a,0+v.b+x)
case 3:v=w.k3
return new A.y(0-x,0,0+v.a+u,0+v.b)}},
$ixT:1}
B.Sg.prototype={
av(d){var x
this.er(d)
x=this.q$
if(x!=null)x.av(d)},
ar(d){var x
this.ee(0)
x=this.q$
if(x!=null)x.ar(0)}}
B.ak5.prototype={}
B.ak6.prototype={}
var z=a.updateTypes(["X(X)","F9(N,ih)","~()","~({curve:hA,descendant:w?,duration:br,rect:y?})"])
B.aEY.prototype={
$2(d,e){return new B.F9(this.c,e,C.U,this.a.a,null)},
$S:z+1}
B.aY1.prototype={
$2(d,e){var x=this.a.q$
x.toString
d.ep(x,e.a4(0,this.b))},
$S:12}
B.aY0.prototype={
$2(d,e){return this.a.q$.d2(d,e)},
$S:16};(function aliases(){var x=B.Sg.prototype
x.adz=x.av
x.adA=x.ar})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=B.Qe.prototype,"gCE","amU",2)
w(u,"gbX","c0",0)
w(u,"gc1","bT",0)
w(u,"gc_","bR",0)
w(u,"gcm","bW",0)
v(u,"gqG",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["fm","qH","nM","oV","nN"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.a5r,A.an)
u(A.e8,[B.aEY,B.aY1,B.aY0])
v(B.F9,A.bj)
v(B.ak5,A.D_)
v(B.ak6,B.ak5)
v(B.ah7,B.ak6)
v(B.Sg,A.z)
v(B.Qe,B.Sg)
x(B.Sg,A.bd)
w(B.ak5,A.JQ)
w(B.ak6,A.a7j)})()
A.cv(b.typeUniverse,JSON.parse('{"F9":{"bj":[],"aA":[],"f":[]},"a5r":{"an":[],"f":[]},"ah7":{"bo":[],"aO":[],"N":[]},"Qe":{"z":[],"bd":["z"],"xT":[],"w":[],"a2":[],"at":[]}}'))
var y={a:A.G("au"),h:A.G("nE"),d:A.G("dS")}}
$__dart_deferred_initializers__["NJpnWZVG3SrwPWFku89nq8aE8nw="] = $__dart_deferred_initializers__.current
