var donationOnceBtn, donationMonthlyBtn, p_btn_1, p_btn_2, p_btn_3, p_btn_4, p_btn_5, otherBtn, setDonationOption,
    donationOption, setAmountOption, amountOption, optionHandler;

    donationOnceBtn = $('#donation-once-btn');
    donationMonthlyBtn = $('#donation-monthly-btn');
    p_btn_1 = $('#price-1-btn');
    p_btn_2 = $('#price-2-btn');
    p_btn_3 = $('#price-3-btn');
    p_btn_4 = $('#price-4-btn');
    p_btn_5 = $('#price-5-btn');
    otherBtn = $('#other-btn');

    price_options = [p_btn_1,p_btn_2,p_btn_3,p_btn_4,p_btn_5,otherBtn];

    setDonationOption = (opt) => {
        donationOption = opt;
    }
    setAmountOption = (amtopt) => {
        if(isNaN(parseInt(amtopt)) == false){
            amountOption = parseInt(amtopt);  
        }else{

        }
    }

    donationOnceBtn.on('click', function(){
        donationMonthlyBtn.removeClass('bg-warning');
        donationMonthlyBtn.addClass('bg-light').css('color', 'black');
        $(this).removeClass('bg-light');
        $(this).addClass('bg-warning').css('color', 'white');
        setDonationOption('once');
    });

    donationMonthlyBtn.on('click', function(){
        donationOnceBtn.removeClass('bg-warning');
        donationOnceBtn.addClass('bg-light').css('color', 'black');
        $(this).removeClass('bg-light');
        $(this).addClass('bg-warning').css('color', 'white');
        setDonationOption('monthly');
    });

    function donationHandler(ele,){



    }

    optionHandler = (options) => {
        options.forEach(opt => {
            console.log(opt.val());
            opt.on('click', function(){
                setAmountOption = opt.val();
            })
        });
    }

    

    $( "li.third-item" ).siblings().css( "background-color", "red" );