var now=new Date;function createtime(){var e=new Date("04/26/2023 00:00:00");now.setTime(now.getTime()+250);var t=(now-e)/1e3/60/60/24,n=Math.floor(t),o=(now-e)/1e3/60/60-24*n,r=Math.floor(o);1==String(r).length&&(r="0"+r);var a=(now-e)/1e3/60-1440*n-60*r,i=Math.floor(a);1==String(i).length&&(i="0"+i);var w=(now-e)/1e3-86400*n-3600*r-60*i,l=Math.round(w);1==String(l).length&&(l="0"+l);let g="";g=`本站居然运行了 ${n} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 `,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=g)}setInterval((()=>{createtime()}),250);