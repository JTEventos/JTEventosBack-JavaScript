function dateFormat(date) {
    const dateSplit = date.split('/');
    return `${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`.toString();
}

module.exports = dateFormat;