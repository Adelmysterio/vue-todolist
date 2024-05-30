<!-- Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. -->

creo un array di oggetti

<!-- Milestone 1 -->
creo un ciclo v-for per ul che conterra i li

collego il contenuto dei li alla chiave content del array

<!-- Milestone 2 -->

collego item X all indice del v-for

creo un metodo che rimuova dal array l elemento all indice corrispondente
   usare il metodo splice per rimuovere l elemento all indice corrispondente

<!-- MILESTONE 3 -->
creo un input ad html con un bottone

creo una funzione addNewTask
    dichiaro una oggetto newTask con le stesse chiavi di ToDoList che abbia come contenuto il v-model di input