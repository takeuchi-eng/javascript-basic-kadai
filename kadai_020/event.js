// HTML要素を取得
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンのクリックイベントを設定
buttonElement.addEventListener("click", () => {
    textElement.textContent = "ボタンをクリックしました";
});
