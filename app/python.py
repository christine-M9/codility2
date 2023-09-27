def solution(A):
    
    max_value = A[0]
    min_value = A[0]
    
    
    for num in A[1:]:
        if num > max_value:
            max_value = num
        if num < min_value:
            min_value = num
    
    
    amplitude = max_value - min_value
    
    return amplitude

A = [10, 2, 44, 15, 39, 20]
result = solution(A)
print(result)  
