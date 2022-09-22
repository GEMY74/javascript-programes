let url = "https://api.npoint.io/46461ce47b29357c1b51";

async function fetchUser() {
  let response = await fetch(url);
  let users = await response.json();

  // Format the array of users by adding an extra full_name attribute to each item
  users.forEach((user) => {
    user.full_name = `${user.firstName} ${user.lastName} `;
  });
  console.log(users);

  // Get only males who are older than 30
  users.forEach((user) => {
    if (user.age > 30 && user.gender == "male") {
      console.log(user);
    }
  });

  // Group the filtered users by nationality : {EG:[{ .... },{ .... }]};
  result = users.reduce(function (acc, curr) {
    acc[curr.nat] = acc[curr.nat] || [];
    acc[curr.nat].push(curr);
    return acc;
  }, Object.create(null));

  console.log(result);
}

fetchUser();