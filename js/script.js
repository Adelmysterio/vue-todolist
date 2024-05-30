const { createApp } = Vue

createApp({

    data() {
        return {
            toDoList: [
                {
                    content: "Compare un lanciafiamme",
                    done: false
                },
                {
                    content: "Accarezzare un cano",
                    done: true
                },
                {
                    content: "Invadere uno Stato Sovrano",
                    done: false
                },
                {
                    content: "Vincere Miss Universo",
                    done: false
                },
                {
                    content: "Confutare la teoria della relatività",
                    done: false
                },
            ],

        }
    },

    methods: {
        removeTask: function (i) {
            this.toDoList.splice(i, 1)
        },

        addNewTask: function (newContent) {
            let newTask = {
                content: newContent,
                done: false
            };
        }
    }



}).mount('#app')