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

    })
});