$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: { get_param: "value" },
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, element) {
        $(".container").append(`<div class="box">
                <h2> <span> ${element.id} </span>  ${element.title}</h2>
                <p>${element.body}</p>
                <a class='edit' id='${element.id}' > Edit </a>
                <button class='delete' >Delete</button>
                </div>`);
      });

      $(".edit").click(function () {
        window.location.href = `form.html?${this.id}`;
      });

      $(".delete").click(function () {
        var conf = confirm("do you want to delete this item?");

        if (conf) {
          $(this).closest(".box").remove();
          confirm("item deleted succefly!");
        }
      });
    },
  });
});
