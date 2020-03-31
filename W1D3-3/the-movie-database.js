let title = 'Puff the Magic Dragon';
let duration = 30;
let stars = ['Puff', 'Jackie', 'Living Sneezes'];

function favoriteMovie(title) {
    return (`${title} lasts for ${duration} minutes. Stars: ${stars.join(', ')}`);
}

console.log(favoriteMovie('Puff the Magic Dragon'));