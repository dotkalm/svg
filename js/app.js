const mainDiv = document.querySelector('div');
const mainSvg = document.querySelector('svg');

class Line {
    constructor(peak1=20, peak2=1000, peak3=0, peak4=1000, peak5=0){
        this.peak1 = peak1;
        this.peak2 = peak2;
        this.peak3 = peak3;
        this.peak4 = peak4;
        this.peak5 = peak5;
        
    }
    initLine(){
        const peakOne = setInterval(() => {
            this.peak1 ++;
            if(this.peak1 === 1000){clearInterval(peakOne)}
            mainSvg.innerHTML=`<polyline  stroke="#808ff0" stroke-width="12" stroke-miterlimit="10" points="${this.peak1},${this.peak2} 34.25,${this.peak1} ${this.peak2},${this.peak4} ${this.peak2},${this.peak4} ${this.peak4},${this.peak3}"/>`;
            
        }, 100);

        // for (let i=this.peak1; i<200; i++){
            
        // }
        const peakTwo = setInterval(() => {
            this.peak2--
            this.peak3+= 5;
            this.peak4-= 4;
            }, 100);

        this.movePeak1();
        

    }
    movePeak1(){
        
        
    }

}
const newLine2 = new Line();
        newLine2.initLine();
        newLine2.movePeak1();

//<polyline fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" points=""/>