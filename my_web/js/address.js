function AddressItem(name,el,subAddresses) {
	this.name = name;
	this.el = el;
	this.subAddresses = subAddresses;
	AddressItem.prototype.addSubItems = function () {
		var eleObj = $(this.subAddresses[0].el);
		if(eleObj.children().length > 1) {
			eleObj.empty();
			var firstItem = document.createElement('option');
			$(firstItem).html('请选择');
			eleObj.append(firstItem);
		}
		for(var i = 0;i < this.subAddresses.length;i++) {
			var subItem = document.createElement('option');
			$(subItem).html(subAddresses[i].name);
			eleObj.append(subItem);
			if(subItem.subAddresses) {
				$(subItem).click(function(){
					alert('啊哈哈')
					subItem.addSubItems();
				});	
			}
		}
	};
}

function initItem() {
	var district1 = [new AddressItem('天河','#district'),new AddressItem('白云','#district')];
	var city1 = [new AddressItem('广州','#city',district1)];
	var province1 = new AddressItem('广东','#province',city1);

	var district2 = [new AddressItem('青秀','#district'),new AddressItem('桂岗','#district')];
	var city2 = [new AddressItem('南宁','#city',district2)];
	var province2 = new AddressItem('广西','#province',city2);

	var addressArray = [province1,province2];

	for(var i = 0;i < addressArray.length;i++) {
		var addressItem = document.createElement('option');
		$(addressItem).html(addressArray[i].name);
		$(addressArray[0].el).append(addressItem);
		if(addressArray[i].subAddresses) {
			$(addressArray[i]).change(function(){
				alert('ahahhahaha');
				addressItem.addSubItems();
			});	
		}
	} 

}




