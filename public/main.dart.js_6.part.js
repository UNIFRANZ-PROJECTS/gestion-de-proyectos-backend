self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
fS(d,e,f,g,h,i,j){return new B.a5v(j,i,g,e,h,d,f,null)},
a5v:function a5v(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.y=j
_.a=k},
aF3:function aF3(d,e,f){this.a=d
this.b=e
this.c=f},
Fb:function Fb(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
ahb:function ahb(d,e){var _=this
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
Qh:function Qh(d,e,f,g,h,i){var _=this
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
aYF:function aYF(d,e){this.a=d
this.b=e},
aYE:function aYE(d,e){this.a=d
this.b=e},
Sj:function Sj(){},
ak9:function ak9(){},
aka:function aka(){}},A,C
B=a.updateHolder(c[53],B)
A=c[0]
C=c[2]
B.a5v.prototype={
F(d){var x,w,v,u,t=this,s=null,r={},q=t.c,p=A.bkX(d,q,t.d),o=t.x
r.a=o
x=t.e
if(x!=null)r.a=new A.b1(x,o,s)
w=t.r
w=t.f==null&&A.bgu(d,q)
v=w?A.xN(d):t.f
u=A.bal(p,C.U,v,t.y,!1,s,s,s,s,s,new B.aF3(r,t,p))
return w&&v!=null?A.bgt(u):u}}
B.Fb.prototype={
b0(d){var x=new B.Qh(this.e,this.f,this.r,A.aq(y.h),null,A.aq(y.d))
x.b2()
x.sc6(null)
return x},
b1(d,e){var x
e.sl0(this.e)
e.sde(0,this.f)
x=this.r
if(x!==e.N){e.N=x
e.Z()
e.c3()}},
d6(d){return new B.ahb(this,C.ac)}}
B.ahb.prototype={}
B.Qh.prototype={
sl0(d){if(d===this.t)return
this.t=d
this.P()},
sde(d,e){var x=this,w=x.J
if(e===w)return
if(x.b!=null)w.I(0,x.gCF())
x.J=e
if(x.b!=null)e.V(0,x.gCF())
x.P()},
amX(){this.Z()
this.c3()},
eP(d){if(!(d.e instanceof A.d6))d.e=new A.d6()},
aw(d){this.adC(d)
this.J.V(0,this.gCF())},
au(d){this.J.I(0,this.gCF())
this.adD(0)},
ghl(){return!0},
gasR(){switch(A.ca(this.t).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gWQ(){var x=this,w=x.q$
if(w==null)return 0
switch(A.ca(x.t).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
YK(d){switch(A.ca(this.t).a){case 0:return new A.au(0,1/0,d.c,d.d)
case 1:return new A.au(d.a,d.b,0,1/0)}},
c0(d){var x=this.q$
if(x!=null)return x.am(C.a4,d,x.gbX())
return 0},
bT(d){var x=this.q$
if(x!=null)return x.am(C.ad,d,x.gc1())
return 0},
bR(d){var x=this.q$
if(x!=null)return x.am(C.a6,d,x.gc_())
return 0},
bW(d){var x=this.q$
if(x!=null)return x.am(C.av,d,x.gcm())
return 0},
dz(d){var x=this.q$
if(x==null)return new A.P(A.R(0,d.a,d.b),A.R(0,d.c,d.d))
return d.bI(x.iR(this.YK(d)))},
cA(){var x=this,w=y.a.a(A.w.prototype.gW.call(x)),v=x.q$
if(v==null)x.k3=new A.P(A.R(0,w.a,w.b),A.R(0,w.c,w.d))
else{v.cp(x.YK(w),!0)
v=x.q$.k3
v.toString
x.k3=w.bI(v)}x.J.ri(x.gasR())
x.J.pu(0,x.gWQ())},
yf(d){var x=this
switch(x.t.a){case 0:return new A.k(0,d-x.q$.k3.b+x.k3.b)
case 2:return new A.k(0,-d)
case 3:return new A.k(d-x.q$.k3.a+x.k3.a,0)
case 1:return new A.k(-d,0)}},
YE(d){var x,w,v,u,t
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
x=t.yf(x)
w=new B.aYF(t,x)
v=t.a9
if(t.YE(x)){x=t.cx
x===$&&A.b()
u=t.k3
v.sbd(0,d.ln(x,e,new A.y(0,0,0+u.a,0+u.b),w,t.N,v.a))}else{v.sbd(0,null)
w.$2(d,e)}}},
m(){this.a9.sbd(0,null)
this.hu()},
eY(d,e){var x=this.J.at
x.toString
x=this.yf(x)
e.bm(0,x.a,x.b)},
mY(d){var x=this,w=x.J.at
w.toString
w=x.yf(w)
if(x.YE(w)){w=x.k3
return new A.y(0,0,0+w.a,0+w.b)}return null},
e7(d,e){var x,w=this
if(w.q$!=null){x=w.J.at
x.toString
return d.ka(new B.aYE(w,e),w.yf(x),e)}return!1},
lz(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gmq()
if(!(d instanceof A.z)){x=q.J.at
x.toString
return new A.up(x,f)}w=A.iF(d.d1(0,q.q$),f)
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
return new A.up(r,w.e3(q.yf(r)))},
Hm(d,e){return this.lz(d,e,null)},
fl(d,e,f,g){this.I8(d,null,f,A.bgO(d,e,f,this.J,g,this))},
qH(){return this.fl(C.ba,null,C.J,null)},
nM(d){return this.fl(C.ba,null,C.J,d)},
oV(d,e,f){return this.fl(d,null,e,f)},
nN(d,e){return this.fl(C.ba,d,C.J,e)},
NS(d){var x,w=this,v=w.gWQ(),u=w.J.at
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
$ixU:1}
B.Sj.prototype={
aw(d){var x
this.eq(d)
x=this.q$
if(x!=null)x.aw(d)},
au(d){var x
this.ee(0)
x=this.q$
if(x!=null)x.au(0)}}
B.ak9.prototype={}
B.aka.prototype={}
var z=a.updateTypes(["Y(Y)","Fb(M,ii)","~()","~({curve:hA,descendant:w?,duration:bs,rect:y?})"])
B.aF3.prototype={
$2(d,e){return new B.Fb(this.c,e,C.U,this.a.a,null)},
$S:z+1}
B.aYF.prototype={
$2(d,e){var x=this.a.q$
x.toString
d.eo(x,e.a4(0,this.b))},
$S:12}
B.aYE.prototype={
$2(d,e){return this.a.q$.d2(d,e)},
$S:16};(function aliases(){var x=B.Sj.prototype
x.adC=x.aw
x.adD=x.au})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=B.Qh.prototype,"gCF","amX",2)
w(u,"gbX","c0",0)
w(u,"gc1","bT",0)
w(u,"gc_","bR",0)
w(u,"gcm","bW",0)
v(u,"gqG",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["fl","qH","nM","oV","nN"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.a5v,A.ao)
u(A.ec,[B.aF3,B.aYF,B.aYE])
v(B.Fb,A.bj)
v(B.ak9,A.D0)
v(B.aka,B.ak9)
v(B.ahb,B.aka)
v(B.Sj,A.z)
v(B.Qh,B.Sj)
x(B.Sj,A.be)
w(B.ak9,A.JU)
w(B.aka,A.a7n)})()
A.cx(b.typeUniverse,JSON.parse('{"Fb":{"bj":[],"aA":[],"f":[]},"a5v":{"ao":[],"f":[]},"ahb":{"bp":[],"aN":[],"M":[]},"Qh":{"z":[],"be":["z"],"xU":[],"w":[],"a2":[],"at":[]}}'))
var y={a:A.G("au"),h:A.G("nF"),d:A.G("dX")}}
$__dart_deferred_initializers__["XkpA6haw4HWVrO0z1wHQtq8j6+A="] = $__dart_deferred_initializers__.current
