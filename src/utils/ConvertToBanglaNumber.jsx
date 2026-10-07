const convertToBanglaNumber = (number) => {
    const banglaDigits = "০১২৩৪৫৬৭৮৯";

    return number
        .toString()
        .replace(/\d/g, (digit) => banglaDigits[digit]);
};

export default convertToBanglaNumber;

