
app.factory("appCache", function($cacheFactory) {

    var cache = $cacheFactory('reallovecache');

    var set = function (page , value) {
        cache.put(page, value);
    }
    var get = function (page) {
        return cache.get(page);
    }
    var remove = function(page)
    {
        cache.remove(page);
    }
    var removeall = function()
    {
        cache.removeAll();
        cache.destory();
    }

    return {
        set: set,
        get: get,
        remove : remove,
        removeall:removeall
    };
});
