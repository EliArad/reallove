module.exports = function (model) {

  var memberModel = model;

  var createNewMember = function (id) {

    console.log(id);

    var member = new model({
      firstName: "",
      lastName: "",
      cityName: "",
      picture1: "",
      picture2: "",
      picture3: "",
      picture4: "",
      picture5: "",
      picture6: "",
      picture7: "",
      whatdoisearch: "",
      whoami: "",
      needInitiaDetails: true,
      registrationObjectId: id
    });

    member.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      } else {
        console.log("save new one")
      }
    })
  }

  return {
    createNewMember: createNewMember
  }
}
