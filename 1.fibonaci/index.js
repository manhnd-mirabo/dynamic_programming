const n = 100;
const f = new Array(n).fill(0);

f[0] = 0;
f[1] = 1;

for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
}

console.log(f);
