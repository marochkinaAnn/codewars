// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

//👌 SOLUTION
function friend(friends){
  let result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4 ) {
        result.push(friends[i]);
    }
  }
  return result;
}

console.log( friend(["Ryan", "Kieran", "Jason", "Yous"]) );
