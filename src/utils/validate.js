
// exports.validateMovie = ({
//     title,
//     description,
//     year,
//     duration,
//     genre,
//     trailerUrl,
//     imageUrl
// }) => {

 



//     if(title.length >= 50 || title === ''){
//         setErrors( errors =>({
//             ...errors, 
//            error: 'Title must be less than 50 characters.'
//          }))
//     }

//     if(description.length >= 300 || description === ''){
//         setErrors( errors =>({
//             ...errors, 
//            error: 'Description must be less than 300 characters.'
//         }))
//     }

//     if(year.length !== 4 || year === '' || Number(year) !== Number){
//         setErrors( errors =>({
//             ...errors, 
//            error: 'Year must be 4 numbers. Example: 1990'
//         }))
//     }

//     if(duration.length > 4 || duration === '' || Number(duration) !== Number){
//         setErrors( errors =>({
//             ...errors, 
//            error: 'Running time must be in minutes. Example: 120'
//         }))
//     }

//     if(genre.length !== 0){
//         setErrors( errors =>({
//             ...errors, 
//            error: 'You must choose atleast one genre'
//         }))
//     }
// }

exports.validateRegister = (name, email, password, repassword) => {
    let errors = [];

    if(name === '' || (name.length > 20 || name.length < 5) ){
        errors.push('Username should be between 5 and 20 characters.');
    }

    if(email === ''){
        errors.push('Invalid email!');
    }

    if(password == ''){
        errors.push('Password is required!');
    }

    if(repassword == ''){
        errors.push('Password is required!');
    }

    if(password !== repassword){
        errors.push('Passwords don\'t match!');
    }
    return errors;
}

exports.validateForm = (title, description,year, duration, director, genre, trailerUrl, imageUrl) => {
    let errors = [];

    let urlRegex = /^https?:\/\//gi;

    if(title === '' || (title.length > 50 || title.length < 3) ){
        errors.push('Title should be between 3 and 50 characters.');
    }

    if(description === '' || description.length > 300){
        errors.push('Description is required and it\'s length should be less than 300 characters.');
    }

    if(year === '' || isNaN(year)){
        errors.push('Year should be number.');
    }

    if(duration === '' || isNaN(duration)){
        errors.push('Duration should be number.');
    }

    if(director === '' || director.length > 50){
        errors.push('Director\'s name is required and should be less than 50 characters.');
    }

    if(genre === '' || genre.length < 1){
        errors.push('You must choose atleast 1 genre.');
    }

    if(trailerUrl === '' || trailerUrl.match(urlRegex) === null){
        errors.push('Trailer URL is invalid.');
    }

    if(imageUrl === '' || imageUrl.match(urlRegex) === null){
        errors.push('Image URL is invalid.');
    }
    return errors;
}