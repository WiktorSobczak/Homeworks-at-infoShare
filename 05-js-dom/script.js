const inputBill = document.querySelector("#bill");
const inputQuantity = document.querySelector("#quantity");
const btnFive = document.querySelector(".five-percent");
const btnTen = document.querySelector(".ten-percent");
const btnFifteen = document.querySelector(".fifteen-percent");
const btnCalculate = document.querySelector(".button-calculate");
const valueTip = document.querySelector(".value-tip");
const valueTotal = document.querySelector(".value-total");
const btnReset = document.querySelector(".button-reset");
let counterTip = 0;
let counterBill = 0;
let currentRatio = "";
let counterTotal = 0;

function functionNoTip() {
	counterTotal = inputBill.value / inputQuantity.value;
	valueTotal.innerText = "$" + counterTotal;
}

function setRatioFor5Percent() {
	let parseBill = document.getElementById("bill").value;
	parseBill = parseFloat(parseBill);
	currentRatio = 0.05;
	counterTip = parseBill * currentRatio;
	counterTotal = counterTip + parseBill;
	console.log(counterTotal);
}

function setRatioFor10Percent() {
	let parseBill = document.getElementById("bill").value;
	parseBill = parseFloat(parseBill);
	currentRatio = 0.1;
	counterTip = parseBill * currentRatio;
	counterTotal = counterTip + parseBill;
	console.log(counterTotal);
}

function setRatioFor15Percent() {
	let parseBill = document.getElementById("bill").value;
	parseBill = parseFloat(parseBill);
	currentRatio = 0.15;
	counterTip = parseBill * currentRatio;
	counterTotal = counterTip + parseBill;
	console.log(counterTotal);
}

btnFive.addEventListener("click", setRatioFor5Percent);

btnTen.addEventListener("click", setRatioFor10Percent);

btnFifteen.addEventListener("click", setRatioFor15Percent);

function divideByInputQuantity() {
	let parseQuantity = document.getElementById("quantity").value;
	parseQuantity = parseFloat(parseQuantity);
	counterTotal = counterTotal / parseQuantity;
	valueTotal.innerText = "$" + counterTotal;
	counterTip = counterTip / parseQuantity;
	valueTip.innerText = "$" + counterTip;
}

btnCalculate.addEventListener("click", () => {
	functionNoTip();
	divideByInputQuantity();
});

function disabledButtonCalculate() {
	if (inputBill.value === "" && inputQuantity.value === "") {
		btnCalculate.toggleAttribute("disabled");
	} else {
		btnCalculate.removeAttribute("disabled");
	}
}

disabledButtonCalculate();

function usedButtonReset() {
	if (
		inputBill.value !== "" ||
		inputQuantity.value !== "" ||
		currentRatio !== ""
	) {
		inputBill.value = 0;
		inputQuantity.value = 0;
		currentRatio = 0;
	}
}

btnReset.addEventListener("click", () => {
	usedButtonReset();
});

inputBill.addEventListener("keyup", () => {
	disabledButtonCalculate();
	disabledResetButton();
});
inputQuantity.addEventListener("keyup", () => {
	disabledButtonCalculate();
	disabledResetButton();
});

function disabledResetButton() {
	if (
		inputBill.value === "" ||
		inputQuantity.value === "" ||
		currentRatio === ""
	) {
		btnReset.toggleAttribute("disabled");
	} else {
		btnReset.removeAttribute("disabled");
	}
}

function changeColors() {
	let buttons = document.querySelectorAll(".box-choice-input input"),
		prevButton;
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			if (prevButton) prevButton.className = "input-procent";

			this.className = "input-procent-active";
			prevButton = this;
		};
	}
}
changeColors();
