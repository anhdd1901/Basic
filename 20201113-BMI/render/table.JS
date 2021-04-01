let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "0123456789",
            totalOff: 2,
            sessions: 14,
            detailInfo: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher_name: "Bùi Hiên"
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher_name: "Nguyễn Hàn Duy"
                }
            ]
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            totalOff: 2,
            sessions: 14,
            detailInfo: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher_name: "Bùi Hiên"
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher_name: "Nguyễn Hàn Duy"
                }
            ]
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            totalOff: 3,
            sessions: 14,
            detailInfo: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher_name: "Bùi Hiên"
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher_name: "Nguyễn Hàn Duy"
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher_name: "Nguyễn Hàn Duy"
                }
            ]
        }
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789"
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321"
        }
    ]
}

const tablebody = document.querySelector('tbody')

let table1 = student_warning.students

for (let i = 0; i < table1.length; i++) {
    let numberofrow = table1[i].detailInfo.length

    tablebody.innerHTML += `
    <tr>
        <td rowspan="${numberofrow}">${i+1}</td>
        <td rowspan="${numberofrow}">${table1[i].name}</td>
        <td rowspan="${numberofrow}">${table1[i].email}</td>
        <td rowspan="${numberofrow}">${table1[i].phone}</td>
        <td rowspan="${numberofrow}">${table1[i].totalOff}/${table1[i].sessions}</td>
        <td>${table1[i].detailInfo[0].date}</td>
        <td>${table1[i].detailInfo[0].note}</td>
        <td>${table1[i].detailInfo[0].teacher_name}</td>
    </tr>
    `

    for (let j=1;j<table1[i].detailInfo.length;j++){
        tablebody.innerHTML += `
        <tr>
            <td>${table1[i].detailInfo[j].date}</td>
            <td>${table1[i].detailInfo[j].note}</td>
            <td>${table1[i].detailInfo[j].teacher_name}</td>
        </tr>    
        `
    }
}

let detailclass = document.getElementById('detailclass')

detailclass.innerHTML = `
    <strong>Class: </strong><p class="giandong" style="display: inline-block">${student_warning.class}</p>
    <br>
    <strong>Course: </strong><p class="giandong" style="display: inline-block">${student_warning.course}</p>
    <br>
    <strong>Teacher: </strong>
    <ul style="list-style-type: none;">
        <li>${student_warning.teachers[0].name} ( ${student_warning.teachers[0].email} - ${student_warning.teachers[0].phone} )</li>
        <li>${student_warning.teachers[1].name} ( ${student_warning.teachers[1].email} - ${student_warning.teachers[1].phone} )</li>
    </ul>
    <strong>Sessions: </strong><p class="giandong" style="display: inline-block">${student_warning.sessions}</p>
`