function generatePassword(pwLength, lowercase, uppercase, numbers, symbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_-+=";

    let allowedChars = "";
    let genPassword = "";

    if (lowercase) allowedChars += lowercaseChars;
    if (uppercase) allowedChars += uppercaseChars;
    if (numbers) allowedChars += numbersChars;
    if (symbols) allowedChars += symbolsChars;

    if (pwLength <= 0) {
        return "(Password length must be at least 1)";
    }

    if (allowedChars.length === 0) {
        return "(Select at least one character type)";
    }

    for (let i = 0; i < pwLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        genPassword += allowedChars[randomIndex];
    }

    return genPassword;
}

const lengthInput = document.getElementById("length");
const lowercaseInput = document.getElementById("lowercase");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwordOutput = document.getElementById("password-output");
const copyBtn = document.getElementById("copy-btn");
const message = document.getElementById("message");

generateBtn.addEventListener("click", () => {
    const length = Number(lengthInput.value);
    const lowercase = lowercaseInput.checked;
    const uppercase = uppercaseInput.checked;
    const numbers = numbersInput.checked;
    const symbols = symbolsInput.checked;

    const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
    passwordOutput.value = password;
    message.textContent = password.startsWith("(") ? password : "Password generated!";
    message.style.color = password.startsWith("(") ? "red" : "green";
});

copyBtn.addEventListener("click", () => {
    if (passwordOutput.value.trim() !== "") {
        navigator.clipboard.writeText(passwordOutput.value)
            .then(() => {
                message.textContent = "Password copied to clipboard!";
                message.style.color = "blue";
            });
    }
});
