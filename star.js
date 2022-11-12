var n= 10
for (let i = 0; i < n; i++) {
    
    for (let j = n; j >0; j--) {
     
        if (i>=j) {
            process.stdout.write('*')   
        }
      else{
        process.stdout.write(' ')
      }
            
    }

   console.log(" ")
}