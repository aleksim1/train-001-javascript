//Print out numbers from 10 to 0 using a loop
process.stdout.write("10 seconds to ignition...")
    setTimeout(() => {
        process.stdout.write(" Starting Countdown!...\n")

    for(let i=10; i>=0;i--){
        setTimeout(function(){
            process.stdout.write(".."+i+"..\n")
        },(11-1)*1000)
        process.stdout.write("IGNITION!!")
    
    }
    setTimeout(function(){
           process.stdout.write("IGNITION!!\n")
    }, 12000);
}, 1000);
