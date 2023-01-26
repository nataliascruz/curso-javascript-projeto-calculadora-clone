class CalcController {
    
    constructor(){

         this._locale ='pt-br';
         this._displayCalcEl = document.querySelector("#display");
         this._timeCalcEl= document.querySelector("#hora");
         this._dateCalcEl= document.querySelector("#data");
         this._currentDate;
         this.initialize(); 
         this.initButtonsEvent();
    }

    initialize(){

        setInterval(()=>{
            this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
                day: "2-digit",
                month : "long",
                year :"numeric"
            });
            this.displayTime = this.currentDate. toLocaleTimeString(this._locale);

        }, 1000);
        addEventListenerAll(element, events,fn ); {
            events.split(" ").forEach(event =>{

                element.addEventListenerAll(event, fn, false);

            });


        }

    }
    initButtonsEvent (){
         let buttons = document.querySelectorAll("#buttons > g, #parts > g");

         buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn,'clik drag', e =>{

                console.log(btn.className.baseVal.replace("btn",""));
    
             });
         })
         

    }

    get displayTime(){
        return this._timeCalcEl.innerHTML;
    }
    set displayTime(value){
        this._timeCalcEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateCalcEl.innerHTML;
    }
    set displayDate(value){
        this._dateCalcEl.innerHTML = value;
    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    get currentDate(){
        return new Date;
    }
    set currentDate(value){
        this._currentDate= value;
    }
}