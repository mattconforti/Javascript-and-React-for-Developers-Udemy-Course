var count=0;function logger(){10===count&&console.log("Now that's a garden!"),50<count&&count<75&&console.log(`Oh man, ${count} tomatoes, what more can you do?`),100===count&&console.log(`${count} tomatoes is too much, you can\'t handle that much acid.`)}document.getElementById("tomato").addEventListener("click",()=>{count++,document.getElementById("counter").innerText=count,logger()});