var url = "http://localhost:8080/studio/api/1/services/api/1/security/login.json";
var data = {"username":"admin","password":"admin"};

var success = function() {
    alert("success");
}

document.cookie = "XSRF-TOKEN=A_VALUE";
$(":button").click(function() {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        headers: {
            'X-XSRF-TOKEN':'A_VALUE',
            'Content-Type':'application/json'
        },
        dataType: "json",
        success: success
    });
});

