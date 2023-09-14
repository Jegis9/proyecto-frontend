window.addEventListener('DOMContentLoaded', (event) => {
    const tableContainer = document.querySelector('.table-container');
    const tableHead = document.querySelector('thead');

    tableContainer.addEventListener('scroll', () => {
        tableHead.style.transform = `translate(0, ${tableContainer.scrollTop}px)`;
    });
});
