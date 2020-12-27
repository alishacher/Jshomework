idNum = 0;
let list=[];

class Student {
    constructor (surname, name, kurs, group, mark){
        this.surname = surname;
        this.name = name;
        this.kurs = kurs;
        this.group = group;
        this.mark = mark;
        this.id=idNum++;
    }

    addTo(id) {
        let tr = $("<tr></tr>").attr("id", "tr" + this.id.toString());
        let td_surname= $("<td></td>");
        let td_name= $("<td></td>");
        let td_kurs= $("<td></td>");
        let td_group= $("<td></td>");
        let td_mark= $("<td></td>").addClass("marks");
        let td_delete = $("<button></button>").attr("id", this.id);
        
        td_surname.html(this.surname);
        td_name.html(this.name);
        td_kurs.html(this.kurs);
        td_group.html(this.group);
        td_mark.html(this.mark);
        td_delete.html("Delete");
        td_delete.id = this.id;
        td_delete.bind("click", function(){
            for (let i = 0; i < list.length; i++) {
                if (list[i].id == parseInt(this.id)) {
                    list.splice(i, 1);
                    $("#tr" + this.id).remove();
                }
            }
        });
        
        tr.append(td_surname);
        tr.append(td_name);
        tr.append(td_kurs);
        tr.append(td_group);
        tr.append(td_mark);
        tr.append(td_delete);

        $('#'+id).append(tr);
    }
}

function listOfStudents() {
    var table = $("<table></table>").attr("id", "table");
	var tbody = $("<tbody></tbody>").attr("id", "tbody");
	table.append(tbody);
    $('body').prepend(table);
    
    let stud1= new Student("Devilz", "Monika", 2, 10, 5.67);
    let stud2= new Student("Marko", "Polo", 3, 4, 7.33);
    let stud3= new Student("James", "Rendwor", 4, 9, 8.67);
    let stud4= new Student("Kosto", "Merigold", 3, 5, 4.25);

    list.push(stud1);
    list.push(stud2);
    list.push(stud3);
    list.push(stud4);

    for(i= 0; i<list.length; i++) {list[i].addTo('tbody');}
}

function setStudent(){
    var setSurname = $('#esurname').val();
    var setName = $('#ename').val();
    var setKurs = $('#ekurs').val()
    var setGroup = $('#egroup').val();
    var setMark = $('#emark').val();

    var newStud = new Student (setSurname, setName, setKurs, setGroup, setMark);

    list.push(newStud);
    list[list.length-1].addTo('tbody');
}

function average() {
    let mark = $('.marks');
	let sum=0; i=0;
	for(; i<mark.length; i++) { sum+= parseFloat(mark[i].innerHTML, 12);}
	let avgMark= sum / i;
	$('#avg').html("Average mark is " + avgMark);
}

function getfromJson(){
    $.ajax({
        url:"Students.json",
        type:"Get",
        async: false,
        dataType: "json",
        success: function(json) {
            for (i in json) {
                var studJson = new Student(json[i].name, json[i].surname, json[i].kurs, json[i].group, json[i].mark)
                student.addTo('tbody');
                list.push(studJson);
            }
        },
        error: function(e) {
           console.log(e);
        }
    });
}