const canvas = document.getElementById('canvas');

var g = canvas.getContext('2d');
class Graphics1d{
    autodraw(){
        xmin=-10;
        xmax=10; 
        ymin=-10;
        ymax=10;
        funct="";
        W = 1000;
        H = 1000;
    }
    constructor(xmin, xmax, ymin, ymax, W, H, funct){
        this.xmin=xmin;
        this.xmax=xmax;
        this.ymin=ymin;
        this.ymax=ymax;
        this.W=W;
        this.H=H;
        this.funct=funct;
    }
   
   f(x){
       return  eval(this.funct);
   }
   draw(){ 
       g.beginPath();

        for(let x = (this.W/Math.abs(this.xmax-this.xmin))*(this.xmin-this.W/2);x <= (this.W/Math.abs(this.xmax-this.xmin))*(this.xmax-this.W/2); x+=0.2){
          console.log(x);
          
          
            if((-1)*this.f(x) < 0.05 && (-1)*this.f(x) > -0.05)  {
                g.beginPath(); g.strokeStyle = 'green';
                g.arc(x + this.W/2, (-1)*this.f(x) + this.H/2, 2, 0, 2 * Math.PI);
                g.stroke();
                g.closePath();
              
            }
         
            g.lineTo(x + this.W/2,(-1)*this.f(x) + this.H/2);
            g.strokeStyle = 'red';
            g.stroke();
        }
    }
        
   
}
g.lineWidth = 1;
g.strokeStyle = 'green';


function func(){

    let w = parseInt(document.getElementById('inp_6').value);
    let h = parseInt(document.getElementById('inp_7').value);
    canvas.width = w;
    canvas.height = h;
    let xmin = parseInt(document.getElementById('inp_2').value) + w/2;
    let xmax = parseInt(document.getElementById('inp_3').value) + w/2;
    let ymin = parseInt(document.getElementById('inp_4').value) + h/2;
    let ymax = parseInt(document.getElementById('inp_5').value) + h/2;
    
   
    let k1 = w/Math.abs(xmax-xmin);
    let k2 = h/Math.abs(ymax-ymin);

    
    g.moveTo(w/2,0);
    g.lineTo(w/2,h);
    g.moveTo(0,h/2)
    g.lineTo(w,h/2);
    g.stroke();
    for(let i=0; i<=w;i+=10*k1){
        g.strokeStyle = 'grey';
        g.beginPath();
        g.moveTo(i,0)
        g.lineTo(i,h);
        g.stroke();
    }
for(let i=0; i<=h;i+=10*k2){
        g.strokeStyle = 'grey';
        g.beginPath();
        g.moveTo(0,i)
        g.lineTo(w,i);
        g.stroke();
}
    delete obj;
    let v =document.getElementById('inp_1').value;
    let obj = new  Graphics1d(xmin,xmax,ymin,ymax,w,h,v);
    obj.draw();
    delete canvas;
    }



