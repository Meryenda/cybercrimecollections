var Login = (function (target) {
    var parent = target;
    var widget = function () {
        parent.submit(function (e) {
            e.preventDefault();
            var username = $('#userName').val(),
                password = $('#passWord').val();
            $.ajax({
                method: 'POST',
                url: 'login',
                data: {username: username, password: password}
            })
        })
    };
    return {
        init: widget
    }
})($('#login'));
var Loader = (function (target) {
    var parent = target;
    var widget = function () {
        $(document).ajaxStart(function () {
            parent.showModal();
        }).ajaxStop(function () {
            parent.close();
        })
    };
    return {
        init: widget
    }
})(document.querySelector('dialog#loader'));
Login.init();
Loader.init();
