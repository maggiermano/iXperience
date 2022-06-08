
   


const baseUrl = 'https://jsonplaceholder.typicode.com/';
async function fetchTodos() {
  const url = baseUrl + 'todos/2';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Tye': 'application/json',
    }
  });

  return response.json();
}

async function createTodo(todo) {
  const url = baseUrl + 'todos';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Tye': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  return response.json();
}

async function updateTodo(todo) {
  const url = baseUrl + 'todos/doesnotexist/2';
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Tye': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  return response.json();
}


async function init() {
  try {
    const todos = await fetchTodos();
    console.log('GET', todos);

    const response = await createTodo({
      userId: 1,
      title: "Wash the dogs",
      completed: false
    })
    console.log('POST', response);

    const updateResponse = await updateTodo({
      userId: 1,
      title: "Teach the class",
      completed: true
    });
    console.log('PUT', updateResponse);
  } catch (err) {
    console.log(err);
  }
}

init();