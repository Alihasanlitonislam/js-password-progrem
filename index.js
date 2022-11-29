const ali = (x) => {
    alert(x)
}

const password = prompt("Enter the password")
const capitalLatter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const smalLatter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const signsLatter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', '[', ']', '{', '}', ';', ':', '|', '/', '?', '.', '>', ',', '<']
const numberLatter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
if (!password) ali("please enter the password");
else if (password.length < 8) ali("please enter the 8 digit");
else {
    const updatapassword = password.split("")
    const updataCapital = updatapassword.filter(x => capitalLatter.includes(x));
    const updatasmal = updatapassword.filter(x => smalLatter.includes(x));
    const updatasigns = updatapassword.filter(x => signsLatter.includes(x));
    const updataNumber = updatapassword.filter(x => numberLatter.includes(x));
    if (updataCapital.length && updatasmal.length && updatasigns.length && updataNumber.length) ali("password is supper string");
    else if ((updataCapital.length && updatasmal.length) || (updatasigns.length && updataNumber.length)) ali("password is manimam string")
    else ali("password is rignt")
}