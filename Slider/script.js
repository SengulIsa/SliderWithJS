var models=[
{
    name: 'Passat',
    image: 'İmg/Passat.jpg',
    link:'http://www.arabalar.com.tr/volkswagen/passat',
},
{
    name: 'Honda civic',
    image: 'İmg/civic.jpg',
    link:'http://www.arabalar.com.tr/honda/civic',
},
{
    name: 'Bmw X6',
    image: 'İmg/Bmw.jpg',
    link:'http://www.arabalar.com.tr/bmw/x6',
},
{
    name: 'Audi A3',
    image: 'İmg/audi.jpg',
    link:'http://www.arabalar.com.tr/audi/a3',
},
{
    name: 'Mercedes E serisi',
    image: 'İmg/Mercedes.jpg',
    link:'http://www.arabalar.com.tr/mercedes/e-serisi',
},
];

var index=0;
var slidecount=models.length;
var interval;
var settings={
    duration:'1000',
    random: true,
};
init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){

    index--;
    showSlide(index);

});
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index++;
    showSlide(index);


});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        settings.random=false;
        clearInterval(interval);
   
       
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        settings.random=true;
        init(settings);
    })
});


function init(settings){
    var prev;
   interval= setInterval(function(){
        if(settings.random){
            do{
                index=Math.floor(Math.random()*slidecount); 
            }
            while(index==prev)
           prev=index;
        }
        else{
            if(slidecount==index +1){
                index=-1;
            }
            showSlide(index);
            console.log(index);
             index++;
        }
        showSlide(index);



    },settings.duration)
}


function showSlide(i)
{
    index=i;
    if(i<0){
        index=slidecount-1;
    }
    if(i>=slidecount){
        index=0;
    }
    
        document.querySelector('.card-tittle').textContent=models[index].name;
        document.querySelector('.card-img-top').setAttribute('src',models
        [index].image);
        
        
        document.querySelector('.card-link').setAttribute('href',models[index].link);
   
}
