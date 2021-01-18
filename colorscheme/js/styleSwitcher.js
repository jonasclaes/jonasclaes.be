$(function () {

    const selector = '#themeSwitcher';
    let theme = $(selector).val();

    if (localStorage.getItem('theme') !== null) {
        theme = localStorage.getItem('theme');
    }

    switchTheme();

    $(selector).change(function () {
        theme = $(this).val();
        switchTheme();
    });

    function switchTheme() {
        $('link[data-style="secondary style"]').attr('href', theme);
        $(`${selector} option[value="${theme}"]`).prop('selected', 'selected');
        $('body').show();
        localStorage.setItem('theme', theme);
    }
});
