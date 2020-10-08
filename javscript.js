let firstBreak= document.getElementById('1');
let firstPara= document.getElementById('2');
let secondPara= document.getElementById('3');
let firstButton= document.getElementById('4');
let secondButton= document.getElementById('5');
let secondBreak= document.getElementById('6');
let thirdBreak= document.getElementById('7');

let screen= document.getElementById('screen');

function aboutMob(){

   firstBreak.remove();
   firstPara.remove();
   secondPara.remove();
   firstButton.remove();
   secondButton.remove();
   secondBreak.remove();
   thirdBreak.remove();

   let programInfoHeading= document.createElement('P');
   let programInfoPara= document.createElement('P');

   programInfoHeading.textContent='The Negative to Positive Emotion Converter!';
   programInfoPara.textContent='Helps users change their thoughts through reflection. Just click reset, then start and follow instructions.';

   
   let resetButton= document.createElement('button');
   resetButton.setAttribute('onclick','window.location.reload(false);');
   resetButton.textContent='reset';


   screen.appendChild(programInfoHeading);
   screen.appendChild(programInfoPara);
   screen.appendChild(firstBreak);
   screen.appendChild(resetButton);
   



   

}

let aboutMobButton= document.getElementById('5');
aboutMobButton.addEventListener('click',aboutMob);




//start button process


function start(){

   firstBreak.remove();
   firstPara.remove();
   secondPara.remove();
   firstButton.remove();
   secondButton.remove();
   secondBreak.remove();
   thirdBreak.remove();

   let para= document.createElement('P');
   para.textContent='Feelings and emotions are chemical reactions that occur in our body that make us experience happiness, sadness, anger, frustration and more.'
   let firstQuestion= document.createElement('P');
   firstQuestion.textContent='What negative FEELING do you currently have?';


   let firstAnswer= document.createElement('textarea');
   firstAnswer.setAttribute('id','firstAnswer')
   firstAnswer.setAttribute('placeholder','For example write down: anxious, angry or sad, whatever emotion that you feel is negative and want to conver to positive.');
   firstAnswer.setAttribute('maxlength','5000');
   firstAnswer.style.width= '90%';
   firstAnswer.style.height='5em';




   
   let firstNextButton= document.createElement('button');
   firstNextButton.setAttribute('id','firstNextButton');
   firstNextButton.textContent='next';


   screen.appendChild(para);
   screen.appendChild(firstQuestion);
   screen.appendChild(firstAnswer);
   screen.appendChild(firstBreak);
   screen.appendChild(firstNextButton);

   function next(){

      let firstAnswerValue= document.getElementById('firstAnswer').value;
      screen.removeChild(firstQuestion);
      screen.removeChild(firstAnswer);
      screen.removeChild(firstBreak);
      screen.removeChild(firstNextButton);
      screen.removeChild(para);

      let para1= document.createElement('P');
      para1.textContent='Thinking, is the process of your brain making calculations about information it had received.';

   
      let secondQuestion= document.createElement('P');
      secondQuestion.textContent=`What are you THINKING that makes you feel the negative emotion: "${firstAnswerValue}"?`;
   
   
      let secondAnswer= document.createElement('textarea');
      secondAnswer.setAttribute('id','secondAnswer');
      secondAnswer.setAttribute('placeholder','For example maybe its because you have to give a work or class presentation tomorrow? What are you thinking?');
      secondAnswer.setAttribute('maxlength','5000');
      secondAnswer.style.width= '90%';
      secondAnswer.style.height='5em';
   
   
   
   
      
      let secondNextButton= document.createElement('button');
      secondNextButton.setAttribute('id','secondNextButton');
      secondNextButton.textContent='next';

      screen.appendChild(para1);

      screen.appendChild(secondQuestion);
      screen.appendChild(secondAnswer);
      screen.appendChild(firstBreak);
      screen.appendChild(secondNextButton);
   

      function next1(){
         let secondAnswerValue= document.getElementById('secondAnswer').value;

         screen.removeChild(secondQuestion);
         screen.removeChild(secondAnswer);
         screen.removeChild(firstBreak);
         screen.removeChild(secondNextButton);
         screen.removeChild(para1);

         let para2= document.createElement('P');
         para2.textContent='We think because something usually happens to us or because nothing is happening to us and our brain is reflecting on different things it has experienced.';
   
      
         let thirdQuestion= document.createElement('P');
         thirdQuestion.textContent=`Why are you THINKING: "${secondAnswerValue}" that is making you FEEL the negative emotion: "${firstAnswerValue}"?`;
      
      
         let thirdAnswer= document.createElement('textarea');
         thirdAnswer.setAttribute('id','thirdAnswer');
         thirdAnswer.setAttribute('placeholder','For example maybe everytime you gave a work or class presentation, you messed it up and people laughed at you and you didn\'t like that? What is you \'why\'?');
         thirdAnswer.setAttribute('maxlength','5000');
         thirdAnswer.style.width= '90%';
         thirdAnswer.style.height='5em';
      
      
      
         
         let thirdNextButton= document.createElement('button');
         thirdNextButton.setAttribute('id','thirdNextButton');
         thirdNextButton.textContent='next';

         screen.appendChild(para2);
   
         screen.appendChild(thirdQuestion);
         screen.appendChild(thirdAnswer);
         screen.appendChild(firstBreak);
         screen.appendChild(thirdNextButton);



         function next2(){
            let thirdAnswerValue= document.getElementById('thirdAnswer').value;
   
            screen.removeChild(thirdQuestion);
            screen.removeChild(thirdAnswer);
            screen.removeChild(firstBreak);
            screen.removeChild(thirdNextButton);
            screen.removeChild(para2);

            let para3= document.createElement('P');
            para3.textContent='The reason why we think something tends to fuel what we think and influence how we feel, even if it is negative feelings.';
      
         
            let fourthQuestion= document.createElement('P');
            fourthQuestion.textContent=`What is it about:"${thirdAnswerValue}" that makes it the reason you are THINKING: "${secondAnswerValue}" that is making you FEEL the negative feeling: "${firstAnswerValue}"?`;
         
         
            let fourthAnswer= document.createElement('textarea');
            fourthAnswer.setAttribute('id','fourthAnswer');
            fourthAnswer.setAttribute('placeholder',`For example, maybe you don\'t like being laughed at or messing up? What is it about ${thirdAnswerValue}?`);
            fourthAnswer.setAttribute('maxlength','5000');
            fourthAnswer.style.width= '90%';
            fourthAnswer.style.height='5em';
         
         
         
            
            let fourthNextButton= document.createElement('button');
            fourthNextButton.setAttribute('id','fourthNextButton');
            fourthNextButton.textContent='next';

            screen.appendChild(para3);
      
            screen.appendChild(fourthQuestion);
            screen.appendChild(fourthAnswer);
            screen.appendChild(firstBreak);
            screen.appendChild(fourthNextButton);
         
           

            function next3(){
               let fourthAnswerValue = document.getElementById('fourthAnswer').value;
      
               screen.removeChild(fourthQuestion);
               screen.removeChild(fourthAnswer);
               screen.removeChild(firstBreak);
               screen.removeChild(fourthNextButton);
               screen.removeChild(para3);

               let para4= document.createElement('P');
               para4.textContent='Writing the reason we think something is a theraputic process that helps give perspective about an issue we are dealing with.';
         
            
               let fifthQuestion= document.createElement('P');
               fifthQuestion.textContent=`Write out a mental MOVIE SCENE of "${fourthAnswerValue}" to get it out of your head.`;
            
            
               let fifthAnswer= document.createElement('textarea');
               fifthAnswer.setAttribute('id','fifthAnswer');
               fifthAnswer.setAttribute('placeholder','For example, when you were younger and you messed up or people laughed at you, they stopped taking you serious or thought that you were a competent person, so they did\'t bother respecting you anymore which made it difficult to do your work or pass some of your classes.');
               fifthAnswer.setAttribute('maxlength','5000');
               fifthAnswer.style.width= '90%';
               fifthAnswer.style.height='5em';
            
            
            
               
               let fifthNextButton= document.createElement('button');
               fifthNextButton.setAttribute('id','fifthNextButton');
               fifthNextButton.textContent='next';

               screen.appendChild(para4);
         
               screen.appendChild(fifthQuestion);
               screen.appendChild(fifthAnswer);
               screen.appendChild(firstBreak);
               screen.appendChild(fifthNextButton);
            
               //insert next function here

               function next4(){
                  let fifthAnswerValue = document.getElementById('fifthAnswer').value;
         
                  screen.removeChild(fifthQuestion);
                  screen.removeChild(fifthAnswer);
                  screen.removeChild(firstBreak);
                  screen.removeChild(fifthNextButton);
                  screen.removeChild(para4);

                  let para5= document.createElement('P');
                  para5.textContent='When we have a better perspective about an issue, we can see better what isn\'t true about the issue.';
            
               
                  let sixthQuestion= document.createElement('P');
                  sixthQuestion.textContent=`Write what the LIE about this scene is: "${fifthAnswerValue}"`;
               
               
                  let sixthAnswer= document.createElement('textarea');
                  sixthAnswer.setAttribute('id','sixthAnswer');
                  sixthAnswer.setAttribute('placeholder','For example, when you messed up or people laughed at you, that was just that past and it has no reflection on how competent of a person you are!');
                  sixthAnswer.setAttribute('maxlength','5000');
                  sixthAnswer.style.width= '90%';
                  sixthAnswer.style.height='5em';
               
               
               
                  
                  let sixthNextButton= document.createElement('button');
                  sixthNextButton.setAttribute('id','sixthNextButton');
                  sixthNextButton.textContent='next';

                  screen.appendChild(para5);
            
                  screen.appendChild(sixthQuestion);
                  screen.appendChild(sixthAnswer);
                  screen.appendChild(firstBreak);
                  screen.appendChild(sixthNextButton);
               
                  //insert next function here

                  function next5(){
                     let sixthAnswerValue = document.getElementById('sixthAnswer').value;
            
                     screen.removeChild(sixthQuestion);
                     screen.removeChild(sixthAnswer);
                     screen.removeChild(firstBreak);
                     screen.removeChild(sixthNextButton);
                     screen.removeChild(para5);

                     let para6= document.createElement('P');
                     para6.textContent='When we know what is a lie about an issue, we can find out what is the truth about it instead.';
               
                  
                     let seventhQuestion= document.createElement('P');
                     seventhQuestion.textContent=`Write what the ACTUAL TRUTH is as opposed to this lie: "${sixthAnswerValue}"`;
                  
                  
                     let seventhAnswer= document.createElement('textarea');
                     seventhAnswer.setAttribute('id','seventhAnswer');
                     seventhAnswer.setAttribute('placeholder','For example, perhaps not every one\'s respect is worth having. Some people are mean and sometimes nobody needs the respect of a mean person or to care if a mean person laughs at them. And when you work hard, you prove your competence better than most.');
                     seventhAnswer.setAttribute('maxlength','5000');
                     seventhAnswer.style.width= '90%';
                     seventhAnswer.style.height='5em';
                  
                  
                  
                     
                     let seventhNextButton= document.createElement('button');
                     seventhNextButton.setAttribute('id','seventhNextButton');
                     seventhNextButton.textContent='next';

                     screen.appendChild(para6);
               
                     screen.appendChild(seventhQuestion);
                     screen.appendChild(seventhAnswer);
                     screen.appendChild(firstBreak);
                     screen.appendChild(seventhNextButton);
                  
                     //insert next function here

                     function next6(){
                        let seventhAnswerValue = document.getElementById('seventhAnswer').value;
               
                        screen.removeChild(seventhQuestion);
                        screen.removeChild(seventhAnswer);
                        screen.removeChild(firstBreak);
                        screen.removeChild(seventhNextButton);
                        screen.removeChild(para6);

                        let para7= document.createElement('P');
                        para7.textContent='When we have evidence of the truth, that fuels our confidence about it.';
                  
                     
                        let eigthQuestion= document.createElement('P');
                        eigthQuestion.textContent=`Write different evidence to back up this ACTUAL TRUTH: "${seventhAnswerValue}"`;
                     
                     
                        let eigthAnswer= document.createElement('textarea');
                        eigthAnswer.setAttribute('id','eigthAnswer');
                        eigthAnswer.setAttribute('placeholder','For example, the times x,y,z when you worked hard you did a great job and people were happy.')
                        eigthAnswer.setAttribute('maxlength','5000');
                        eigthAnswer.style.width= '90%';
                        eigthAnswer.style.height='5em';
                     
                     
                     
                        
                        let eigthNextButton= document.createElement('button');
                        eigthNextButton.setAttribute('id','eigthNextButton');
                        eigthNextButton.textContent='next';

                        screen.appendChild(para7);
                  
                        screen.appendChild(eigthQuestion);
                        screen.appendChild(eigthAnswer);
                        screen.appendChild(firstBreak);
                        screen.appendChild(eigthNextButton);
                     
                        //insert next function here

                        function next7(){
                           let eigthAnswerValue = document.getElementById('eigthAnswer').value;
                  
                           screen.removeChild(eigthQuestion);
                           screen.removeChild(eigthAnswer);
                           screen.removeChild(firstBreak);
                           screen.removeChild(eigthNextButton);
                           screen.removeChild(para7);

                           let para8= document.createElement('P');
                           para8.textContent='Goodluck :)';
                     
                        
                           let ninthQuestion= document.createElement('P');
                           ninthQuestion.textContent=`Whenever: "${fourthAnswerValue}" occurs, you need to remember:"${seventhAnswerValue}" and all the evidence to back it up, which is: "${eigthAnswerValue}".`;
                        
                        
                           let ninthAnswer= document.createElement('P');
                           ninthAnswer.textContent='Copy and paste above final text somewhere to remember how to control the particular thoughts you don\'t want to have.'
                        
                        
                        
                        
                           
                           let resetButton= document.createElement('button');
                           resetButton.setAttribute('onclick','window.location.reload(false);');
                           resetButton.textContent='reset';


                     
                           screen.appendChild(ninthQuestion);

                           screen.appendChild(para8);

                           screen.appendChild(ninthAnswer);
                           screen.appendChild(firstBreak);
                           screen.appendChild(resetButton);
                        
                           //insert next function here
                        
                        }
                        
                        let nextButton= document.getElementById('eigthNextButton');
                        nextButton.addEventListener('click',next7);
                     
                     }
                     
                     let nextButton= document.getElementById('seventhNextButton');
                     nextButton.addEventListener('click',next6);
                  
                  }
                  
                  let nextButton= document.getElementById('sixthNextButton');
                  nextButton.addEventListener('click',next5);
               
               }
               
               let nextButton= document.getElementById('fifthNextButton');
               nextButton.addEventListener('click',next4);
            
            }
            
            let nextButton= document.getElementById('fourthNextButton');
            nextButton.addEventListener('click',next3);
         
         }
         
         let nextButton= document.getElementById('thirdNextButton');
         nextButton.addEventListener('click',next2);
      
         
      
      }
      
      let nextButton= document.getElementById('secondNextButton');
      nextButton.addEventListener('click',next1);
      
   
   }
   
   let nextButton= document.getElementById('firstNextButton');
   nextButton.addEventListener('click',next);
   


   

}

let startButton= document.getElementById('4');
startButton.addEventListener('click',start);
