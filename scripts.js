// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
 let status = document.getElementById("flightStatus");
 let shuttleHeight = document.getElementById("spaceShuttleHeight");
 let backGround = document.getElementById("shuttleBackground");
 let rocImag= document.getElementById("rocket");
      rocImag.style.position= "absolute";
      rocImag.style.left = '0px' ;
      rocImag.style.bottom = '0px' ;

 let right = this.document.getElementById('right');
 right.addEventListener('click',function(){
  movement = parseInt(rocImag.style.left) + 10 + 'px';
  rocImag.style.left = movement;
  shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;

 });

 let left  = this.document.getElementById('left');
 left.addEventListener('click',function(){
  movement = parseInt(rocImag.style.left) - 10 + 'px';
  rocImag.style.left = movement;
  shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;

 });

 let down = this.document.getElementById('down');
 down.addEventListener('click',function(){
  movement = parseInt(rocImag.style.bottom) - 10 + 'px';
  rocImag.style.bottom = movement;
  shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
 });

 let up = this.document.getElementById('up');
 up.addEventListener('click',function(){
  movement = parseInt(rocImag.style.bottom) + 10 + 'px';
  rocImag.style.bottom = movement;
  shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
 });

 let takeOff = this.document.getElementById('takeoff');
 takeOff.addEventListener('click' ,function(){
  output = window.confirm("Are you sure that the shuttle is ready for takeoff?");
  if(output){
    backGround.style.backgroundColor = 'blue';
    shuttleHeight.innerHTML = '10000';
    status.innerHTML = "Shuttle in flight";
  }
 });

 let land = this.document.getElementById('landing');
 land.addEventListener('click' ,function(){
  backGround.style.backgroundColor = 'green';
  window.confirm("The shuttle is landing. Landing gear engaged.");
    shuttleHeight.innerHTML = '0';
    status.innerHTML = "The shuttle has landed";
    rocImag.style.left = '0px' ;
    rocImag.style.bottom = '0px' ;  
 });

 let abortMission = this.document.getElementById('missionAbort');
 abortMission.addEventListener('click' ,function(){
 output =  window.confirm("Are you sure that you want to abort the mission");
 if(output){
  backGround.style.backgroundColor = 'green';
  shuttleHeight.innerHTML = '0';
  status.innerHTML = "Mission aborted";
  rocImag.style.left = '0px' ;
  rocImag.style.bottom = '0px' ;  
 }
    
 });


});
