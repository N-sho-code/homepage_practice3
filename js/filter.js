// フィルター機能
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('#filter input[type="checkbox"]');
    const items = document.querySelectorAll('.menu-item');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selected = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            items.forEach(item => {
                const category = item.dataset.category;
                item.style.display = selected.includes(category) ? 'block' : 'none';
            });
        });
    });
});