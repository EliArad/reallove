
define('citiesloaderclass',function ()
{

    function loadCities(fileName)
    {


    }

    function basic(fileName)
    {

      console.log("basic " + fileName);



    }
    return {
       basic:basic,
       loadCities:loadCities
    }
});
