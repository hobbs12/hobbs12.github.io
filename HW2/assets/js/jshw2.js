
$(document).ready(function () {
	$.getJSON("http://yijisoo.github.io/ie59000/2015spring/hw2/students.json", function (json) {
    var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].Name + "</td>");
            tr.append("<td>" + json[i].GPA + "</td>");
            tr.append("<td>" + json[i].GRE_V + "</td>");
            tr.append("<td>" + json[i].GRE_Q + "</td>");
            tr.append("<td>" + json[i].Essay+ "</td>");
            tr.append("<td>" + json[i].Recom+ "</td>");
            $('#hw2table').append(tr); 
		});
		});
	});