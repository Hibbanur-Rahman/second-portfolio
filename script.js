var typed=new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function active()
{
    var icons=document.getElementsByClassName('item');
    for(var i=0;i<icons.length;i++)
    {
       icons[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    console.log( event.currentTarget.classList);
    var x=event.currentTarget.classList;
    console.log(x.value.includes('home1'));
    if(x.value.includes('home1'))
    {
        document.getElementById('home').classList.remove('hide');
        document.getElementById('about').classList.add('hide');
        document.getElementById('portfolio').classList.add('hide');
        document.getElementById('services').classList.add('hide');
        document.getElementById('contact-me').classList.add('hide');
    }
    else if(x.value.includes('about1')==true)
    {
        document.getElementById('about').classList.remove('hide');
        document.getElementById('home').classList.add('hide');
        document.getElementById('portfolio').classList.add('hide');
        document.getElementById('services').classList.add('hide');
        document.getElementById('contact-me').classList.add('hide');
    }
    else if(x.value.includes('portfolio1'))
    {
        document.getElementById('portfolio').classList.remove('hide');
        document.getElementById('home').classList.add('hide');
        document.getElementById('about').classList.add('hide');
        document.getElementById('services').classList.add('hide');
        document.getElementById('contact-me').classList.add('hide');
    }
    else if(x.value.includes('services1'))
    {
        document.getElementById('portfolio').classList.add('hide');
        document.getElementById('home').classList.add('hide');
        document.getElementById('about').classList.add('hide');
        document.getElementById('services').classList.remove('hide');
        document.getElementById('contact-me').classList.add('hide');
    }
    else if(x.value.includes('contact-me1'))
    {
        document.getElementById('portfolio').classList.add('hide');
        document.getElementById('home').classList.add('hide');
        document.getElementById('about').classList.add('hide');
        document.getElementById('services').classList.add('hide');
        document.getElementById('contact-me').classList.remove('hide');
    }
    console.log( event.currentTarget.classList.value);
}
function activate(section)
{
    var icons=document.getElementsByClassName('item');
    if(section=='home')
    {
        for(var i=0;i<icons.length;i++)
        {
            icons[i].classList.remove('active');
        }
        icons[0].classList.add('active');
    }
    else if(section=='about')
    {
        for(var i=0;i<icons.length;i++)
        {
            icons[i].classList.remove('active');
        }
        icons[1].classList.add('active');
    }
    else if(section=='services')
    {
        for(var i=0;i<icons.length;i++)
        {
            icons[i].classList.remove('active');
        }
        icons[2].classList.add('active');
    }
    else if(section=='portfolio')
    {
        for(var i=0;i<icons.length;i++)
        {
            icons[i].classList.remove('active');
        }
        icons[3].classList.add('active');
    }
    else if(section=='contact-me')
    {
        for(var i=0;i<icons.length;i++)
        {
            icons[i].classList.remove('active');
        }
        icons[4].classList.add('active');
    }
}