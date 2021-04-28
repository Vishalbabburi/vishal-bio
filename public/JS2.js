function monday(){               //time table-days click here button
    alert('At this time I would be working on Web development project(tomorrow is the deadline)');
}
function tuesday(){
    alert('I would be zipping all my project files to submit the project');
}
function wednesday(){
    alert('Study the chapter uploaded by Dr.Che');
}
function thursday(){
    alert('Study another chapter');
}
function friday(){
    alert('Oops! Another project uploaded on d2l,should work on it');
}function saturday(){
    alert('gathering required information and planing my project');
}function sunday(){
    alert('Start coding for project');
}
function popupform() {    //pop up form function
    document.getElementById("myform").style.display = "block";
  }
  function formsubmit(form){ //  this function is invoked on clicking submit button (client-side )
     name=form.elements['name'].value;
    var emailadd=form.elements['emailadd'].value;
    var number=form.elements['contact'].value;
    var comments=form.elements['comments'].value;
    var mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var namereg=/^[a-zA-Z ]{2,15}$/;
    var numreg=/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    if(name==='' || !name.match(namereg)){
        alert('please give a valid name');
        form.elements['name'].focus();
        return false;
    }
    else if(emailadd==='' || !emailadd.match(mailreg)){       //checking email address
        alert('please give a valid email adress');
        form.elements['emailadd'].focus();
        return false;
    }
    else if(number==='' || !number.match(numreg)){              //checking mobile number
        alert('please give a valid phone number as input');
        form.elements['number'].focus();
        return false;
    }
    else if(comments===''){                                      //checking if comments are entered
        alert('please enter your comments, they are valuable');
        form.elements['comments'].focus();
        return false
    }
    else{
        alert('Thanks for your details '+name+', a confirmation email will be sent to you shortly');
        return true;
    }
    
  }
  function close1() {     //this function is invoked when user clicks on close button
    document.getElementById("myform").style.display = "none";
  }
  function playpressed()    //event handler on clicking play button
  {
     document.querySelector('#canvas').style.display='block';
      canvas = document.getElementById("canvas");
      ctx1 = canvas.getContext("2d");
     ctx1.font = "25px Arial";
     ctx1.strokeText("please click on five arbitary points to see my shape transformation magic to happen",280,50);
  }
  function playpressed2()    //event handler on clicking play button for player2
  {
     document.querySelector('#canvas2').style.display='block';
      canvas2 = document.getElementById("canvas2");
      ctx2 = canvas2.getContext("2d");
     ctx2.font = "25px Arial";
     ctx2.strokeText("please click on five arbitary points to see my shape transformation magic to happen",280,50);
  }
  class Shapegame {
    constructor(x,y,ctx)
    {
        this.x=x;
        this.y=y;
        this.ctx=ctx;
    }//end constructor
    shapechange()
    {
        console.log('this.score in shapechange begining'+this.score)
      let x=this.x-200;
      //var p=x;
      console.log(+x);
      let y=this.y-160;
      var ctx=this.ctx;
      console.log(+y)
      //var q=y;
      var randomNum;
      randomNum=Math.floor(Math.random()*6);
      console.log(+randomNum);
      if(randomNum===0){
      ctx.fillStyle='blue';
      ctx.fillRect(x,y,40,100);
      setTimeout(this.change2,2000,x,y,ctx);
      }
      else if(randomNum===1){
          console.log("in random"+randomNum);
          ctx.strokestyle='purple';
          ctx.fillStyle='orange';
          ctx.beginPath();
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x-50, y+75);
          ctx.lineTo(x+50, y+75);
          ctx.fill();
          ctx.closePath();
          setTimeout(this.change4,2000,x,y,ctx);
      }
      else if(randomNum===2){
        console.log("in random"+randomNum);
            ctx.strokeStyle='darkvoilet';
            ctx.fillStyle='lavender';
            ctx.beginPath();
            ctx.arc(x,y,40,0,2*Math.PI,false);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            setTimeout(this.change3,2000,x,y,ctx);
      }
      else if(randomNum===3){
        console.log("in random"+randomNum);
        ctx.strokeStyle='darkvoilet';
        ctx.fillStyle='blue';
        ctx.beginPath()
        ctx.arc(x,y,40,0.5*Math.PI,1.5*Math.PI,false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        setTimeout(this.change3,2000,x,y,ctx);
      }
      else if(randomNum===4){
        console.log("in random"+randomNum);
        ctx.fillStyle='yellow';
        ctx.beginPath();
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x-50, y+75);
          ctx.lineTo(x+50, y+75);
          ctx.fill();
          ctx.closePath();
          setTimeout(this.change4,2000,x,y,ctx);
      }
      else{
        console.log("in random 5");
        ctx.fillStyle='darkvoilet';
        ctx.fillRect(x,y,100,40);
        setTimeout(this.change2,2000,x,y,ctx);
      }
      
    }//end shape change method
    change2(x,y,ctx){       //for rectangle
        score1=score1+1;  //incrementing score whenever in change 2
      console.log('in change2score is'+this.score)
      ctx.clearRect(x,y,100,100);
      ctx.save();
      ctx.translate(0,0);  
      ctx.fillStyle ='pink';
      ctx.fillRect(x,y, 60, 60);   
      console.log('in change 2  '+x+' '+y);     
      ctx.restore();
      console.log('going to dup');
      setTimeout(function change2dup(){console.log('in change2dup');
      ctx.clearRect(x,y,100,100);
      ctx.save();
      ctx.translate(0,0);
      if(click1>3) {
      ctx.fillStyle ='orange';}

      else ctx.fillStyle='green';
    ctx.fillRect(x,y, 100, 100);       
    ctx.restore(); 
},1000,x,y,ctx);
    }
    change3(x,y,ctx){   //for arcs
         
        ctx.clearRect(x-43,y-43,100,100);
        ctx.save();
        ctx.translate(0,0);  
        ctx.fillStyle ='red';
        ctx.fillRect(x,y, 100,40);   
        console.log('in change 3  '+x+' '+y);     
        ctx.restore();
        
      }
      change4(x,y,ctx){   //for triangles
       score1=score1+1;   //incrementing score when in change4
        ctx.clearRect(x-50,y,150,150);
        ctx.save();
        ctx.translate(0,0);  
        ctx.fillStyle ='yellow';
        ctx.fillRect(x,y, 100, 100);   
        console.log('in change 4  '+x+' '+y);     
        ctx.restore();
      }//end change 4
      calscore(){   //method to return score
        return score1;
      }
  }//end class shape game
click1=0;
click2=0;
var score1=0;
var result1;
var result2;
function getcoords(e)                   //for player1
{
  click1+=1;
  if(click1<=5){
  console.log('click value is'+click1);
  var p= e.clientX;
  var q= e.clientY;
      obj1=new Shapegame(p,q,ctx1);//ctx1 added
      obj1.shapechange();
  }//end if click
  else
  {    var scoreplay1=obj1.calscore();
       result1=scoreplay1;
     console.log('score1 of player 1 is '+scoreplay1);
    score1=0;
      document.querySelector('#canvas').style.display='none';
      document.querySelector('#gamep').style.display='block';


  }//end else part
  
}//end function getcoords
function getcoords2(e)                   //for player2
{
  click2+=1;
  if(click2<=5){
  console.log('click value is'+click2);
  var p= e.clientX;
  var q= e.clientY;
      obj2=new Shapegame(p,q-80,ctx2);//ctx2 added
      obj2.shapechange();
  }//end if click
  else
  {  var scoreplay2=obj2.calscore();
    result2=scoreplay2;
    console.log('score1 of player 2 is '+scoreplay2);
    score1=0;
      document.querySelector('#canvas2').style.display='none';
      document.getElementById('gamep').style.display='block';
      document.getElementById('resultbtn').style.display='block';
      

  }//end else part
  
}//end function getcoords
function viewresult(){      // function to view the result of game
            if(result1>result2){
               document.getElementById('resultdisplay1').style.display='block';
               
            }
            else if(result1<result2){
               document.getElementById('resultdisplay2').style.display='block';
            }
            else{
                document.getElementById('resultdisplaytie').style.display='block';
                
            }

}