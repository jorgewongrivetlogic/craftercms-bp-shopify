var url = "studio/api/1/services/api/1/content/write-content.json?site=shopify&phase=onSave&path=/site/components/stores/test.xml&fileName=test.xml&user=admin&contentType=/component/store&unlock=true&nocache=Wed Apr 08 2020 14:46:56 GMT-0600 (Central Standard Time)";
var header= {"X-XSRF-TOKEN": "597eb1d7-7f06-4853-8cd4-7f801b0eeaac"};
var dataType = "json";
var data = "<component>"+
	"<content-type>/component/store</content-type>"+
	"<display-template/>"+
	"<no-template-required/>"+
	"<merge-strategy>inherit-levels</merge-strategy>"+
	"<objectGroupId>e4f1</objectGroupId>"+
	"<objectId>e4f14314-2de9-0ca1-42e1-2c2d2c3cbc04</objectId>"+
	"<file-name>e4f14314-2de9-0ca1-42e1-2c2d2c3cbc04.xml</file-name>"+
	"<internal-name>a</internal-name>"+
	"<name_s>ab</name_s>"+
	"<currency_s>USD</currency_s>"+
	"<createdDate>2020-04-08T16:37:00.267Z</createdDate>"+
	"<createdDate_dt>2020-04-08T16:37:00.267Z</createdDate_dt>"+
	"<lastModifiedDate>2020-04-08T16:37:00.267Z</lastModifiedDate>"+
	"<lastModifiedDate_dt>2020-04-08T16:37:00.267Z</lastModifiedDate_dt>"+
    "</component>";
    
var success = function() {
    alert("success");
}

$(":button").click(function() {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        headers: header,
        contentType: "application/xml; charset=UTF-8",
        crossDomain: true,
        success: success,
        dataType: dataType
    });
});

