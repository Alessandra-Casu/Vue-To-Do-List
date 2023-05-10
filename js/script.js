


const app = Vue.createApp({
        data: function(){
            return{
                newTodo:'',
                todos: [],
            }
        },
        methods:{
            addTodo: function() {
                if (this.newTodo.trim() !== '') {
                  this.todos.push(this.newTodo.trim());
                  this.newTodo = '';
                }
              },
              deleteTodo: function(index) {
                this.todos.splice(index, 1);
              }
        }
        
    })

app.mount("#app");   
    


  