const n = 5;
const a = [1, 4, 3, 5, 6];

const f = new Array(n).fill(0);
f[0] = 1;

for (let i = 1; i < n; i++) {
    let m = 0;
    for (let j = 0; j < i; j++) {
        if (a[j] < a[i]) {
            if (f[j] > m) {
                m = f[j];
            }
        }
    }
    f[i] = m + 1;
}

const result = Math.max(...f);
console.log(f);
console.log(result);
