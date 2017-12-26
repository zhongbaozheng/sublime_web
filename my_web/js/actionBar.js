function selectItem(event,selectedClass) {
	var ele_obj = $(event.currentTarget);
	if (!ele_obj.hasClass(selectedClass)) {
		ele_obj.addClass(selectedClass).siblings().removeClass(selectedClass);
	}
}