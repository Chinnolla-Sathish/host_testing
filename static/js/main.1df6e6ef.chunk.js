(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,l){},13:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(2),u=l.n(r);var c=function(){const[e,t]=Object(a.useState)(""),[l,r]=Object(a.useState)(""),[u,c]=Object(a.useState)(""),[m,E]=Object(a.useState)(""),[o,s]=Object(a.useState)(""),[d,p]=Object(a.useState)(""),[i,b]=Object(a.useState)(""),[g,S]=Object(a.useState)(""),[h,j]=Object(a.useState)(""),[v,O]=Object(a.useState)("");return n.a.createElement("div",{className:"App"},n.a.createElement("form",{onSubmit:t=>{t.preventDefault(),r(e);const l=e.split("-");console.log(l);const a=new Date,n=a.getFullYear(),u=a.getMonth()+1,m=a.getDate();let o,d,b;p(n+"-"+u+"-"+m),console.log(n+"-"+u+"-"+m),l[1]==u&&l[2]==m?(o=n-l[0],d=u-l[1],b=m-l[2]):m<l[2]?u>l[1]?(o=n-l[0],d=u-l[1]-1,b=30-l[2]+m):u<=l[1]&&(o=n-l[0]-1,d=12-(l[1]-u)-1,b=30-(l[2]-m)):m>l[2]&&(u>=l[1]?(o=n-l[0],d=u-l[1],b=m-l[2]):u<l[1]&&(o=n-l[0]-1,d=12-(l[1]-u),b=m-l[2])),c(o),E(d),s(b);const S=(12*o+d+b/30)*(i*g/100);O(S),j(parseFloat(i)+S)}},n.a.createElement("h1",null,"Interest Calculator"),n.a.createElement("hr",null),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,"  ",n.a.createElement("label",{htmlFor:"dateInput"},"Select Date:")),n.a.createElement("td",null,n.a.createElement("input",{type:"date",id:"dateInput",value:e,onChange:e=>{t(e.target.value)},required:!0}))),n.a.createElement("br",null),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"amountInput"},"Enter Amount:")),n.a.createElement("td",null,n.a.createElement("input",{type:"number",id:"amountInput",value:i,onChange:e=>{b(e.target.value)},placeholder:"Amount",required:!0}))),n.a.createElement("br",null),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"interestRate"},"Interest(%):")),n.a.createElement("td",null,n.a.createElement("input",{type:"number",id:"interestRate",value:g,onChange:e=>{S(e.target.value)},placeholder:"interest rate",required:!0}))),n.a.createElement("br",null)),n.a.createElement("button",{className:"btn"},"Submit")),l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Selected Date"))),n.a.createElement("td",null,":",l)),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Till Date"))),n.a.createElement("td",null,":",d)),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Amount"))),n.a.createElement("td",null,":",i)),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Interest per Month (for 100)"))),n.a.createElement("td",null,":",g,"%")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Time Period"))),n.a.createElement("td",null,":",u," years,",m," months,",o," days")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Total Interest"))),n.a.createElement("td",null,":",v)),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Total (Amount+interest)"))),n.a.createElement("td",null,":",h)))))};l(12);u.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c,null)))},3:function(e,t,l){e.exports=l(13)}},[[3,1,2]]]);
//# sourceMappingURL=main.1df6e6ef.chunk.js.map