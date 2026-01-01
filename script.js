const result = document.getElementById("result");
const expression = document.getElementById("expression");
const buttons = document.querySelectorAll("button");

let exp = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            exp = "";
            result.innerText = "0";
            expression.innerText = "";
        }
        else if (value === "DEL") {
            exp = exp.slice(0, -1);
            expression.innerText = exp;
        }
        else if (value === "ENTER") {
            try {
                let finalExp = exp
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                const answer = Function(`return ${finalExp}`)();
                result.innerText = answer;
            } catch {
                result.innerText = "Error";
            }
        }
        else {
            exp += value;
            expression.innerText = exp;
        }
    });
});
