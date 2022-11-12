var n = 5
var a = 0
var b = 1
var c
process.stdout.write(a+" ".toString())
process.stdout.write(b+" ".toString())
for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    process.stdout.write(c+" ".toString())
}



