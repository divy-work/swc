(function (a) {
    function unused() {}
    unused.prototype[a()] = 42;
    (unused.prototype.bar = function () {
        console.log("bar");
    })();
    return unused;
})(function () {
    console.log("foo");
    return "foo";
});
