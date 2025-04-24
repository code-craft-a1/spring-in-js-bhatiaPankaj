
export function computeStatistics(numbers){
    
   let average 
   let total = numbers.reduce((acc,curr) =>(acc+curr),0)
   average = total/numbers.length
   console.log(average)
   let min = Math.min(...numbers)
   let max = Math.max(...numbers)

   return {"average": average, "min": min, "max":  max}
}

