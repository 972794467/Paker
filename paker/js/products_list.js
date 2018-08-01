function loadProducts() {
	for(index in arrProducts) {
		strProduct = arrProducts[index];
		var arrProList = eval(strProduct);
		var objList = document.getElementById("id_" + strProduct + "_list");
		for(listIndex in arrProList) {
			strProItem = arrProList[listIndex];
			var strTemp = "<div class='col-sm-3 product_item'>" +
				"<div onclick=" + '"showProductInfo(' + "'" + strProduct + "','" + strProItem + "')" + '">' +
				"<img src='images/products/" + strProduct + "/" + strProItem + "-.jpg'/>" +
				"<p>" + strProItem + "</p>" +
				"</div></div>";
			objList.innerHTML += strTemp;
		}
	}
}

function showProductInfo(strProduct,strProItem){
	$("#id_modal_img").attr("src","images/products/" + strProduct + "/" +"detail/" + strProItem + ".jpg");
    $("#id_modal_product_detail").modal("show");
}

function getDetailError(){
	$("#id_modal_img").attr("src","images/default.jpg");
}
