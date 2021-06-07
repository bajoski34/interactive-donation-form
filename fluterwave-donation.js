var donationOnceBtn, donationMonthlyBtn, p_btn_1, p_btn_2, p_btn_3, p_btn_4, p_btn_5, otherBtn, setDonationOption,
donationOption, setAmountOption, amountOption, optionHandler, dedicate,currencyCode,currentEntity, cC;

donationOnceBtn = $('#donation-once-btn');
donationMonthlyBtn = $('#donation-monthly-btn');
p_btn_1 = $('#price-1-btn');
p_btn_2 = $('#price-2-btn');
p_btn_3 = $('#price-3-btn');
p_btn_4 = $('#price-4-btn');
p_btn_5 = $('#price-5-btn');
otherBtn = $('#other-btn');
dedicate = $("#donation-dedication");
currencyCode = 'NGN'; // flw_currency_code

cC = $('#currentCurrency');
cC.text(currencyCode);

cC.on('change', function(){
    cC.text(currencyCode);
})


$('#currency-ngn').on('click', function(){
    currencyCode = 'NGN';
    cC.text(currencyCode);
    displayCurrentCurrency();  
})

$('#currency-usd').on('click', function(){
    currencyCode = 'USD';
    cC.text(currencyCode);
    displayCurrentCurrency();
})

$('#currency-ugx').on('click', function(){
    currencyCode = 'UGX';
    cC.text(currencyCode);
    displayCurrentCurrency();
})

$('#currency-ghs').on('click', function(){
    currencyCode = 'GHS';
    cC.text(currencyCode);
    displayCurrentCurrency();

})



var setCurrencyEntity = (entityCode) => {
        currentEntity = entityCode;
}

var displayCurrentCurrency = () => {
    switch (currencyCode) {
        case 'USD':
            setCurrencyEntity('&dollar;');
            break;
        case 'UGX':
            setCurrencyEntity('USh');
            break;
        case 'GHS':
            setCurrencyEntity('&#8373;');
            break;
        

        default:
            setCurrencyEntity('&#8358;');
            break;
    }

    $("[id='currency-symbol']").html(currentEntity);
    
    // p_btn_1.prepend(currentEntity);
    // p_btn_2.prepend(currentEntity);
    // p_btn_3.prepend(currentEntity);
    // p_btn_4.prepend(currentEntity);
    // p_btn_5.prepend(currentEntity);
    // theprice
}

displayCurrentCurrency();






$('#give-monthly').css('textDecoration', 'underline').css('cursor', 'pointer')
$('#give-monthly').on('click', function(){
    donationMonthlyBtn.trigger('click');
})

price_options = [p_btn_1,p_btn_2,p_btn_3,p_btn_4,p_btn_5,otherBtn];

setDonationOption = (opt) => {
    donationOption = opt;
}
setAmountOption = (amtopt) => {
    if(isNaN(parseInt(amtopt)) == false){
        amountOption = parseInt(amtopt); 
        $('#custom-price').addClass('d-none');
        $('#gift-donation-notice').show();
    }else{
        $('#gift-donation-notice').hide();
        $('#custom-price').removeClass('d-none');
    }
}



p_btn_1.on('click', function(){
    p_btn_1.css('white-space', 'nowrap');
    for (let i = 1; i < 7; i++) {
        if(i == 1){
            $(this).removeClass('bg-light');
            $(this).addClass('bg-warning').addClass('border-2').addClass('rounded').addClass('border-dark').css('color', 'white');
            setAmountOption($(this).val());
        }else{
            $('#price-'+i+'-btn').addClass('bg-light').css('color','black').removeClass('border-2').removeClass('border-dark');
            otherBtn.addClass('bg-light').css('color', 'black');

        }

    }
});

p_btn_2.on('click', function(){
    p_btn_2.css('white-space', 'nowrap');
    for (let i = 1; i < 7; i++) {
        if(i == 2){
            $(this).removeClass('bg-light');
            $(this).addClass('bg-warning').addClass('border-2').addClass('rounded').addClass('border-dark').css('color', 'white');
            setAmountOption($(this).val());
        }else{
            $('#price-'+i+'-btn').addClass('bg-light').css('color','black').removeClass('border-2').removeClass('border-dark');
            otherBtn.addClass('bg-light').css('color', 'black');

        }

    }
    
})

p_btn_3.on('click', function(){
    p_btn_3.css('white-space', 'nowrap');
    for (let i = 1; i < 7; i++) {
        if(i == 3){
            $(this).removeClass('bg-light');
            $(this).addClass('bg-warning').addClass('border-2').addClass('rounded').addClass('border-dark').css('color', 'white');
            setAmountOption($(this).val());
        }else{
            $('#price-'+i+'-btn').addClass('bg-light').css('color','black').removeClass('border-2').removeClass('border-dark');
            otherBtn.addClass('bg-light').css('color', 'black');

        }

    }
})

p_btn_4.on('click', function(){
    p_btn_4.css('white-space', 'nowrap');
    for (let i = 1; i < 7; i++) {
        if(i == 4){
            $(this).removeClass('bg-light');
            $(this).addClass('bg-warning').addClass('border-2').addClass('rounded').addClass('border-dark').css('color', 'white');
            setAmountOption($(this).val());
        }else{
            $('#price-'+i+'-btn').addClass('bg-light').css('color','black').removeClass('border-2').removeClass('border-dark');
            otherBtn.addClass('bg-light').css('color', 'black');

        }

    }
})

p_btn_5.on('click', function(){
    p_btn_5.css('white-space', 'nowrap');
    for (let i = 1; i < 7; i++) {
        if(i == 5){
            $(this).removeClass('bg-light');
            $(this).addClass('bg-warning').addClass('border-2').addClass('rounded').addClass('border-dark').css('color', 'white');
            setAmountOption($(this).val());
        }else{
            $('#price-'+i+'-btn').addClass('bg-light').css('color','black').removeClass('border-2').removeClass('border-dark');
            otherBtn.addClass('bg-light').css('color', 'black');
        }

    }
})

otherBtn.on('click', function(){
    for (let i = 1; i < 7; i++) {
        if(i == 6){
            $(this).removeClass('bg-light');
            $(this).addClass('bg-warning').addClass('border-2').addClass('rounded').addClass('border-dark').css('color', 'white');
            setAmountOption($(this).val());
        }else{
            $('#price-'+i+'-btn').addClass('bg-light').css('color','black').removeClass('border-2').removeClass('border-dark');
        }

    }
})



donationOnceBtn.on('click', function(){
    donationMonthlyBtn.removeClass('bg-warning');
    donationMonthlyBtn.addClass('bg-light').css('color', 'black');
    $(this).removeClass('bg-light');
    $(this).addClass('bg-warning').css('color', 'white');
    p_btn_1.trigger('click');
    setDonationOption('once');
});

donationMonthlyBtn.on('click', function(){
    donationOnceBtn.removeClass('bg-warning');
    donationOnceBtn.addClass('bg-light').css('color', 'black');
    $(this).removeClass('bg-light');
    $(this).addClass('bg-warning').css('color', 'white');
    p_btn_3.trigger('click');
    setDonationOption('monthly');
});



dedicate.on("change",function(){
    if($(this).prop("checked")){
            $('#dedication-form').removeClass('d-none');
    }else{
        $('#dedication-form').addClass('d-none');
    }
});
