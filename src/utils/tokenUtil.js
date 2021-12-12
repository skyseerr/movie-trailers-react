const constructAuthHeader = (token) => {
    return 'Bearer ' + token
}

export default constructAuthHeader;