const form = document.querySelector('#post-form');
const todoList = document.querySelector('#todo-list');

//送信ボタンを押した時のイベント
form.addEventListener('submit',(event) => {
  event.preventDefault();
  const task = form.elements['todo-input'].value;
  //コンソールで値確認
  console.log(task);

  //div要素をtodo-list要素の子要素として追加する
  const post = document.createElement('div');
  post.innerHTML = `<ul><li class = "todo-item"><input type = "checkbox"><span>${task}</span><button class = "delete-button">削除</button></li></ul>`;
  todoList.appendChild(post);
  //フォームリセット
  form.reset();

  //削除ボタンを押すと削除
  const deleteButton = post.querySelector('.delete-button');
  deleteButton.addEventListener('click', (event) => {
    const todoItem = event.target.closest('.todo-item');
    todoItem.remove();
  });

  //イベント発生した箇所がcheckboxの場合
  todoList.addEventListener('change',(event) => {
    if (event.target.type ==='checkbox'){
      const todoItem = event.target.closest('.todo-item');
      const taskText = todoItem.querySelector('span');
      if(event.target.checked){
        taskText.style.textDecoration ='line-through';
      }else{
        taskText.style.textDecoration = 'none';
      }
    }
  });
});
