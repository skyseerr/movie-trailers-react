
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
        errors.push('Username should be between 5 and 20 characters.')
    }

    if(email === ''){
        errors.push('Invalid email!')
    }

    if(password == ''){
        errors.push('Password is required!')
    }

    if(repassword == ''){
        errors.push('Password is required!')
    }

    if(password !== repassword){
        errors.push('Passwords don\'t match!')
    }
    return errors;
}

