function listOfStudents() {
    var table = document.createElement("table");
	table.id = "table";
    document.body.append(table);

    class Student {
        constructor (surname, name, kurs, group, mark){
            this.surname = surname;
            this.name = name;
            this.kurs = kurs;
            this.group = group;
            this.mark = mark;
        }

        addTo(id) {
            let td_surname= document.createElement('td');
            let td_name= document.createElement('td');
            let td_kurs= document.createElement('td');
            let td_group= document.createElement('td');
            let td_mark= document.createElement('td');
            
            td_surname.innerHTML = this.surname;
            td_name.innerHTML= this.name;
            td_kurs.innerHTML= this.kurs;
            td_group.innerHTML= this.group;
            td_mark.innerHTML= this.mark;
            td_mark.className= "marks";

            let tr= document.createElement('tr');
            tr.append(td_surname);
            tr.append(td_name);
            tr.append(td_kurs);
            tr.append(td_group);
            tr.append(td_mark);

            document.getElementById(id).append(tr);
        }
    }

    var tbody = document.createElement('tbody');
    tbody.id = 'tbody'; 
	table.append(tbody);

    let stud1= new Student("Devilz", "Monika", 2, 10, 5.67);
    let stud2= new Student("Marko", "Polo", 3, 4, 7.33);
    let stud3= new Student("James", "Rendwor", 4, 9, 8.67);
    let stud4= new Student("Kosto", "Merigold", 3, 5, 4.25);

    let list=[];
    list.push(stud1);
    list.push(stud2);
    list.push(stud3);
    list.push(stud4);

    for(i= 0; i<list.length; i++) {list[i].addTo('tbody');}
}

function average() {
    let mark = document.getElementsByClassName('marks');
	let sum=0; i=0;
	for(; i<mark.length; i++) { sum+= parseFloat(mark[i].innerHTML, 12);}
	let avgMark= sum / i;
	document.getElementById('avg').innerHTML = "Average mark: " + avgMark;
}