(function () {
    function init() {
        this.htmlControls = {
            firstName: document.getElementById("txtFirstName")
        };

        function showDetails() {
            console.log(htmlControls.firstName.value);
        }
        showDetails();
    }
    init();
})();