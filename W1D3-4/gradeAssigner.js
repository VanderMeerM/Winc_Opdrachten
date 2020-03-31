function assignGrade(score) {
    if (score >= 90 && score <= 100) {
        return ('A');
    } else if (score > 75) {
        return ('B');
    } else if (score > 55) {
        return ('C');
    } else if (score > 50) {
        return ('D');
    } else if (score > 30) {
        return ('E');
    } else if (score > 20) {
        return ('F');
    }
}

for (i = 60; i <= 100; i++) {
    console.log(`For ${i} you got a ${assignGrade(i)}.`)
}
