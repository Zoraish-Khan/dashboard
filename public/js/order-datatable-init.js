new gridjs.Grid({
	columns: [{
		name: "#",
		sort: {
			enabled: !1
		},
		formatter: function(e) {
			return gridjs.html('<div class="form-check"><input class="form-check-input" type="checkbox" id="orderidcheck01"><label class="form-check-label" for="orderidcheck01"></label></div>')
		}
	}, {
		name: "Order ID",
		formatter: function(e) {
			return gridjs.html('<span class="fw-semibold">' + e + "</span>")
		}
	}, {
		name: "Products Name",
		formatter: function(e) {
			return gridjs.html('<div class="d-flex align-items-center">  <img src="./img/'+ e[0] +'  " alt="" class="avatar-xs rounded-circle me-2" /><a href="#" class="text-body"> '+ e[1] +' </a> </div>')
		}
	}, "Date", "Total", {
		name: "Payment Status",
		formatter: function(e) {
			switch (e) {
				case "Paid":
					return gridjs.html('<span class="badge badge-pill bg-rgba-success font-12">' + e + "</span>");
				case "Chargeback":
					return gridjs.html('<span class="badge badge-pill bg-rgba-danger font-12">' + e + "</span>");
				case "Refund":
					return gridjs.html('<span class="badge badge-pill bg-rgba-warning font-12">' + e + "</span>");
				default:
					return gridjs.html('<span class="badge badge-pill bg-rgba-success font-12">' + e + "</span>")
			}
		}
	}, {
		name: "Payment Method",
		formatter: function(e) {
			switch (e) {
				case "Online":
					return gridjs.html('<i class="bi-credit-card me-2"></i>' + e);
				case "Visa":
					return gridjs.html('<i class="bi-wallet2 me-2"></i>' + e);
				case "Paypal":
					return gridjs.html('<i class="bi-paypal me-2"></i>' + e);
				case "COD":
					return gridjs.html('<i class="bi-wallet2 me-2"></i>' + e)
			}
		}
	}, {
		name: "View Details",
		formatter: function(e) {
			return gridjs.html('<button type="button" class="btn btn-rgba-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">' + e + "</button>")
		}
	}, {
		name: "Action",
		sort: {
			enabled: !1
		},
		formatter: function(e) {
			return gridjs.html('<div class="d-flex gap-3"><a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" class="text-success"><i class="bi-pencil font-16"></i></a><a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" class="text-danger"><i class="bi-trash font-16"></i></a></div>')
		}
	}],
	pagination: {
		limit: 7,
	},
	sort: !0,
	search: !0,
	data: [
		["", "#AE2540", ["product.png", "Apple Watch"], "07 Oct, 2021", "$400", "Paid", "Online", "View Details"],
		["", "#AE5623", ["product.png", "Nike Air Max"], "05 Oct, 2021", "$452", "Chargeback", "COD", "View Details"],
		["", "#AE6263", ["product.png", "Ray ban Glass"], "06 Oct, 2021", "$632", "Refund", "Paypal", "View Details"],
		["", "#AE4521", ["product.png", "Moise Watch"], "07 Oct, 2021", "$521", "Refund", "COD", "View Details"],
		["", "#AE5263", ["product.png", "Adda Slippers"], "07 Oct, 2021", "$521", "Paid", "Online", "View Details"],
		["", "#AE4526", ["product.png", "Jacket"], "06 Oct, 2021", "$365", "Chargeback", "COD", "View Details"],
		["", "#AE8965", ["product.png", "Baby Doll"], "07 Oct, 2021", "$452", "Paid", "Paypal", "View Details"],
		["", "#AE9658", ["product.png", "Dustbin Plastic"], "08 Oct, 2021", "$365", "Paid", "COD", "View Details"],
		["", "#AE7458", ["product.png", "Birthday Balloon"], "09 Oct, 2021", "$254", "Refund", "COD", "View Details"],
		["", "#AE2685", ["product.png", "Perfume"], "07 Oct, 2021", "$400", "Paid", "Online", "View Details"],
		["", "#AE4526", ["product.png", "Cricket Bat"], "05 Oct, 2021", "$452", "Chargeback", "COD", "View Details"],
		["", "#AE8522", ["product.png", "Tail Light"], "06 Oct, 2021", "$632", "Refund", "Paypal", "View Details"],
		["", "#AE4545", ["product.png", "Pets Food"], "07 Oct, 2021", "$521", "Refund", "COD", "View Details"],
		["", "#AE9652", ["product.png", "Amul Butter"], "07 Oct, 2021", "$521", "Paid", "Online", "View Details"],
		["", "#AE4256", ["product.png", "Rose Deo"], "06 Oct, 2021", "$365", "Chargeback", "COD", "View Details"],
		["", "#AE4125", ["product.png", "Toy Car"], "07 Oct, 2021", "$452", "Paid", "Paypal", "View Details"],
		["", "#AE6523", ["product.png", "Binoculars"], "08 Oct, 2021", "$365", "Paid", "COD", "View Details"],
		["", "#AE6563", ["product.png", "Key Ring"], "09 Oct, 2021", "$254", "Refund", "COD", "View Details"]
	]
}).render(document.getElementById("orders-table")), flatpickr("#order-date", {
	defaultDate: new Date,
	dateFormat: "d M, Y"
});