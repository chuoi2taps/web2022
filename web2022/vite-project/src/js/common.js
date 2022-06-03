export function render(element, content) {
    // nếu tìm được element thì hiển thị
    if (element) {
        document.getElementById(element).innerHTML = content;
    }
}