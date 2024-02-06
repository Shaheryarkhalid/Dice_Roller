let Spans=document.querySelectorAll('.Main-Section .Content-Wrapper .Dice div span');
function Roll_Dice()
{
    for (const key of Spans) {
        key.style.display="none";
    }
    setTimeout(()=>{
        let s=Math.floor(Math.random()* 6)+1;
        for(let i=0;i<s;i++)
        {
            Spans[i].style.display="block";
        }
    }, 50)
}