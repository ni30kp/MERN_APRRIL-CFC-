
let credits= 5000;
let badge;

if(credits>=7500)
{
    badge="Tera leader";
}
else if(credits>=6000 && credits<7500)
{
    badge="Gega leader";
}
else if(credits>=4500 && credits<6000)
{
    badge="Mega leader";
}
else if( credits<4500)
{
    badge = "Rising Star";
}
console.log("Badge : "+badge);