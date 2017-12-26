function show_alert(ele) {
	$(ele).show();
}

function hide_alert(ele) {
	$(ele).hide();
	//coding...
}

function selectSex(event) {
	var ele_obj = $(event.currentTarget);
	if (!ele_obj.hasClass('action_sheet_selected')) {
		ele_obj.addClass('action_sheet_selected').siblings().removeClass('action_sheet_selected');
	}
}

function selectPayment(event) {
	var ele_obj = $(event.currentTarget);
	if (!ele_obj.hasClass('action_sheet_selected1')) {
		ele_obj.addClass('action_sheet_selected1').siblings().removeClass('action_sheet_selected1');
	}
}

function selectShipping(event) {
	var ele_obj = $(event.currentTarget);
	if (!ele_obj.hasClass('action_sheet_selected2')) {
		ele_obj.addClass('action_sheet_selected2').siblings().removeClass('action_sheet_selected2');
	}	
}

function selectGoodsType(event) {
	var ele_obj = $(event.currentTarget);
	if (!ele_obj.hasClass('chose')) {
		ele_obj.addClass('chose').siblings().removeClass('chose');
	}
}

function selectExpress(event) {
	var ele_obj = $(event.currentTarget);
	if (!ele_obj.hasClass('exress_label_checked')) {
		ele_obj.addClass('exress_label_checked').siblings().removeClass('exress_label_checked');
	}
	setTimeout(function() {
		hide_alert('#express_company');
		$('.action_sheet_express_content').children(':first').addClass('exress_label_checked');
		ele_obj.removeClass('exress_label_checked');
	},100);

}

function addWeight(num) {
	var addNum = num ? num : 1;
	var kiloEle =  $('.action_sheet_kilo');
	var kilo = Number(kiloEle.html());
	console.log(kilo)
	kiloEle.html(kilo+addNum);
}

function minusWeight(num) {
	var kiloEle = $('.action_sheet_kilo');
	var kilo = Number(kiloEle.html());
	if(kilo == 1) {return;}
	var minusNum = num ? num : 1;
	kiloEle.html(kilo-minusNum);

}