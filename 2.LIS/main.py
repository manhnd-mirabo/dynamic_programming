n = 5
a = [1, 4, 3, 5, 6]

f = [0] * n
f[0] = 1

for i in range(1, n):
    m = 0
    for j in range(i):
        if a[j] < a[i]:
            if f[j] > m:
                m = f[j]
                
    f[i] = m + 1
    
print(f)
print(max(f))