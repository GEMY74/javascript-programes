$(document).ready(function () {
  var url = window.location.search;
  var id = url.slice(1);

  $.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  }).done(function (data) {
    $("#title").val(data.title);
    $("#text").val(data.body);
  });

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      type: "PUT",
      success: function (res, status) {
        if (status === "success") {
          alert(`${$("#title").val()} has been updated`);
          window.location.href = "index.html";
        }
      },
    });
  });

  $(".cancel").click(function () {
    window.location.href = "index.html";
  });
});
