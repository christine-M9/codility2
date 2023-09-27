function solution(S) {
    let count = 0;
    const n = S.length;
    
// Check if the first character is the same as the last character
    if (S[0] === S[n - 1]) {
        count++;
    }
    
    S = S.split('');
    
    for (let i = 0; i < n - 1; i++) {
// Move the first character to the end
        S.push(S.shift());
        
// Check if the first character is the same as the last character
        if (S[0] === S[n - 1]) {
            count++;
        }
    }
    
    return count;
}


console.log(solution("abbaa")); 
console.log(solution("aaaa")); 
console.log(solution("abab")); 
console.log(solution("abcdefabcdef"))
console.log(solution("baba"))