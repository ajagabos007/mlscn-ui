$(document).ready(function(){

    $('#navbarNavDropdown').on('show.bs.collapse', function() {
        $( "#navbarTooggleIcon" ).hide();
        $('#navbarBrandMiniText').removeClass('d-none');
        $('#navbarBrandMiniText').show();
    })

    $('#navbarNavDropdown').on('hide.bs.collapse', function() {
        $( "#navbarTooggleIcon" ).show();
        $('#navbarBrandMiniText').addClass('d-none');
        $('#navbarBrandMiniText').hide();
        $('.mlscn-dropdown-toggle').closest('li').siblings().find('ul.dropdown-menu').slideUp(); // Hide siblings' dropdowns
        $('.mlscn-dropdown-toggle').closest('li').siblings().find('a.mlscn-dropdown-toggle').attr('aria-expanded', 'false'); // Collapse aria-expanded
    })

    $('.mlscn-dropdown-toggle').on('click', function(e){
        e.preventDefault();
        $(this).closest('li').siblings().find('ul.dropdown-menu').slideUp(); // Hide siblings' dropdowns
        $(this).closest('li').siblings().find('a.mlscn-dropdown-toggle').attr('aria-expanded', 'false'); // Collapse aria-expanded for other dropdowns

        const currentDropdown = $(this).next('ul.dropdown-menu');
        const isOpen = currentDropdown.is(':visible');

        $(this).attr('aria-expanded', !isOpen);

        $(this).closest('ul.dropdown-menu').find('ul.dropdown-menu').slideUp();

        currentDropdown.slideToggle();
       
    })

});