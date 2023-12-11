const question =[

    {        'que':"My name is ",
              'a': "Debasish",
              'b': "Debojit",
              'c': "Debojyal",
              'd': "David",
              'correct':"a",
    
    },
    {
        'que':"My Degree is ",
        'a': "Btech",
        'b': "Bsc",
        'c': "BA",
        'd': "Bcom",
        'correct':"a",
    
    },
    {
        'que':"My Branch is ",
        'a': "ETC",
        'b': "CSE",
        'c': "EE",
        'd': "ME",
        'correct':"a",
    
    },
    {
        'que':"My Wifi is ",
        'a': "Airtel",
        'b': "BSNL",
        'c': "JIO",
        'd': "Railwire",
        'correct':"b",
    
    }
]

const index =0;
const l = question.length;
const right =0;
const wrong  = 0;
const queBox=document.getElementById("questionBox");
const optionselector= document.querySelectorAll('.option');


const loadscreen = () =>
{
    reset();
const ques = question[index];
queBox.innerText=`${index+1}) ${ques.que}`;

optionselector[0].nextElementSibling=ques.a;
optionselector[1].nextElementSibling=ques.b;
optionselector[2].nextElementSibling=ques.c;
optionselector[3].nextElementSibling=ques.d;
 
}
const reset =()=>{
    optionselector.forEach(
        (input) => {
         input.checked =false;
            
         
        }

 )

}
const getAnswewer =()=>{
    optionselector.forEach(
           (input) => {
            if (input.checked) {
               return input.Value; 
            }
           }

    )
        

    
}

const btnsubmit =()=>{

    const btns = document.getElementById('submit');

    btns.addEventListener('click', function(){
              
       const ans = getAnswewer();
       if(ans=== ques.correct){
           right++;
       }
          else{
            wrong++;
          }
          index++;
          loadscreen();
          return;
    })

}

loadscreen();