def solution(S):
    count = 0
    n = len(S)
    
# Check if the first character is the same as the last character
    if S[0] == S[-1]:
        count += 1
    
# Convert the string to a list for efficient splicing
    S = list(S)
    
    for i in range(n-1):
# Move the first character to the end
        S.append(S.pop(0))
        
# Check if the first character is the same as the last character
        if S[0] == S[-1]:
            count += 1
    
    return count


print(solution("abbaa"))  
print(solution("aaaa")) 
print(solution("abab")) 
print(solution("baba"))
print(solution("abcdefabcdef"))
