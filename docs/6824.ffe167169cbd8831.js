"use strict";(self.webpackChunkdevbarbudo=self.webpackChunkdevbarbudo||[]).push([[6824],{6824:(q,d,e)=>{e.r(d),e.d(d,{FormLayoutDemoModule:()=>x});var u=e(6814),o=e(95),m=e(2129),t=e(9467),Z=e(707),p=e(3714),r=e(3965),s=e(6218);let c=(()=>{class i{constructor(){this.selectedState=null,this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems=[{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}],this.cities1=[],this.cities2=[],this.city1=null,this.city2=null}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:94,vars:2,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card","p-fluid"],[1,"field"],["htmlFor","name1"],["pInputText","","id","name1","type","text"],["htmlFor","email1"],["pInputText","","id","email1","type","text"],["htmlFor","age1"],["pInputText","","id","age1","type","text"],[1,"p-formgrid","grid"],[1,"field","col"],["htmlFor","name2"],["pInputText","","id","name2","type","text"],["htmlFor","email2"],["pInputText","","id","email2","type","text"],[1,"field","grid"],["htmlFor","name3",1,"col-12","mb-2","md:col-2","md:mb-0"],[1,"col-12","md:col-10"],["pInputText","","id","name3","type","text"],["htmlFor","email3",1,"col-12","mb-2","md:col-2","md:mb-0"],["pInputText","","id","email3","type","text"],[1,"card"],[1,"formgroup-inline"],["htmlFor","firstname1",1,"p-sr-only"],["pInputText","","id","firstname1","type","text","placeholder","Firstname"],["htmlFor","lastname1",1,"p-sr-only"],["pInputText","","id","lastname1","type","text","placeholder","Lastname"],["pButton","","label","Submit"],[1,"field","p-fluid"],["htmlFor","username"],["pInputText","","id","username","type","text"],[1,"col-12"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["htmlFor","firstname2"],["pInputText","","id","firstname2","type","text"],["htmlFor","lastname2"],["pInputText","","id","lastname2","type","text"],[1,"field","col-12"],["htmlFor","address"],["pInputTextarea","","id","address","rows","4"],["htmlFor","city"],["pInputText","","id","city","type","text"],[1,"field","col-12","md:col-3"],["htmlFor","state"],["optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","zip"],["pInputText","","id","zip","type","text"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4,"Vertical"),t.qZA(),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",3)(10,"label",6),t._uU(11,"Email"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"div",3)(14,"label",8),t._uU(15,"Age"),t.qZA(),t._UZ(16,"input",9),t.qZA()(),t.TgZ(17,"div",2)(18,"h5"),t._uU(19,"Vertical Grid"),t.qZA(),t.TgZ(20,"div",10)(21,"div",11)(22,"label",12),t._uU(23,"Name"),t.qZA(),t._UZ(24,"input",13),t.qZA(),t.TgZ(25,"div",11)(26,"label",14),t._uU(27,"Email"),t.qZA(),t._UZ(28,"input",15),t.qZA()()()(),t.TgZ(29,"div",1)(30,"div",2)(31,"h5"),t._uU(32,"Horizontal"),t.qZA(),t.TgZ(33,"div",16)(34,"label",17),t._uU(35,"Name"),t.qZA(),t.TgZ(36,"div",18),t._UZ(37,"input",19),t.qZA()(),t.TgZ(38,"div",16)(39,"label",20),t._uU(40,"Email"),t.qZA(),t.TgZ(41,"div",18),t._UZ(42,"input",21),t.qZA()()(),t.TgZ(43,"div",22)(44,"h5"),t._uU(45,"Inline"),t.qZA(),t.TgZ(46,"div",23)(47,"div",3)(48,"label",24),t._uU(49,"Firstname"),t.qZA(),t._UZ(50,"input",25),t.qZA(),t.TgZ(51,"div",3)(52,"label",26),t._uU(53,"Lastname"),t.qZA(),t._UZ(54,"input",27),t.qZA(),t._UZ(55,"button",28),t.qZA()(),t.TgZ(56,"div",22)(57,"h5"),t._uU(58,"Help Text"),t.qZA(),t.TgZ(59,"div",29)(60,"label",30),t._uU(61,"Username"),t.qZA(),t._UZ(62,"input",31),t.TgZ(63,"small"),t._uU(64,"Enter your username to reset your password."),t.qZA()()()(),t.TgZ(65,"div",32)(66,"div",22)(67,"h5"),t._uU(68,"Advanced"),t.qZA(),t.TgZ(69,"div",33)(70,"div",34)(71,"label",35),t._uU(72,"Firstname"),t.qZA(),t._UZ(73,"input",36),t.qZA(),t.TgZ(74,"div",34)(75,"label",37),t._uU(76,"Lastname"),t.qZA(),t._UZ(77,"input",38),t.qZA(),t.TgZ(78,"div",39)(79,"label",40),t._uU(80,"Address"),t.qZA(),t._UZ(81,"input",41),t.qZA(),t.TgZ(82,"div",34)(83,"label",42),t._uU(84,"City"),t.qZA(),t._UZ(85,"input",43),t.qZA(),t.TgZ(86,"div",44)(87,"label",45),t._uU(88,"State"),t.qZA(),t.TgZ(89,"p-dropdown",46),t.NdJ("ngModelChange",function(F){return l.selectedState=F}),t.qZA()(),t.TgZ(90,"div",44)(91,"label",47),t._uU(92,"Zip"),t.qZA(),t._UZ(93,"input",48),t.qZA()()()()()),2&n&&(t.xp6(89),t.Q6J("options",l.dropdownItems)("ngModel",l.selectedState))},dependencies:[o.JJ,o.On,Z.Hq,p.o,r.Lt,s.g],encapsulation:2})}return i})(),g=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[m.Bz.forChild([{path:"",component:c}]),m.Bz]})}return i})();var h=e(7327),v=e(6760),A=e(1480),T=e(9663),U=e(5167),y=e(8062),f=e(4055);let x=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[u.ez,o.u5,g,h.WN,v._8,A.Gg,r.kW,T.zz,U.L$,y.XH,f.q4,s.A,p.j]})}return i})()}}]);