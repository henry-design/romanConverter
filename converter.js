
 var romanToInt = function(s) {

    let message=[];
        let ans=[];
        let fin=0;
        let value=[];
        for(let i=0;i<s.length;i++){
           
            if(s.slice (i,i+1)=="I"){
                 value =1;
            }
             else if(s.slice (i,i+1)=="V"){
                 value =5;
            }
            else if(s.slice (i,i+1)=="X"){
                 value =10;
            }
            else if(s.slice (i,i+1)=="L"){
                 value =50;
            }
            else if(s.slice (i,i+1)=="C"){
                 value =100;
            }
            else if(s.slice (i,i+1)=="D"){
                 value =500;
            }
            else if(s.slice (i,i+1)=="M"){
                 value =1000;
            }
            message.push(value)
            
        }
        
        let messages=message.reverse()
    
        for(let i=0;i<messages.length;i++){
           
            if(messages[i]>messages[i+1]){
                let x=(messages[i]-messages[i+1])
                ans.push(x)
                i++
            }
            else{
                ans.push(messages[i])
            }
           
           
           
        }
         for (let i=0;i<ans.length;i++){
                fin=fin+ans[i]
            }
       return fin
    };
    romanToInt("III");