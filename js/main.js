//Document Ready
window.onload = readyDoc;
function readyDoc(){
    console.log('JS Loaded - Ok!');
    
    //Editar dirección actual
    $('.change-address').click(function(){
        $('.default').hide();
        $('.altern').show();
    });    

    //Estudio de crédito
    $('#open_modal-alt').click(function(){
        $('.contStudyProcess').fadeIn();
    });

    //Modales
    $('#open_modal').click(function () {
        $('#modalDefault').addClass('is--Showed');
    });

    $('#close_modal').click(function () {
        $('#modalDefault').removeClass('is--Showed');
    });

    //Canguro
    $('#open_modal-cang').click(function(){
        $('.contCanguroMain').addClass('is--ShowedCanguro');
        //$("html, body").animate({ 
        //    scrollTop: $('html, body').get(0).scrollHeight 
        //}, 100); 
    });
    $('.close_modal-cang').click(function(){
        $('.contCanguroMain').removeClass('is--ShowedCanguro');
    });


    

    //Cuando se tapean los inputs no hay un efecto de recoger checkbox
    $('.dinamicCheckboxContainer input[type="number"]').click(function(e) {
        e.preventDefault();
    });
    
    //CanguroLite
    $('#checkbox1').on( 'change', function() {
        if( $(this).is(':checked') ) {
            $('.dinamicOne').show();
            $('.canguroLite').addClass('is--ShowedCanguroLite');
            $('.contMainApp').addClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').addClass('is--ShowedCanguro');
        } else {
            $('.dinamicOne').hide();
            $('.canguroLite').removeClass('is--ShowedCanguroLite');
            $('.contMainApp').removeClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').removeClass('is--ShowedCanguro');
        }
    }); 

    $('#checkbox2').on( 'change', function() {
        if( $(this).is(':checked') ) {
            $('.dinamicTwo').show();
            $('.canguroLite').addClass('is--ShowedCanguroLite');
            $('.contMainApp').addClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').addClass('is--ShowedCanguro');
        } else {
            $('.dinamicOne').hide();
            $('.canguroLite').removeClass('is--ShowedCanguroLite');
            $('.contMainApp').removeClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').removeClass('is--ShowedCanguro');
        }
    }); 

    $('#checkbox3').on( 'change', function() {
        if( $(this).is(':checked') ) {
            $('.dinamicThree').show();
            $('.canguroLite').addClass('is--ShowedCanguroLite');
            $('.contMainApp').addClass('contMainApp-fluidCanguroLite');  
        } else {
            $('.dinamicOne').hide();
            $('.canguroLite').removeClass('is--ShowedCanguroLite');
            $('.contMainApp').removeClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').removeClass('is--ShowedCanguro');
        }
    }); 

    $('#checkbox4').on( 'change', function() {
        if( $(this).is(':checked') ) {
            $('.dinamicFour').show();
            $('.canguroLite').addClass('is--ShowedCanguroLite');
            $('.contMainApp').addClass('contMainApp-fluidCanguroLite');
        } else {
            $('.dinamicOne').hide();
            $('.canguroLite').removeClass('is--ShowedCanguroLite');
            $('.contMainApp').removeClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').removeClass('is--ShowedCanguro');
        }
    }); 

    $('#checkbox5').on( 'change', function() {
        if( $(this).is(':checked') ) {
            $('.dinamicFive').show();
            $('.canguroLite').addClass('is--ShowedCanguroLite');
            $('.contMainApp').addClass('contMainApp-fluidCanguroLite');
        } else {
            $('.dinamicOne').hide();
            $('.canguroLite').removeClass('is--ShowedCanguroLite');
            $('.contMainApp').removeClass('contMainApp-fluidCanguroLite');
            $('.contCanguroMain').removeClass('is--ShowedCanguro');
        }
    }); 

    //CanguroLite Contraoferta
    $('.contraOfertaDinamic input:checkbox').on( 'change', function() {
        if( $(this).is(':checked') ) {
            $('.canguroLite').addClass('is--ShowedCanguroLite');
            //$('.contMainApp').addClass('contMainApp-fluidCanguroLite');
        } else {
            $('.canguroLite').removeClass('is--ShowedCanguroLite');
        }
    });  
}

//Range slider
var valueBubble = '<output class="rangeslider__value-bubble" />';
function updateValueBubble(pos, value, context) {
    pos = pos || context.position;
    value = value || context.value;
    var $valueBubble = $('.rangeslider__value-bubble', context.$range);
    var tempPosition = pos + context.grabPos;
    var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

    if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = value;
    }
}

$('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function () {
        this.$range.append($(valueBubble));
        updateValueBubble(null, null, this);
    },
    onSlide: function (pos, value) {
        updateValueBubble(pos, value, this);
    }
});

