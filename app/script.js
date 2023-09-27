function solution(A){
    max_val = A[0]
    min_val = A[0]

    for(let i = 1; i < A.length; i++ ){
        let num = A[i]

        if(num > max_val){
            max_val = num

        }
        if (num < min_val){
            min_val = num
        }
        
    }
    let amplitude = max_val - min_val
    return amplitude;


}

let A = [10, 2, 44, 15, 39, 20];
let result = solution(A);
console.log(result)
