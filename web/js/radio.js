function radio_check(event) {
	var ele_obj = $(event.currentTarget);
	if($(ele_obj).hasClass('certification_checked')) {
		$(ele_obj).removeClass('certification_checked');
		return;
	}

	$(ele_obj).addClass('certification_checked');
}