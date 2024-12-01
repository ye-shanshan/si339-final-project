const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const label = this.closest('label');
        if (this.checked) {
            label.classList.add('line-through');
        } else {
            label.classList.remove('line-through');
        }
    });
});
