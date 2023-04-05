
function receivesAFunction(spy) {
    console.log(spy());
}

const data = "Hi"

function returnsANamedFunction(named) {
          return function named(data) {
            console.log(data)

          }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hi")
    }
}




