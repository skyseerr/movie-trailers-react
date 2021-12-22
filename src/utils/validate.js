exports.validateLogin = (email, password) => {
    let errors = [];
    const urlRegex = /.+@.+\..+/gi;

    if(email === ''){
        errors.push('Email is required!');
    } else if (email.match(urlRegex) === null){
        errors.push('Invalid email!');
    }

    if(password === ''){
        errors.push('Password is required!');
    }

    return errors;
};

exports.validateRegister = (name, email, password, repassword) => {
    let errors = [];
    const urlRegex = /.+@.+\..+/gi;
    
    if(name === '' || (name.length > 20 || name.length < 5) ){
        errors.push('Username should be between 5 and 20 characters.');
    }

    if(email === ''){
        errors.push('Email is required!');
    } else if(email.match(urlRegex) === null){
        errors.push('Invalid email!');
    }

    if(password === ''){
        errors.push('Password is required!');
    }

    if(repassword === ''){
        errors.push('Repeat password is required!');
    }

    if(password !== repassword){
        errors.push('Passwords don\'t match!');
    }
    return errors;
};

exports.validateForm = (title, description,year, duration, director, genre, trailerUrl, imageUrl) => {
    let errors = [];

    let urlRegex = /^https?:\/\//gi;

    if(title === ''){
        errors.push('Title is required!');
    } else if((title.length > 50 || title.length < 3)){
        errors.push('Title should be between 3 and 50 characters.');
    }

    if(description === ''){
        errors.push('Description is required!');
    } else if (description.length > 300){
        errors.push('Description is required and it\'s length should be less than 300 characters.');
    }

    if(year === ''){
        errors.push('Year is required!');
    } else if(isNaN(year)){
        errors.push('Year should be number!');
        
    }

    if(duration === ''){
        errors.push('Duration is required!');
    } else if (isNaN(duration)){
        errors.push('Duration should be number!');
    }

    if(director === ''){
        errors.push('Director\'s name is required!');
    } else if (director.length > 50){
        errors.push('Director\'s name should be less than 50 characters.');
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
};