function makeFriendsList(friends) {
  let friendList = document.createElement("ul");
  friends.forEach(item => {
      let friend = document.createElement("li");
      friend.textContent = `${item.firstName} ${item.lastName}`;
      friendList.append(friend);
  });
  return friendList;
}
