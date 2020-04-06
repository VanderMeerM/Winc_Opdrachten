for (i = 0; i <= 10; i++) {
    let multiply = i * 9;
    console.log(`${i} * 9 = ${multiply}`);
}

for (i = 0; i <= 10; i++) {
    for (multiply = 0; multiply <= 10; multiply++) {
        console.log(`${i} * ${multiply} = ${multiply * i}`);
    }
}