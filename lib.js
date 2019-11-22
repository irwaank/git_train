module.exports.absolute = function(number) {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
};

module.exports.positive = function(number) {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
};

module.exports.negative = function(number) {
    if (number > 0) return -number;
    if (number < 0) return number;
    return 0;
};
